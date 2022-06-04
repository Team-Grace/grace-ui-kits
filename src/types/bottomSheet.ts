import React, { ComponentProps } from 'react';
import { Space } from './common';

type BottomSheetOmitType = 'children' | 'ref';

export interface BottomSheetProps
  extends Omit<ComponentProps<'div'>, BottomSheetOmitType> {
  children: React.ReactNode;
  isOpen: boolean;
}
