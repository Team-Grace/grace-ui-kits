import React, { useCallback, ForwardedRef } from 'react';
import { ButtonProps } from './Button.interface';
import { StyledButton } from './Button.styled';

const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      fullWidth = false,
      size = 'medium',
      shape = 'rect',
      variant = 'contained',
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
      },
      []
    );
    return (
      <StyledButton
        ref={ref}
        size={size}
        shape={shape}
        variant={variant}
        fullWidth={fullWidth}
        onClick={handleClick}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
