import React from 'react';
import { Dimmend } from '../../components/Common';
import { BottomSheetProps } from '../../types/bottomSheet';
import { BottomSheetWrapper, InnerContainer } from './styled';

const BottomSheet = ({ children, isOpen }: BottomSheetProps) => {
  return (
    <Dimmend>
      <BottomSheetWrapper isOpen={isOpen}>
        <InnerContainer>{children}</InnerContainer>
      </BottomSheetWrapper>
    </Dimmend>
  );
};

export default BottomSheet;
