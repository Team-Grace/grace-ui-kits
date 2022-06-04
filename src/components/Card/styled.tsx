import { Size } from '../../types/common';
import styled from 'styled-components';
import theme from '../../shared/theme';
import { StyledCardProps } from '../../types/card';

const getCardPaddingStyle = (size: Size) => {
  if (size === 'small') {
    return `padding: 10px;`;
  } else if (size === 'medium') {
    return `padding: 15px;`;
  }
  return `padding: 20px;`;
};

export const CardWrapper = styled.div<StyledCardProps>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: ${({ shape }) => (shape === 'rect' ? '' : '6px')};
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  background-color: #fff;
  overflow: hidden;

  & > div {
    ${({ size }) => {
      if (size) return getCardPaddingStyle(size);
    }}
  }

  & > div:first-of-type {
    border-top: none;
  }

  & > div:last-of-type {
    border-bottom: none;
  }

  & > div:not(last-of-type, first-of-type) {
    border-bottom: 1px solid ${theme.colors.gray[200]};
  }
`;

export const CardTitleContainer = styled.div<Pick<StyledCardProps, 'type'>>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    cursor: pointer;
    font-size: 0.875rem;
    background-color: transparent;
    border: none;
    color: ${theme.colors.primary.default};
    margin-left: 12px;

    &:hover {
      color: ${theme.colors.primary.active};
    }
  }

  ${({ type }) => {
    if (type === 'contained') {
      return `background-color: ${theme.colors.gray[50]}`;
    }
  }}
`;

export const CardContentContainer = styled.div``;
