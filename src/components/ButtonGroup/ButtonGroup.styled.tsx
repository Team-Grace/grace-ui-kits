import styled from 'styled-components';
import { ButtonGroupProps } from './ButtonGroup';
import { getJustifyContentStyle, getAlignItemsStyle } from './ButtonGroup.util';

export type ButtonGroupStyledProps = Omit<ButtonGroupProps, 'children'>;

export const StyledButtonGroup = styled.div<ButtonGroupStyledProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
  gap: ${({ distance }) => distance && `${distance * 5}px`};

  ${({ position, direction }) => {
    if (position) {
      if (direction === 'row') {
        return getJustifyContentStyle(position);
      }
      return getAlignItemsStyle(position);
    }
  }}
`;
