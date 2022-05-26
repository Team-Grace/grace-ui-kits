import theme from '../../shared/theme';
import styled from 'styled-components';
import { resetStyle } from '../../common/common.util';
import { CardProps } from './Card';

export type CardStyledProps = Omit<CardProps, 'children' | 'ref'>;

export const StyledCard = styled.div<CardStyledProps>`
  ${resetStyle()}

  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  border: 1px solid ${theme.colors.gray[100]};
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
  background-color: #fff;

  & > div {
    ${({ size }) => {
      if (size === 'small') {
        return `padding: 10px;`;
      } else if (size === 'medium') {
        return `padding: 15px;`;
      }
      return `padding: 20px;`;
    }}
  }
`;

export const StyledCardTitleContainer = styled.div<CardStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.gray[100]};

  button {
    cursor: pointer;
    font-size: 0.875rem;
    background-color: transparent;
    border: none;
    color: ${theme.colors.primary.default};

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

export const StyledCardContentContainer = styled.div``;
