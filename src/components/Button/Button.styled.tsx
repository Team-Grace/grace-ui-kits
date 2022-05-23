import styled from 'styled-components';
import { ButtonStyledProps } from './Button.interface';

export const StyledButton = styled.button<ButtonStyledProps>`
  background-color: #ffa2a2;
  line-height: 1.75;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${({ shape }) => (shape === 'rect' ? '0' : '6px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  &:hover {
    filter: brightness(93%);
  }

  ${({ size }) => {
    if (size === 'small') {
      return `
        padding: 4px 14px;
        font-size: 0.8rem;
      `;
    } else if (size === 'medium') {
      return `
        padding: 6px 18px;
        font-size: 0.9rem;
      `;
    } else {
      return `
        padding: 8px 22px;
        font-size: 1rem;
      `;
    }
  }}
`;
