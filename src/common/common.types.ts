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

export type Align = 'start' | 'center' | 'end';
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'modern'
  | 'gray'
  | undefined;
