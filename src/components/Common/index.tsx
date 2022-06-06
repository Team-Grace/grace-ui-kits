import styled from 'styled-components';

export const Dimmend = styled.div<{ visible?: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
  background-color: ${({ visible }) =>
    visible ? 'rgba(0, 0, 0, 0.4)' : 'transparent'};
`;
