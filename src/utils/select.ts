import { Size } from 'types/common';

export const getPaddingSizeStyle = (size?: Size) => {
  if (size === 'small') {
    return `padding: 4px 14px;`;
  } else if (size === 'medium') {
    return `padding: 6px 18px;`;
  }
  return `padding: 8px 22px;`;
};

export const getFontSizeStyle = (size?: Size) => {
  if (size === 'small') {
    return `font-size: 0.85rem; `;
  } else if (size === 'medium') {
    return `font-size: 1rem; `;
  }
  return ` font-size: 1.15rem; `;
};

export const getTopPositionStyle = (size?: Size) => {
  if (size === 'small') {
    return `top: 35px`;
  } else if (size === 'medium') {
    return `top: 45px`;
  }
  return `top: 55px; `;
};
