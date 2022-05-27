import React, { useCallback, useMemo } from 'react';
import { CardCompound } from '../../types/card';
import {
  StyledCard,
  StyledCardTitleContainer,
  StyledCardContentContainer,
} from './Card.styled';

const Card: CardCompound = React.forwardRef(
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
    },
    ref
  ) => {
    const space = { pt, pr, pb, pl, mt, mr, mb, ml };

    if (!Card.Content || !Card.Title) return <></>;
    return (
      <StyledCard
        ref={ref}
        size={size}
        width={width}
        title={title}
        {...space}
        {...rest}>
        {title && (
          <Card.Title
            size={size}
            type={type}
            title={title}
            extra={extra}
            onExtra={onExtra}
          />
        )}
        <Card.Content>{children}</Card.Content>
      </StyledCard>
    );
  }
);

Card.Title = ({ size, type, title, extra, onExtra }) => {
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
    <StyledCardTitleContainer type={type}>
      {renderTitle}
      {extra && <button onClick={handleExtra}>{extra}</button>}
    </StyledCardTitleContainer>
  );
};

Card.Content = ({ children }) => {
  return <StyledCardContentContainer>{children}</StyledCardContentContainer>;
};

export default Card;
