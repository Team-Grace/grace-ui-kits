import React, { ForwardedRef, ComponentProps } from 'react';
import { StyledButtonGroup } from './ButtonGroup.styled';

export interface ButtonGroupProps extends Omit<ComponentProps<'div'>, 'ref'> {
  children: React.ReactNode;
  space?: number[];
  direction?: 'row' | 'column';
  position?: 'start' | 'center' | 'end';
  distance?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const ButtonGroup = React.forwardRef(
  (
    {
      children,
      space = [],
      distance = 3,
      position = 'start',
      direction = 'row',
      ...rest
    }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledButtonGroup
        ref={ref}
        space={space}
        position={position}
        distance={distance}
        direction={direction}
        {...rest}>
        {children}
      </StyledButtonGroup>
    );
  }
);

export default ButtonGroup;
