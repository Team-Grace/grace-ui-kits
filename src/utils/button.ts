import { getColorType } from './common';
import { Color, Variant } from '../types/common';

export const getVariantStyle = (colorType?: Color, variant?: Variant) => {
  const color = getColorType(colorType);

  if (variant === 'outlined') {
    return `
      border: 1px solid ${color.default};
      color: ${color.default};
      background-color: #fff;
    `;
  }
  return `
    border: 1px solid ${color.default};
    background-color: ${color.default};
  `;
};

export const getVarianHoverStyle = (colorType?: Color, variant?: Variant) => {
  const color = getColorType(colorType);

  if (variant === 'outlined') {
    return `
      background-color: ${color.light};
      color: ${color.default};
    `;
  }
  return `background-color: ${color.hover};`;
};
