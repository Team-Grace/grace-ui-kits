import { TitleProps } from '../types/title';
import theme from '../shared/theme';
import { Align, Color } from '../types/common';

export const resetStyle = (type: string) => {
  switch (type) {
    case 'button':
      return `
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: #fff;
        cursor: pointer;
      `;
    default:
      return '';
  }
};

export const getColorType = (color: Color) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'success':
      return theme.colors.success;
    case 'error':
      return theme.colors.error;
    case 'modern':
      return theme.colors.modern;
    default:
      return theme.colors.black;
  }
};

export const getFlexItemAlignStyle = (align: Align) => {
  if (align === 'start') {
    return `flex-start;`;
  } else if (align === 'center') {
    return `center;`;
  }
  return `flex-end;`;
};

export const getTextAlignStyle = (align: Align) => {
  if (align === 'start') {
    return `start;`;
  } else if (align === 'center') {
    return `center;`;
  }
  return `end;`;
};

export const getTextStyle = (props: TitleProps) => {
  const { mt, mr, mb, ml, pt, pr, pb, pl, color, align } = props;

  return `
    width: 100%;
    margin: ${mt}px ${mr}px ${mb}px ${ml}px;
    padding: ${pt}px ${pr}px ${pb}px ${pl}px;
    color: ${color && getColorType(color).default};
    text-align: ${align && getTextAlignStyle(align)};
  `;
};
