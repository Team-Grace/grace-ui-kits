import React, { ForwardedRef } from 'react';
import { StyledButtonGroup } from './ButtonGroup.styled';

export interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

const ButtonGroup = React.forwardRef(
  (
    { children, direction = 'row' }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledButtonGroup ref={ref} direction={direction}>
        {children}
      </StyledButtonGroup>
    );
  }
);

export default ButtonGroup;
