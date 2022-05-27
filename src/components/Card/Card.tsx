import React, { ForwardedRef, useCallback } from 'react';
import { CardProps, CardAddonProps, CardContentProps } from '../../types/card';
import {
  StyledCard,
  StyledCardTitleContainer,
  StyledCardContentContainer,
} from './Card.styled';

const CardAddon = ({ children, extra, type, onExtra }: CardAddonProps) => {
  const handleExtra = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (extra && onExtra) onExtra(e);
    },
    [extra, onExtra]
  );

  return (
    <StyledCardTitleContainer type={type}>
      {children}
      {extra && <button onClick={handleExtra}>{extra}</button>}
    </StyledCardTitleContainer>
  );
};

const CardContent = ({ children }: CardContentProps) => {
  return <StyledCardContentContainer>{children}</StyledCardContentContainer>;
};

const Card = Object.assign(
  React.forwardRef(
    (
      {
        children,
        size = 'medium',
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
    ) => {
      const space = { pt, pr, pb, pl, mt, mr, mb, ml };

      return (
        <StyledCard ref={ref} size={size} width={width} {...space} {...rest}>
          {children}
        </StyledCard>
      );
    }
  ),
  {
    Addon: CardAddon,
    Content: CardContent,
  }
);

export default Card;
