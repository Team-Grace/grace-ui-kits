import { ComponentProps } from 'react';
import { Space } from './common';

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
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  fullWidth?: boolean;
}

export type ButtonStyledProps = Pick<ButtonProps, StyledPickType>;
