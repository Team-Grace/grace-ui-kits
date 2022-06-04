import React, { ForwardedRef, useCallback } from 'react';
import { CardProps, CardAddonProps, CardContentProps } from '../../types/card';
import {
  CardWrapper,
  CardTitleContainer,
  CardContentContainer,
} from './styled';

const CardAddon = ({ children, extra, type, onExtra }: CardAddonProps) => {
  const handleExtra = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (extra && onExtra) onExtra(e);
    },
    [extra, onExtra]
  );

  return (
    <CardTitleContainer type={type}>
      {children}
      {extra && <button onClick={handleExtra}>{extra}</button>}
    </CardTitleContainer>
  );
};

const CardContent = ({ children }: CardContentProps) => {
  return <CardContentContainer>{children}</CardContentContainer>;
};

const Card = Object.assign(
  React.forwardRef(
    (
      {
        children,
        size = 'medium',
        shape = 'rect',
        width,
        mt = 0,
        mr = 0,
        mb = 0,
        ml = 0,
        ...rest
      }: CardProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      const props = { shape, size, width, mt, mr, mb, ml };

      return (
        <CardWrapper ref={ref} {...props} {...rest}>
          {children}
        </CardWrapper>
      );
    }
  ),
  {
    Addon: CardAddon,
    Content: CardContent,
  }
);

export default Card;
