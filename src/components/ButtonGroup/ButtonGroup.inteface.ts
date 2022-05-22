import React from 'react';

export interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

export type ButtonGroupStyledProps = Omit<ButtonGroupProps, 'children'>;
