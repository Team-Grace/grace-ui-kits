import theme from '../shared/theme';
import { Align, Color } from './common.types';

export const resetStyle = () => {
  return `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;
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
