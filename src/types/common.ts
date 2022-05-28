export type Align = 'start' | 'center' | 'end';
export type Size = 'small' | 'medium' | 'large';
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'modern'
  | undefined;
export type Variant = 'outlined' | 'contained';
export type Shape = 'rect' | 'round';

export interface Space {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}
