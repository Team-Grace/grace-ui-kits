import React, { ComponentProps } from 'react';
import { Color, Shape } from './common';

type ModalOmitType = 'ref' | 'children' | 'title';
type ModalContextPickType = 'color' | 'onClose' | 'onConfirm' | 'buttonType';

export interface ModalProps extends Omit<ComponentProps<'div'>, ModalOmitType> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onConfirm: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: 'double' | 'single';
  shape?: Shape;
  color?: Color;
  title?: string;
  isBackground?: boolean;
}

export type ModalPickChildren = Pick<ModalProps, 'children'>;
export type ModalContextProps = Pick<ModalProps, ModalContextPickType>;
export type StyledModalProps = Pick<ModalProps, 'shape'>;
