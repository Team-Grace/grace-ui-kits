import { ComponentProps } from 'react';
import { Color, Shape, Size, Space, Variant } from './common';

type StyledPickType = 'shape' | 'fullWidth' | 'size' | 'color' | 'variant';

export interface ButtonGroupProps
  extends Omit<ComponentProps<'div'>, 'ref'>,
    Space {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'ref' | 'children'> {
  children: React.ReactNode | string;
  color?: Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  fullWidth?: boolean;
}

export type StyledButtonProps = Pick<ButtonProps, StyledPickType>;
export type StyledButtonGroupProps = Omit<ButtonGroupProps, 'children' | 'ref'>;
