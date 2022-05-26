import React, {
  ComponentProps,
  ForwardedRef,
  useCallback,
  useMemo,
} from 'react';
import { Space } from '../../common/common.types';
import {
  StyledCard,
  StyledCardTitleContainer,
  StyledCardContentContainer,
} from './Card.styled';

export interface CardProps
  extends Omit<ComponentProps<'div'>, 'ref' | 'children' | 'title'>,
    Space {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'contained' | 'outlined';
  width?: number;
  title?: string;
  extra?: string | React.ReactNode;
  onExtra?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card = React.forwardRef(
  (
    {
      children,
      size = 'medium',
      title = '',
      extra = '',
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
      onExtra,
      ...rest
    }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const space = { pt, pr, pb, pl, mt, mr, mb, ml };

    const handleExtra = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (extra && onExtra) onExtra(e);
      },
      [extra, onExtra]
    );

    const renderTitle = useMemo(() => {
      if (size === 'small') return <h5>{title}</h5>;
      if (size === 'medium') return <h4>{title}</h4>;
      if (size === 'large') return <h3>{title}</h3>;
    }, [size, title]);

    return (
      <StyledCard
        ref={ref}
        size={size}
        width={width}
        title={title}
        {...space}
        {...rest}>
        {title && (
          <StyledCardTitleContainer type={type}>
            {renderTitle}
            {extra && <button onClick={handleExtra}>{extra}</button>}
          </StyledCardTitleContainer>
        )}
        <StyledCardContentContainer>{children}</StyledCardContentContainer>
      </StyledCard>
    );
  }
);

export default Card;
