import theme from '../../shared/theme';
import styled from 'styled-components';
import { getColorType, resetStyle, getFontSizeStyle } from '../../utils/common';
import {
  StyledSelectInputProps,
  StyledSelectItemContainerProps,
  StyledSelectItemProps,
  StyledSelectProps,
} from '../../types/select';
import {
  getTopPositionSelectItemContainerStyle,
  getPaddingSelectStyle,
} from '../../utils/select';

export const SelectWrapper = styled.div<StyledSelectProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
`;

export const StyledSelectInput = styled.div<StyledSelectInputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${theme.colors.gray[200]};
  padding: ${({ size }) => getPaddingSelectStyle(size)};
  border-radius: ${({ shape }) => (shape === 'rect' ? '' : '6px')};
  transition: all 0.15s;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${({ size }) => getFontSizeStyle(size)};

    &.placeholder {
      color: ${theme.colors.gray[400]};
    }

    &:first-of-type {
      width: 100%;
    }

    &:last-of-type {
      color: ${theme.colors.gray[400]};
      margin-left: 10px;
      text-align: end;
    }
  }

  &:hover {
    ${({ disabled, color }) => {
      if (!disabled) {
        return `
          box-shadow: 0 0 5px 0px ${getColorType(color).default};
          border: 1px solid ${getColorType(color).hover};
        `;
      }
    }}
  }

  &.active {
    box-shadow: 0 0 5px 0px
      ${({ color }) => color && getColorType(color).default};
    border: ${({ color }) => color && `1px solid ${getColorType(color).hover}`};
  }
`;

export const StyledSelectItemContainer = styled.ul<StyledSelectItemContainerProps>`
  ${resetStyle('ul')}
  position: absolute;
  top: ${({ size }) => getTopPositionSelectItemContainerStyle(size)};
  width: 100%;
  max-height: ${({ height }) => height && `${height}px`};
  background-color: #fff;
  box-shadow: 0 0 5px 0.5px #afafaf;
  overflow: scroll;
  z-index: 10;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const StyledSelectItem = styled.li<StyledSelectItemProps>`
  cursor: pointer;
  padding: ${({ size }) => getPaddingSelectStyle(size)};
  font-size: ${({ size }) => getFontSizeStyle(size)};

  &:hover {
    background-color: ${theme.colors.gray[50]};
  }

  &.active {
    background-color: ${({ color }) => getColorType(color).light};
  }
`;
