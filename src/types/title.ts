import { ComponentProps } from 'react';
import { Space } from './common';

export interface TitleProps
  extends Omit<ComponentProps<'h1'>, 'ref' | 'children'>,
    Space {
  children: React.ReactNode | string;
  level?: number;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  align?: 'start' | 'center' | 'end';
}
