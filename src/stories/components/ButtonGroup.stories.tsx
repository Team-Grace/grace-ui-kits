import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from 'src/components/Button/Button';
import ButtonGroup, {
  ButtonGroupProps,
} from 'src/components/ButtonGroup/ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  argTypes: {
    gap: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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

const Template: Story<ButtonGroupProps> = ({
  direction,
  gap,
  align,
}: ButtonGroupProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <ButtonGroup align={align} gap={gap} direction={direction}>
        <Button color="primary" size={'small'} onClick={onClick}>
          SMALL
        </Button>
        <Button color="success" size={'medium'} onClick={onClick}>
          MEDIUM
        </Button>
        <Button color="error" size={'large'} onClick={onClick}>
          LARGE
        </Button>
      </ButtonGroup>
      <hr />
      <h1>width 100%</h1>
      <ButtonGroup align={align} gap={gap} direction={direction}>
        <Button
          color="primary"
          fullWidth={true}
          size={'small'}
          onClick={onClick}>
          SMALL
        </Button>
        <Button
          color="success"
          fullWidth={true}
          size={'medium'}
          onClick={onClick}>
          MEDIUM
        </Button>
        <Button color="error" fullWidth={true} size={'large'} onClick={onClick}>
          LARGE
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
};

Column.args = {
  direction: 'column',
  gap: 3,
  align: 'start',
};
