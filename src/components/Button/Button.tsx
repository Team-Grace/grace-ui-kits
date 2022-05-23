import React, { useCallback, ForwardedRef } from 'react';
import { ButtonProps } from './Button.interface';
import { StyledButton } from './Button.styled';

const Button = React.forwardRef(
  (
    {
      children,
      fullWidth = false,
      disabled = false,
      color = 'primary',
      size = 'medium',
      shape = 'rect',
      variant = 'contained',
      onClick,
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
        color={color}
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
        onClick={handleClick}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
