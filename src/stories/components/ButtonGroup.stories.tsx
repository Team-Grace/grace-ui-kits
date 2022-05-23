import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from 'src/components/Button/Button';
import ButtonGroup, {
  ButtonGroupProps,
} from 'src/components/ButtonGroup/ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  argTypes: {
    direction: {
      options: [true, false],
      control: { type: 'check' },
    },
  },
};

const Template: Story<ButtonGroupProps> = ({ direction }: ButtonGroupProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <ButtonGroup direction={direction}>
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
      <ButtonGroup direction={direction}>
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
};

Column.args = {
  direction: 'column',
};
