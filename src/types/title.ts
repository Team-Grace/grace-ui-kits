import { ComponentProps } from 'react';
import { Space } from './common';

export interface TitleProps
  extends Omit<ComponentProps<'h1'>, 'ref' | 'children'>,
    Space {
  children: React.ReactNode | string;
  level?: 1 | 2 | 3 | 4 | 5;
  color?: '' | 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  align?: 'start' | 'center' | 'end';
}

export type TitleStyledProps = Omit<TitleProps, 'children'>;