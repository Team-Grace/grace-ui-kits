type Position = 'start' | 'center' | 'end';

export const getJustifyContentStyle = (position: Position) => {
  if (position === 'start') {
    return `justify-content: flex-start;`;
  } else if (position === 'center') {
    return `justify-content: center;`;
  }
  return `justify-content: flex-end;`;
};

export const getAlignItemsStyle = (position: Position) => {
  if (position === 'start') {
    return `align-items: flex-start;`;
  } else if (position === 'center') {
    return `align-items: center;`;
  }
  return `align-items: flex-end;`;
};
