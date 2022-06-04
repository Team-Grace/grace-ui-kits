import styled from 'styled-components';

export const BottomSheetWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.2s ease-out;
`;

export const BottomSheetContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: calc(100vh - 50px);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  transform: ${({ isOpen }) =>
    isOpen ? `translate3d(0, 0, 0)` : 'translate3d(0, 100%, 0)'};
  transition: transform 0.2s ease-out;
  will-change: transform;
  z-index: 1001;
`;

export const BottomSheetContentsContainer = styled.div``;

export const BottomSheetHandlerWrapper = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

export const BottomSheetHandle = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;
