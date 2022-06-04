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

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  outline: 0;
`;
