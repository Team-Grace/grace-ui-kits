import React, { ComponentProps } from 'react';

type BottomSheetOmitType = 'children' | 'ref';

export interface BottomSheetProps
  extends Omit<ComponentProps<'div'>, BottomSheetOmitType> {
  children: React.ReactNode;
  isOpen: boolean;
  isDimmed?: boolean;
  onCancel?: () => void;
}
