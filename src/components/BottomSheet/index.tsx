import React from 'react';
import { BottomSheetProps } from '../../types/bottomSheet';
import { StyledBottomSheet } from './styled';

const BottomSheet = ({ children }: BottomSheetProps) => {
  return <StyledBottomSheet>{children}</StyledBottomSheet>;
};

export default BottomSheet;
