import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from 'src/components/Button/Button';
import ButtonGroup from 'src/components/ButtonGroup/ButtonGroup';
import { ButtonGroupProps } from 'src/components/ButtonGroup/ButtonGroup.inteface';

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
  return (
    <>
      <ButtonGroup direction={direction}>
        <Button size={'small'} onClick={() => {}}>
          SMALL
        </Button>
        <Button size={'medium'} onClick={() => {}}>
          MEDIUM
        </Button>
        <Button size={'large'} onClick={() => {}}>
          LARGE
        </Button>
      </ButtonGroup>
      <hr />
      <ButtonGroup direction={direction}>
        <Button fullWidth={true} size={'small'} onClick={() => {}}>
          SMALL
        </Button>
        <Button fullWidth={true} size={'medium'} onClick={() => {}}>
          MEDIUM
        </Button>
        <Button fullWidth={true} size={'large'} onClick={() => {}}>
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
