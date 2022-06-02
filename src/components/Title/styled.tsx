import styled from 'styled-components';
import { TitleStyledProps } from '../../types/title';
import { getTextStyle } from '../../utils/common';

export const StyledH1 = styled.h1<TitleStyledProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH2 = styled.h2<TitleStyledProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH3 = styled.h3<TitleStyledProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH4 = styled.h4<TitleStyledProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;

export const StyledH5 = styled.h5<TitleStyledProps>`
  ${(props) => {
    return getTextStyle(props);
  }}
`;
