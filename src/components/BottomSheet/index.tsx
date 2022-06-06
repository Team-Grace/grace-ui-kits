import React, { useCallback, useEffect } from 'react';
import { Dimmend } from '../../components/Common';
import { BottomSheetProps } from '../../types/bottomSheet';
import {
  BottomSheetContainer,
  BottomSheetContentsContainer,
  BottomSheetHandle,
  BottomSheetHandlerWrapper,
  BottomSheetWrapper,
} from './styled';

const BottomSheetHandler = () => {
  return (
    <BottomSheetHandlerWrapper>
      <BottomSheetHandle />
    </BottomSheetHandlerWrapper>
  );
};

const BottomSheet = ({
  children,
  isOpen,
  isDimmed = true,
  onClose,
}: BottomSheetProps) => {
  const handleCancel = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <BottomSheetWrapper isOpen={isOpen}>
      <Dimmend onClick={handleCancel} visible={isOpen && isDimmed} />
      <BottomSheetContainer isOpen={isOpen}>
        <BottomSheetHandler />
        <BottomSheetContentsContainer>{children}</BottomSheetContentsContainer>
      </BottomSheetContainer>
    </BottomSheetWrapper>
  );
};

export default BottomSheet;
