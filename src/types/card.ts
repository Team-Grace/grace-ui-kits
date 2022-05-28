import { ComponentProps } from 'react';
import { Size, Space, Shape, Variant } from './common';

export interface CardProps
  extends Omit<ComponentProps<'div'>, 'ref' | 'children' | 'title'>,
    Space {
  children: React.ReactNode;
  size?: Size;
  type?: Variant;
  shape?: Shape;
  width?: number;
  title?: string;
  extra?: string | React.ReactNode;
  onExtra?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type CardAddonProps = Pick<
  CardProps,
  'children' | 'extra' | 'type' | 'onExtra'
>;

export type CardContentProps = Pick<CardProps, 'children'>;
export type CardStyledProps = Omit<CardProps, 'children' | 'ref'>;
