import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ButtonProps } from 'src/components/Button/Button.interface';
import Button from 'src/components/Button/Button';
import ButtonGroup from 'src/components/ButtonGroup/ButtonGroup';

export default {
  title: 'components/Button',
  argTypes: {
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
  shape,
  variant,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonGroup direction="column">
      <Button
        color="primary"
        shape={shape}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children} (primary)
      </Button>
      <Button
        color="secondary"
        shape={shape}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children} (secondary)
      </Button>
      <Button
        color="modern"
        shape={shape}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children} (modern)
      </Button>
      <Button
        color="success"
        shape={shape}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children} (success)
      </Button>
      <Button
        color="error"
        shape={shape}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children} (error)
      </Button>
      <Button
        disabled={true}
        shape={shape}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        onClick={onClick}>
        {children} (Disabled)
      </Button>
    </ButtonGroup>
  );
};

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const FullWidth = Template.bind({});

Small.args = {
  children: 'Button Small',
  fullWidth: false,
  size: 'small',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

Medium.args = {
  children: 'Button Medium',
  fullWidth: false,
  size: 'medium',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

Large.args = {
  children: 'Button Large',
  fullWidth: false,
  size: 'large',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};

FullWidth.args = {
  children: 'Button Full Width (Size: Medium)',
  fullWidth: true,
  size: 'medium',
  shape: 'rect',
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target),
};
