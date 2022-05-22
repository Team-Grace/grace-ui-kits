import React, { useCallback } from 'react';
import { ButtonProps } from './Button.interface';
import { StyledButton } from './Button.styled';

const Button = ({
  children,
  onClick,
  fullWidth = false,
  size = 'medium',
  shape = 'rect',
  variant = 'contained',
}: ButtonProps) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
  }, []);

  return (
    <StyledButton
      size={size}
      shape={shape}
      variant={variant}
      fullWidth={fullWidth}
      onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
