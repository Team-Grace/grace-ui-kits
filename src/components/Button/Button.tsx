import React, { useCallback, ForwardedRef, useState } from 'react';
import { StyledButton } from './Button.styled';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

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
    const [ripple, setRipple] = useState(false);
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        setRipple(true);

        if (onClick) {
          onClick(e);
        }

        setTimeout(() => {
          setRipple(false);
        }, 300);
      },
      []
    );
    return (
      <StyledButton
        ref={ref}
        className={ripple ? 'active' : ''}
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
