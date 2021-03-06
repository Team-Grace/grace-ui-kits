import React, { ForwardedRef } from 'react';
import { ButtonGroupProps } from '../../types/button';
import { StyledButtonGroup } from './styled';

const ButtonGroup = React.forwardRef(
  (
    {
      children,
      mt = 0,
      mr = 0,
      mb = 0,
      ml = 0,
      gap = 3,
      align = 'start',
      direction = 'row',
      ...rest
    }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const props = { direction, gap, align, mt, mr, mb, ml };

    return (
      <StyledButtonGroup ref={ref} {...props} {...rest}>
        {children}
      </StyledButtonGroup>
    );
  }
);

export default ButtonGroup;
