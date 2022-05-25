import React, {
  ComponentProps,
  useCallback,
  ForwardedRef,
  useState,
} from 'react';
import { StyledButton } from './Button.styled';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'ref' | 'children'> {
  children: React.ReactNode | string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  fullWidth?: boolean;
}

const Button = React.forwardRef(
  (
    {
      children,
      fullWidth = false,
      color = 'primary',
      size = 'medium',
      shape = 'rect',
      variant = 'contained',
      onClick,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const [ripple, setRipple] = useState(false);
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        setRipple(true);

        if (onClick) onClick(e);
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
        onClick={handleClick}
        {...rest}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
