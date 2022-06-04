import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BottomSheet from 'components/BottomSheet';

export default {
  title: 'components/BottomSheet',
  argTypes: {},
};

const Template: Story<any> = () => {
  return (
    <div>
      <BottomSheet>{'hi'}</BottomSheet>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
