import React, { ComponentProps } from 'react';

export interface ModalProps
  extends Omit<ComponentProps<'div'>, 'ref' | 'children' | 'title'> {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onConfirm: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: 'double' | 'single';
  shape?: 'rect' | 'round';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  title?: string;
}

export type ModalPickChildren = Pick<ModalProps, 'children'>;
export type ModalContextProps = Pick<
  ModalProps,
  'color' | 'onClose' | 'onConfirm' | 'buttonType'
>;
export type StyledModalProps = Pick<ModalProps, 'shape'>;
