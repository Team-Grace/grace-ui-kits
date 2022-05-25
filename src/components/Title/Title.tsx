import React, { ComponentProps, ForwardedRef } from 'react';
import { Space } from 'src/common/common.types';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
} from './Title.styled';

export interface TitleProps
  extends Omit<ComponentProps<'h1'>, 'ref' | 'children'>,
    Space {
  children: React.ReactNode | string;
  level?: number;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  align?: 'start' | 'center' | 'end';
}
const Title = React.forwardRef(
  (
    {
      children,
      color,
      level = 1,
      align = 'start',
      mt = 0,
      mr = 0,
      mb = 0,
      ml = 0,
      pt = 0,
      pr = 0,
      pb = 0,
      pl = 0,
      ...rest
    }: TitleProps,
    ref: ForwardedRef<HTMLHeadingElement>
  ) => {
    const space = { pt, pr, pb, pl, mt, mr, mb, ml };

    switch (level) {
      case 1:
        return (
          <StyledH1 ref={ref} align={align} color={color} {...space} {...rest}>
            {children}
          </StyledH1>
        );
      case 2:
        return (
          <StyledH2 ref={ref} align={align} color={color} {...space} {...rest}>
            {children}
          </StyledH2>
        );
      case 3:
        return (
          <StyledH3 ref={ref} align={align} color={color} {...space} {...rest}>
            {children}
          </StyledH3>
        );
      case 4:
        return (
          <StyledH4 ref={ref} align={align} color={color} {...space} {...rest}>
            {children}
          </StyledH4>
        );
      default:
        return (
          <StyledH5 ref={ref} align={align} color={color} {...space} {...rest}>
            {children}
          </StyledH5>
        );
    }
  }
);

export default Title;
