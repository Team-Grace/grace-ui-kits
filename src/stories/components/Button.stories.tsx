import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ButtonProps } from '../../types/button';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';

export default {
  title: 'components/Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'modern'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    shape: {
      options: ['rect', 'round'],
      control: { type: 'select' },
    },
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ButtonProps> = ({
  children,
  fullWidth,
  size,
  color,
  shape,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonGroup direction="column">
      <Button
        disabled={disabled}
        color={color}
        shape={shape}
        size={size}
        variant={'contained'}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children}
      </Button>

      <Button
        disabled={disabled}
        color={color}
        shape={shape}
        size={size}
        variant={'outlined'}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children}
      </Button>
    </ButtonGroup>
  );
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Error = Template.bind({});
export const Modern = Template.bind({});

Primary.args = {
  children: 'Button Primary',
  fullWidth: false,
  size: 'medium',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => alert(e.target),
};

Secondary.args = {
  children: 'Button Secondat',
  fullWidth: false,
  color: 'secondary',
  size: 'medium',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => alert(e.target),
};

Success.args = {
  children: 'Button Success',
  fullWidth: false,
  size: 'medium',
  color: 'success',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => alert(e.target),
};

Error.args = {
  children: 'Button Error',
  fullWidth: false,
  size: 'medium',
  color: 'error',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => alert(e.target),
};

Modern.args = {
  children: 'Button Modern',
  fullWidth: false,
  size: 'medium',
  color: 'modern',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => alert(e.target),
};
