import styled from 'styled-components';
import { StyledTextProps } from '../../types/text';
import { getTextStyle, getFontSizeStyle } from '../../utils/common';
import { getTextDecorationStyle } from '../../utils/text';

export const StyledText = styled.p<StyledTextProps>`
  ${({ mt, mr, mb, ml, color, align }) =>
    getTextStyle({ mt, mr, mb, ml, color, align })}

  font-size: ${({ size }) => getFontSizeStyle(size)};
  font-weight: ${({ bold }) => bold && 'bold'};
  font-style: ${({ italic }) => italic && 'italic'};
  text-decoration: ${({ underline, lineThrough }) => {
    if (underline || lineThrough)
      return getTextDecorationStyle(underline, lineThrough);
  }};
`;
