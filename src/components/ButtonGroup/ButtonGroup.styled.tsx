import styled from 'styled-components';
import { ButtonGroupStyledProps } from './ButtonGroup.inteface';

export const StyledButtonGroup = styled.div<ButtonGroupStyledProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};

  button + button {
    margin: ${({ direction }) =>
      direction === 'row' ? '0 0 0 10px' : '10px 0 0 0'};
  }
`;
