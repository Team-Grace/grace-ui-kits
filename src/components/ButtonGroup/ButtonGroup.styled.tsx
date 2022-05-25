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
  margin: ${({ space }) =>
    space && `${space[0]}px ${space[1]}px ${space[2]}px ${space[3]}px`};

  ${({ position, direction }) => {
    if (position) {
      if (direction === 'row') {
        return getJustifyContentStyle(position);
      }
      return getAlignItemsStyle(position);
    }
  }};
`;
