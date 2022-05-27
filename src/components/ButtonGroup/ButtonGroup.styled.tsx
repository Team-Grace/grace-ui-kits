import styled from 'styled-components';
import { ButtonGroupProps } from '../../types/button';
import { getFlexItemAlignStyle } from '../../utils/common';

export type ButtonGroupStyledProps = Omit<ButtonGroupProps, 'children' | 'ref'>;

export const StyledButtonGroup = styled.div<ButtonGroupStyledProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
  gap: ${({ gap }) => gap && `${gap * 5}px`};
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};

  ${({ align, direction }) => {
    if (align) {
      if (direction === 'row') {
        return `justify-content: ${getFlexItemAlignStyle(align)}`;
      }
      return `align-items: ${getFlexItemAlignStyle(align)}`;
    }
  }};
`;
