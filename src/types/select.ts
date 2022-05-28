import { ComponentProps } from 'react';
import { Size, Space, Shape, Color } from './common';

type OmitType = 'ref' | 'children';

export interface SelectProps
  extends Omit<ComponentProps<'div'>, OmitType>,
    Space {
  children: React.ReactNode;
  value: string | number;
  onChange: (e: any) => void;
  size?: Size;
  color?: Color;
  shape?: Shape;
  width?: number;
  height?: number;
  disabled?: boolean;
}

export interface SelectItemProps {
  children: React.ReactNode | string;
  value: string | number;
}
export interface SelectContextProps {
  color?: Color;
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

export type SelectStyledProps = Pick<
  SelectProps,
  'color' | 'mt' | 'ml' | 'mr' | 'mb' | 'width'
>;
