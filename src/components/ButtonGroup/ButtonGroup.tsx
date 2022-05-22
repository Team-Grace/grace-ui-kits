import React from 'react';
import { ButtonGroupProps } from './ButtonGroup.inteface';
import { StyledButtonGroup } from './ButtonGroup.styled';

const ButtonGroup = ({ children, direction = 'row' }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup direction={direction}>{children}</StyledButtonGroup>
  );
};

export default ButtonGroup;
