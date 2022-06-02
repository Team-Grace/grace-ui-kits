import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  argTypes: {
    gap: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    direction: {
      options: ['row', 'column'],
      control: { type: 'select' },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<any> = ({ direction, gap, size, align }: any) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <h2>Default ButtonGroup {`Align: ${align}`}</h2>
      <ButtonGroup align={align} gap={gap} direction={direction} mb={20}>
        <Button color="primary" size={size} onClick={onClick}>
          Button
        </Button>
        <Button color="secondary" size={size} onClick={onClick}>
          Button
        </Button>
        <Button color="success" size={size} onClick={onClick}>
          Button
        </Button>
        <Button color="error" size={size} onClick={onClick}>
          Button
        </Button>
        <Button color="modern" size={size} onClick={onClick}>
          Button
        </Button>
      </ButtonGroup>

      <hr />

      <h2>FullWidth Buttons ButtoGroup {`Align: ${align}`}</h2>
      <ButtonGroup align={align} gap={gap} direction={direction}>
        <Button color="primary" fullWidth={true} size={size} onClick={onClick}>
          Button
        </Button>
        <Button
          color="secondary"
          fullWidth={true}
          size={size}
          onClick={onClick}>
          Button
        </Button>
        <Button color="success" fullWidth={true} size={size} onClick={onClick}>
          Button
        </Button>
        <Button color="error" fullWidth={true} size={size} onClick={onClick}>
          Button
        </Button>
        <Button color="modern" fullWidth={true} size={size} onClick={onClick}>
          Button
        </Button>
      </ButtonGroup>
    </>
  );
};

export const Row = Template.bind({});
export const Column = Template.bind({});

Row.args = {
  direction: 'row',
  gap: 3,
  align: 'start',
  size: 'medium',
};

Column.args = {
  direction: 'column',
  gap: 3,
  align: 'start',
  size: 'medium',
};
