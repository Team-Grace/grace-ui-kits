import React, { ForwardedRef } from 'react';
import { TextProps } from '../../types/text';
import { StyledText } from './styled';

const Text = React.forwardRef(
  (
    {
      children,
      color = '',
      align = 'start',
      size = 'medium',
      underline = false,
      lineThrough = false,
      italic = false,
      bold = false,
      mt = 0,
      mr = 0,
      mb = 0,
      ml = 0,
      ...rest
    }: TextProps,
    ref: ForwardedRef<HTMLParagraphElement>
  ) => {
    const props = {
      underline,
      italic,
      bold,
      lineThrough,
      color,
      align,
      size,
      mt,
      mr,
      mb,
      ml,
    };

    return (
      <StyledText ref={ref} {...props} {...rest}>
        {children}
      </StyledText>
    );
  }
);

export default Text;
