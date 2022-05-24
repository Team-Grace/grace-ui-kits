import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from 'src/components/Button/Button';
import ButtonGroup, {
  ButtonGroupProps,
} from 'src/components/ButtonGroup/ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  argTypes: {
    distance: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    direction: {
      options: ['row', 'column'],
      control: { type: 'select' },
    },
    position: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ButtonGroupProps> = ({
  direction,
  distance,
  position,
}: ButtonGroupProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <ButtonGroup
        position={position}
        distance={distance}
        direction={direction}>
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
      <ButtonGroup
        position={position}
        distance={distance}
        direction={direction}>
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
  distance: 3,
  position: 'start',
};

Column.args = {
  direction: 'column',
  distance: 3,
  position: 'start',
};
