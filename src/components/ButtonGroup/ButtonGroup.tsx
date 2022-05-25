import React, { ForwardedRef, ComponentProps } from 'react';
import { Space } from 'src/common/common.types';
import { StyledButtonGroup } from './ButtonGroup.styled';

export interface ButtonGroupProps
  extends Omit<ComponentProps<'div'>, 'ref'>,
    Space {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end';
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const ButtonGroup = React.forwardRef(
  (
    {
      children,
      mt = 0,
      mr = 0,
      mb = 0,
      ml = 0,
      pt = 0,
      pr = 0,
      pb = 0,
      pl = 0,
      gap = 3,
      align = 'start',
      direction = 'row',
      ...rest
    }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const space = {
      pt,
      pr,
      pb,
      pl,
      mt,
      mr,
      mb,
      ml,
    };

    return (
      <StyledButtonGroup
        ref={ref}
        align={align}
        gap={gap}
        direction={direction}
        {...space}
        {...rest}>
        {children}
      </StyledButtonGroup>
    );
  }
);

export default ButtonGroup;
