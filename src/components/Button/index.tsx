import React, { useCallback, ForwardedRef, useState } from 'react';
import { ButtonProps } from '../../types/button';
import { StyledButton } from './styled';

const Button = React.forwardRef(
  (
    {
      children,
      fullWidth = false,
      color = 'primary',
      size = 'medium',
      shape = 'rect',
      variant = 'contained',
      mt = 0,
      ml = 0,
      mb = 0,
      mr = 0,
      onClick,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const props = { size, shape, color, variant, fullWidth, mt, mr, ml, mb };
    const [ripple, setRipple] = useState(false);
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        setRipple(true);

        if (onClick) onClick(e);
        setTimeout(() => setRipple(false), 300);
      },
      [onClick]
    );
    return (
      <StyledButton
        ref={ref}
        className={ripple ? 'active' : ''}
        onClick={handleClick}
        {...props}
        {...rest}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
