import styled from 'styled-components';
import { TextStyledProps } from '../../types/text';
import { getTextStyle } from '../../utils/common';
import { Size } from '../../types/common';

const getTextDecorationStyle = (underline?: boolean, lineThrough?: boolean) => {
  if (underline) {
    return 'underline';
  } else if (lineThrough) {
    return 'line-through';
  }
  return '';
};

const getTextSizeStyle = (size?: Size) => {
  switch (size) {
    case 'small':
      return '0.875rem';
    case 'large':
      return '1.2rem';
    default:
      return '1rem';
  }
};

export const StyledText = styled.p<TextStyledProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
  font-size: ${({ size }) => getTextSizeStyle(size)};
  font-weight: ${({ bold }) => bold && 'bold'};
  font-style: ${({ italic }) => italic && 'italic'};
  text-decoration: ${({ underline, lineThrough }) => {
    if (underline || lineThrough)
      return getTextDecorationStyle(underline, lineThrough);
  }};
`;
