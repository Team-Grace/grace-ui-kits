import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { Space } from './common';

export interface CardProps
  extends Omit<ComponentProps<'div'>, 'ref' | 'children' | 'title'>,
    Space {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'contained' | 'outlined';
  width?: number;
  title?: string;
  extra?: string | React.ReactNode;
  onExtra?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type CardCompound = ForwardRefExoticComponent<
  CardProps & RefAttributes<HTMLDivElement>
>;

export type CardStyledProps = Omit<CardProps, 'children' | 'ref'>;
