import React, { ForwardedRef, useCallback, useContext, useMemo } from 'react';
import { CardProps } from '../../types/card';
import {
  StyledCard,
  StyledCardTitleContainer,
  StyledCardContentContainer,
} from './Card.styled';

const CardContext = React.createContext<
  Omit<CardProps, 'children'> | undefined
>(undefined);

const Card: any = React.forwardRef(
  (
    {
      children,
      size = 'medium',
      type = 'outlined',
      width,
      mt = 0,
      mr = 0,
      mb = 0,
      ml = 0,
      pt = 0,
      pr = 0,
      pb = 0,
      pl = 0,
      ...rest
    }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const space = { pt, pr, pb, pl, mt, mr, mb, ml };

    return (
      <CardContext.Provider value={{ size, type }}>
        <StyledCard ref={ref} size={size} width={width} {...space} {...rest}>
          {children}
        </StyledCard>
      </CardContext.Provider>
    );
  }
);

Card.Addon = ({ children, extra, onExtra }: CardProps) => {
  const { size, type } = useContext(CardContext) as Pick<
    CardProps,
    'size' | 'type'
  >;

  const handleExtra = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (extra && onExtra) onExtra(e);
    },
    [extra, onExtra]
  );

  const renderTitle = useMemo(() => {
    if (size === 'small') return <h5>{children}</h5>;
    if (size === 'medium') return <h4>{children}</h4>;
    if (size === 'large') return <h3>{children}</h3>;
  }, [size]);

  return (
    <StyledCardTitleContainer type={type}>
      {renderTitle}
      {extra && <button onClick={handleExtra}>{extra}</button>}
    </StyledCardTitleContainer>
  );
};

Card.Content = ({ children }: Pick<CardProps, 'children'>): JSX.Element => {
  return <StyledCardContentContainer>{children}</StyledCardContentContainer>;
};

export default Card;
