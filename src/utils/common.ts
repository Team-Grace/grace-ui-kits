import theme from '../shared/theme';
import { StyledTitleProps } from '../types/title';
import { Align, Color, Space, Size } from '../types/common';
import { StyledTextProps } from '../types/text';

export const resetStyle = (type: string) => {
  switch (type) {
    case 'button':
      return `
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
      `;
    case 'ul':
      return `
        margin: 0;
        padding: 0;
        list-style: none;
      `;
    default:
      return '';
  }
};

export const getColorType = (color?: Color) => {
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

export const getFlexItemAlignStyle = (align?: Align) => {
  if (align === 'start') {
    return `flex-start;`;
  } else if (align === 'center') {
    return `center;`;
  }
  return `flex-end;`;
};

export const getTextAlignStyle = (align?: Align) => {
  if (align === 'start') {
    return `start;`;
  } else if (align === 'center') {
    return `center;`;
  }
  return `end;`;
};

export const getTextStyle = ({
  mt,
  mr,
  mb,
  ml,
  color,
  align,
}: StyledTitleProps | StyledTextProps) => {
  return `
    margin: ${getMarginStyle({ mt, mr, mb, ml })};
    color: ${getColorType(color).default};
    text-align: ${getTextAlignStyle(align)};
  `;
};

export const getMarginStyle = ({ mt = 0, mr = 0, mb = 0, ml = 0 }: Space) => {
  return `${mt}px ${mr}px ${mb}px ${ml}px`;
};

export const getPaddingSizeStyle = (size?: Size) => {
  if (size === 'small') {
    return `4px 14px;`;
  } else if (size === 'medium') {
    return `6px 18px;`;
  }
  return `8px 22px;`;
};

export const getFontSizeStyle = (size?: Size) => {
  if (size === 'small') {
    return `0.85rem;`;
  } else if (size === 'medium') {
    return `1rem;`;
  }
  return `1.15rem;`;
};
