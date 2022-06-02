import theme from '../shared/theme';
import { TitleStyledProps } from '../types/title';
import { Align, Color, Space } from '../types/common';
import { TextStyledProps } from '../types/text';

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
  if (align === 'start') return `flex-start;`;
  else if (align === 'center') return `center;`;
  return `flex-end;`;
};

export const getTextAlignStyle = (align?: Align) => {
  if (align === 'start') return `start;`;
  else if (align === 'center') return `center;`;
  return `end;`;
};

export const getTextStyle = (props: TitleStyledProps | TextStyledProps) => {
  const { mt, mr, mb, ml, color, align } = props;

  return `
    margin: ${getMarginStyle({ mt, mr, mb, ml })};
    color: ${color && getColorType(color).default};
    text-align: ${align && getTextAlignStyle(align)};
  `;
};

export const getMarginStyle = ({ mt = 0, mr = 0, mb = 0, ml = 0 }: Space) => {
  return `${mt}px ${mr}px ${mb}px ${ml}px`;
};
