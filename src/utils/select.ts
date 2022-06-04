import { Size } from 'types/common';

export const getTopPositionSelectItemContainerStyle = (size?: Size) => {
  if (size === 'small') {
    return `38px`;
  } else if (size === 'medium') {
    return `45px`;
  }
  return `55px; `;
};

export const getPaddingSelectStyle = (size?: Size) => {
  if (size === 'small') {
    return `6px 14px;`;
  } else if (size === 'medium') {
    return `8px 18px;`;
  }
  return `10px 22px;`;
};
