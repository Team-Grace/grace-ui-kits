import { ComponentProps } from 'react';
import { Space } from './common';

export interface TextProps
  extends Omit<ComponentProps<'h1'>, 'ref' | 'children'>,
    Space {
  children: React.ReactNode | string;
  underline?: boolean;
  lineThrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: '' | 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  align?: 'start' | 'center' | 'end';
}

export type TextStyledProps = Omit<TextProps, 'children' | 'ref'>;
