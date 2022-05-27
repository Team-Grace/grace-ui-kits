import styled from 'styled-components';
import { TitleProps } from '../../types/title';
import { getTextStyle } from '../../utils/common';

export type TitleStyledProps = Omit<TitleProps, 'children' | 'ref'>;

export const StyledH1 = styled.h1<TitleProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH2 = styled.h2<TitleProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH3 = styled.h3<TitleProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH4 = styled.h4<TitleProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH5 = styled.h5<TitleProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;
