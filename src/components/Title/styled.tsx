import styled from 'styled-components';
import { StyledTitleProps } from '../../types/title';
import { getTextStyle } from '../../utils/common';

export const StyledH1 = styled.h1<StyledTitleProps>`
  ${(props) => getTextStyle(props)}
`;

export const StyledH2 = styled.h2<StyledTitleProps>`
  ${(props) => getTextStyle(props)}
`;

export const StyledH3 = styled.h3<StyledTitleProps>`
  ${(props) => getTextStyle(props)}
`;

export const StyledH4 = styled.h4<StyledTitleProps>`
  ${(props) => getTextStyle(props)}
`;

export const StyledH5 = styled.h5<StyledTitleProps>`
  ${(props) => getTextStyle(props)}
`;
