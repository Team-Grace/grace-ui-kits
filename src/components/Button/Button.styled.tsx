import styled from 'styled-components';
import theme from '../../shared/theme';
import { ButtonProps } from './Button';
import {
  getButtonSizeStyle,
  getVariantStyle,
  getVarianHoverStyle,
} from './Button.util';

export type ButtonStyledProps = Omit<ButtonProps, 'children' | 'onClick'>;

export const StyledButton = styled.button<ButtonStyledProps>`
  color: #fff;
  line-height: 1.75;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${({ shape }) => (shape === 'rect' ? '0' : '6px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  // size
  ${({ size }) => {
    if (size) return getButtonSizeStyle(size);
  }}

  // color
  ${({ color, variant }) => {
    if (color && variant) return getVariantStyle(color, variant);
  }}

  // hover
  &:hover {
    ${({ color, variant }) => {
      if (color && variant) return getVarianHoverStyle(color, variant);
    }}
  }

  // disabled
  &:disabled {
    background-color: ${theme.colors.gray[10]};
    border: 1px solid ${theme.colors.gray[300]};
    color: ${theme.colors.gray[300]};
`;
