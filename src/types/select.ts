import { ComponentProps } from 'react';
import { Size, Space, Shape, Color } from './common';

type SelectOmitType = 'ref' | 'children';
type StyledSelectPickType = 'color' | 'width' | 'mt' | 'ml' | 'mr' | 'mb';
type StyledSelectInputPickType = 'color' | 'disabled' | 'shape' | 'size';

export interface SelectProps
  extends Omit<ComponentProps<'div'>, SelectOmitType>,
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
  size?: Size;
  selectValue?: string | number;
  onChange: (value: string | number) => void;
}

export type StyledSelectProps = Pick<SelectProps, StyledSelectPickType>;
export type StyledSelectInputProps = Pick<
  SelectProps,
  StyledSelectInputPickType
>;
export type StyledSelectItemContainerProps = Pick<
  SelectProps,
  'height' | 'size'
>;
export type StyledSelectItemProps = Pick<SelectProps, 'color' | 'size'>;
