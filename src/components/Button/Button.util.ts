import theme from '../../shared/theme';

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'modern';
type Variant = 'outlined' | 'contained';

export const getButtonSizeStyle = (size: Size) => {
  if (size === 'small') {
    return `
      padding: 4px 14px;
      font-size: 0.8rem;
    `;
  } else if (size === 'medium') {
    return `
      padding: 6px 18px;
      font-size: 0.9rem;
    `;
  } else {
    return `
      padding: 8px 22px;
      font-size: 1rem;
    `;
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
    default:
      return theme.colors.modern;
  }
};

export const getVariantStyle = (color: Color, variant: Variant) => {
  if (variant === 'outlined') {
    return `
      border: 1px solid ${getColorType(color).default};
      color: ${getColorType(color).default};
      background-color: #fff;
    `;
  }
  return `
    border: 1px solid ${getColorType(color).default};
    background-color: ${getColorType(color).default};
  `;
};

export const getVarianHoverStyle = (color: Color, variant: Variant) => {
  if (variant === 'outlined') {
    return `
      background-color: ${getColorType(color).light};
      color: ${getColorType(color).default};
    `;
  }
  return `background-color: ${getColorType(color).hover};`;
};
