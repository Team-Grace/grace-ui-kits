import { ComponentProps } from 'react';
import { Align, Color, Size, Space } from './common';

type TextOmitType = 'ref' | 'children';
type StyledTextPickType =
  | 'mt'
  | 'ml'
  | 'mb'
  | 'mr'
  | 'color'
  | 'align'
  | 'size'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'lineThrough';

export interface TextProps
  extends Omit<ComponentProps<'h1'>, TextOmitType>,
    Space {
  children: React.ReactNode | string;
  underline?: boolean;
  lineThrough?: boolean;
  bold?: boolean;
  italic?: boolean;
  size?: Size;
  color?: Color;
  align?: Align;
}

export type StyledTextProps = Pick<TextProps, StyledTextPickType>;
