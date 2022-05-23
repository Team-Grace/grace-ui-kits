import styled from 'styled-components';
import theme from '../../shared/theme';
import { ButtonProps } from './Button';

export type ButtonStyledProps = Omit<ButtonProps, 'children' | 'onClick'>;

export const StyledButton = styled.button<ButtonStyledProps>`
  color: #fff;
  line-height: 1.75;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${({ shape }) => (shape === 'rect' ? '0' : '6px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  &:disabled {
    background-color: ${theme.colors.gray[10]};
    border: 1px solid ${theme.colors.gray[300]};
    color: ${theme.colors.gray[300]};
  }

  // size
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

  // color
  ${({ color, variant }) => {
    switch (color) {
      case 'primary':
        if (variant === 'outlined') {
          return `
            border: 1px solid ${theme.colors.primary.default};
            color: ${theme.colors.primary.default};
            background-color: #fff;
          `;
        }
        return `
          border: 1px solid ${theme.colors.primary.default};
          background-color: ${theme.colors.primary.default};
        `;
      case 'secondary':
        if (variant === 'outlined') {
          return `
            border: 1px solid ${theme.colors.secondary.default};
            color: ${theme.colors.secondary.default};
            background-color: #fff;
          `;
        }
        return `
          border: 1px solid ${theme.colors.secondary.default};
          background-color: ${theme.colors.secondary.default};
        `;
      case 'success':
        if (variant === 'outlined') {
          return `
            border: 1px solid ${theme.colors.success.default};
            color: ${theme.colors.success.default};
            background-color: #fff;
          `;
        }
        return `
          border: 1px solid ${theme.colors.success.default};
          background-color: ${theme.colors.success.default};
        `;
      case 'error':
        if (variant === 'outlined') {
          return `
            border: 1px solid ${theme.colors.error.default};
            color: ${theme.colors.error.default};
            background-color: #fff;
          `;
        }
        return `
          border: 1px solid ${theme.colors.error.default};
          background-color: ${theme.colors.error.default};
        `;
      case 'modern':
        if (variant === 'outlined') {
          return `
            border: 1px solid ${theme.colors.modern.default};
            color: ${theme.colors.modern.default};
            background-color: #fff;
          `;
        }
        return `
          border: 1px solid ${theme.colors.modern.default};
          background-color: ${theme.colors.modern.default};
        `;
    }
  }}

  // hover
  &:hover {
    ${({ color, variant }) => {
      switch (color) {
        case 'primary':
          if (variant === 'outlined') {
            return `
              background-color: ${theme.colors.primary.light};
              color: ${theme.colors.primary.default};
            `;
          }
          return `background-color: ${theme.colors.primary.hover};`;
        case 'secondary':
          if (variant === 'outlined') {
            return `
              background-color: ${theme.colors.secondary.light};
              color: ${theme.colors.secondary.default}
            `;
          }
          return `background-color: ${theme.colors.secondary.hover};`;
        case 'success':
          if (variant === 'outlined') {
            return `
              background-color: ${theme.colors.success.light};
              color: ${theme.colors.success.default}
            `;
          }
          return `background-color: ${theme.colors.success.hover};`;
        case 'error':
          if (variant === 'outlined') {
            return `
              background-color: ${theme.colors.error.light};
              color: ${theme.colors.error.default};
            `;
          }
          return `background-color: ${theme.colors.error.hover};`;
        case 'modern':
          if (variant === 'outlined') {
            return `
              background-color: ${theme.colors.modern.light};
              color: ${theme.colors.modern.default}
            `;
          }
          return `background-color: ${theme.colors.modern.hover};`;
      }
    }}
  }
`;
