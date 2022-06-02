export const getTextDecorationStyle = (
  underline?: boolean,
  lineThrough?: boolean
) => {
  if (underline) {
    return 'underline';
  } else if (lineThrough) {
    return 'line-through';
  }
  return '';
};
