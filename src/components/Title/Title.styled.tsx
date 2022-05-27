import styled from 'styled-components';
import { TitleProps } from '../../types/title';
import { getColorType, getTextAlignStyle } from '../../utils/common';

export type TitleStyledProps = Omit<TitleProps, 'children' | 'ref'>;

export const StyledH1 = styled.h1<TitleProps>`
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
  color: ${({ color }) => getColorType(color).default};
  text-align: ${({ align }) => align && getTextAlignStyle(align)};
`;

export const StyledH2 = styled.h2<TitleProps>`
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
  color: ${({ color }) => getColorType(color).default};
  text-align: ${({ align }) => align && getTextAlignStyle(align)};
`;

export const StyledH3 = styled.h3<TitleProps>`
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
  color: ${({ color }) => getColorType(color).default};
  text-align: ${({ align }) => align && getTextAlignStyle(align)};
`;

export const StyledH4 = styled.h4<TitleProps>`
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
  color: ${({ color }) => getColorType(color).default};
  text-align: ${({ align }) => align && getTextAlignStyle(align)};
`;

export const StyledH5 = styled.h5<TitleProps>`
  margin: ${({ mt, mr, mb, ml }) => `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt, pr, pb, pl }) => `${pt}px ${pr}px ${pb}px ${pl}px`};
  color: ${({ color }) => getColorType(color).default};
  text-align: ${({ align }) => align && getTextAlignStyle(align)};
`;
