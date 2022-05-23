import React from 'react';
import { StyledButtonGroup } from './ButtonGroup.styled';

export interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

const ButtonGroup = ({ children, direction = 'row' }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup direction={direction}>{children}</StyledButtonGroup>
  );
};

export default ButtonGroup;
