import styled from 'styled-components';
import { ButtonStyledProps } from './Button.interface';

export const StyledButton = styled.button<ButtonStyledProps>`
  background-color: #fa9696;
  line-height: 1.75;
  border: none;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  /* width: max-content; */

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
