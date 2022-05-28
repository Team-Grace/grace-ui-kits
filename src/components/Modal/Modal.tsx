import React, {
  ForwardedRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Title from '../Title/Title';
import { Dimmend } from '../Common/Common.styled';
import {
  ModalProps,
  ModalPickChildren,
  ModalContextProps,
} from '../../types/modal';
import {
  StyledModal,
  ModalHeaderContainer,
  ModalContentContainer,
  ModalButtonContainer,
} from './Modal.styled';

const ModalContext = React.createContext<ModalContextProps | undefined>(
  undefined
);

const ModalHeader = ({ children }: ModalPickChildren) => {
  const { color, onClose } = useContext(ModalContext) as ModalContextProps;
  return (
    <ModalHeaderContainer color={color}>
      <Title level={4}>{children}</Title>
      <button onClick={onClose}>X</button>
    </ModalHeaderContainer>
  );
};

const ModalContent = ({ children }: ModalPickChildren) => {
  return <ModalContentContainer>{children}</ModalContentContainer>;
};

const ModalFooter = () => {
  const { color, buttonType, onClose, onConfirm } = useContext(
    ModalContext
  ) as ModalContextProps;

  return (
    <ModalButtonContainer>
      {buttonType === 'single' ? (
        <Button color={color} size="large" onClick={onConfirm} fullWidth>
          확인
        </Button>
      ) : (
        <ButtonGroup direction="row" gap={0}>
          <Button color={color} size="large" onClick={onConfirm} fullWidth>
            확인
          </Button>
          <Button
            color={color}
            size="large"
            variant="outlined"
            onClick={onClose}
            fullWidth>
            취소
          </Button>
        </ButtonGroup>
      )}
    </ModalButtonContainer>
  );
};

const Modal = Object.assign(
  React.forwardRef(
    (
      {
        children,
        title = '',
        buttonType = 'single',
        shape = 'rect',
        color = 'primary',
        isOpen = false,
        onClose,
        onConfirm,
        ...rest
      }: ModalProps,
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      const handleClose = useCallback(
        (e?: React.MouseEvent<HTMLButtonElement>) => {
          if (onClose) onClose(e);
        },
        [onClose]
      );

      const handleConfirm = useCallback(
        (e?: React.MouseEvent<HTMLButtonElement>) => {
          if (onConfirm) onConfirm(e);
        },
        [onConfirm]
      );

      const providerValue = useMemo(() => {
        return {
          color,
          buttonType,
          onClose: handleClose,
          onConfirm: handleConfirm,
        };
      }, [color, buttonType, handleClose, handleConfirm]);

      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);

      return (
        <>
          {isOpen && (
            <Dimmend>
              <ModalContext.Provider value={providerValue}>
                <StyledModal ref={ref} shape={shape} {...rest}>
                  {title && <Modal.Header>{title}</Modal.Header>}
                  <Modal.Content>{children}</Modal.Content>
                  <Modal.Footer />
                </StyledModal>
              </ModalContext.Provider>
            </Dimmend>
          )}
        </>
      );
    }
  ),
  {
    Header: ModalHeader,
    Content: ModalContent,
    Footer: ModalFooter,
  }
);

export default Modal;
