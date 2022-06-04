import styled from 'styled-components';
import { StyledButtonGroupProps } from '../../types/button';
import { getFlexItemAlignStyle, getMarginStyle } from '../../utils/common';

export const ButtonGroupWrapper = styled.div<StyledButtonGroupProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
  gap: ${({ gap }) => gap && `${gap * 5}px`};
  margin: ${({ mt, mr, mb, ml }) => getMarginStyle({ mt, mr, mb, ml })};

  ${({ align, direction }) => {
    if (direction === 'row') {
      return `justify-content: ${getFlexItemAlignStyle(align)}`;
    }
    return `align-items: ${getFlexItemAlignStyle(align)}`;
  }};
`;
