import { Size } from 'types/common';

export const getTopPositionSelectItemContainerStyle = (size?: Size) => {
  if (size === 'small') {
    return `top: 38px`;
  } else if (size === 'medium') {
    return `top: 45px`;
  }
  return `top: 55px; `;
};

export const getPaddingSelectStyle = (size?: Size) => {
  if (size === 'small') {
    return `padding: 6px 14px;`;
  } else if (size === 'medium') {
    return `padding: 8px 18px;`;
  }
  return `padding: 10px 22px;`;
};
