import styled from 'styled-components';
import theme from '../../shared/theme';
import { StyledButtonProps } from '../../types/button';
import {
  getColorType,
  getFontSizeStyle,
  getPaddingSizeStyle,
} from '../../utils/common';
import { getVariantStyle, getVarianHoverStyle } from '../../utils/button';

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  color: #fff;
  line-height: 1.75;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: ${({ shape }) => (shape === 'rect' ? '0' : '6px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  // size
  ${({ size }) => {
    if (size) {
      return `
        ${getPaddingSizeStyle(size)}
        ${getFontSizeStyle(size)}
      `;
    }
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

  &.active::after {
    position: absolute;
    content: '';
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: sizeUp 0.4s;
    background-color: ${({ color, variant }) =>
      variant === 'contained'
        ? getColorType(color).light
        : getColorType(color).hover};
  }

  // disabled
  &:disabled {
    background-color: ${theme.colors.gray[10]};
    border: 1px solid ${theme.colors.gray[300]};
    color: ${theme.colors.gray[300]};
  }

  @keyframes sizeUp {
    from {
      width: 0;
      opacity: 0.3;
    }

    to {
      width: 150%;
      opacity: 0.1;
    }
  }
`;
