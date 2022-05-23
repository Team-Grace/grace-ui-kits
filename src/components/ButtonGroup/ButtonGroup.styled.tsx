import styled from 'styled-components';
import { ButtonGroupProps } from './ButtonGroup';

export type ButtonGroupStyledProps = Omit<ButtonGroupProps, 'children'>;

export const StyledButtonGroup = styled.div<ButtonGroupStyledProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};

  button + button {
    margin: ${({ direction }) =>
      direction === 'row' ? '0 0 0 10px' : '10px 0 0 0'};
  }
`;
