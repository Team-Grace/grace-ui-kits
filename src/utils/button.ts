import { getColorType } from './common';
import { Size, Color, Variant } from '../types/common';

export const getButtonSizeStyle = (size: Size) => {
  if (size === 'small') {
    return `
      padding: 4px 14px;
      font-size: 0.85rem;
    `;
  } else if (size === 'medium') {
    return `
      padding: 6px 18px;
      font-size: 1rem;
    `;
  } else {
    return `
      padding: 8px 22px;
      font-size: 1.15rem;
    `;
  }
};

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
