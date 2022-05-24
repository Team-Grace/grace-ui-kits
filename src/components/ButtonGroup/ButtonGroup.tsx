import React, { ForwardedRef } from 'react';
import { StyledButtonGroup } from './ButtonGroup.styled';

export interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  position?: 'start' | 'center' | 'end';
  distance?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const ButtonGroup = React.forwardRef(
  (
    {
      children,
      distance = 3,
      position = 'start',
      direction = 'row',
    }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledButtonGroup
        ref={ref}
        position={position}
        distance={distance}
        direction={direction}>
        {children}
      </StyledButtonGroup>
    );
  }
);

export default ButtonGroup;
