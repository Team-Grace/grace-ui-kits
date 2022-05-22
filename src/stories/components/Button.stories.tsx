import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ButtonProps } from 'src/components/Button/Button.interface';
import Button from 'src/components/Button/Button';

export default {
  title: 'components/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'check' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ButtonProps> = ({
  children,
  fullWidth,
  size,
  onClick,
}: ButtonProps) => {
  return (
    <Button size={size} fullWidth={fullWidth} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const FullWidth = Template.bind({});

Small.args = {
  children: 'Small',
  fullWidth: false,
  size: 'small',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

Medium.args = {
  children: 'Medium',
  fullWidth: false,
  size: 'medium',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

Large.args = {
  children: 'Large',
  fullWidth: false,
  size: 'large',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

FullWidth.args = {
  children: 'Full Width',
  fullWidth: true,
  size: 'medium',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};
