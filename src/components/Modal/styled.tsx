import theme from '../../shared/theme';
import styled from 'styled-components';
import { getColorType, resetStyle } from '../../utils/common';
import { StyledModalProps } from '../../types/modal';
import { Color } from '../../types/common';

export const StyledModal = styled.div<StyledModalProps>`
  min-width: 280px;
  max-width: 340px;
  background-color: #fff;
  overflow: hidden;
  border-radius: ${({ shape }) => (shape === 'rect' ? '' : '6px')};
`;

export const ModalHeaderContainer = styled.div<{ color: Color }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${theme.colors.gray[100]};

  & > button {
    ${resetStyle('button')}
    background-color: transparent;
    font-size: 1rem;

    &:hover {
      color: ${({ color }) => color && getColorType(color).hover};
    }
  }
`;

export const ModalContentContainer = styled.div`
  padding: 25px 20px;
`;

export const ModalButtonContainer = styled.div`
  button {
    border: none;
  }
`;
