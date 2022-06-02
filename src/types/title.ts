import { ComponentProps } from 'react';
import { Align, Color, Space } from './common';

type StyledTitlePickProps = 'mt' | 'mr' | 'mb' | 'ml' | 'color' | 'align';

export interface TitleProps
  extends Omit<ComponentProps<'h1'>, 'ref' | 'children'>,
    Space {
  children: React.ReactNode | string;
  level?: 1 | 2 | 3 | 4 | 5;
  color?: Color;
  align?: Align;
}

export type StyledTitleProps = Pick<TitleProps, StyledTitlePickProps>;
