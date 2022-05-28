import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Text from 'src/components/Text/Text';

export default {
  title: 'components/Text',
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<any> = ({ align }: any) => {
  return (
    <div>
      <Text align={align} size="small" mt={20} mb={20}>
        Text Grace Ui Kits (small)
      </Text>
      <Text align={align} mt={20} mb={20}>
        Text Grace Ui Kits (medium)
      </Text>
      <Text align={align} size="large" mt={20} mb={20}>
        Text Grace Ui Kits (large)
      </Text>

      <hr />

      <Text align={align} color="primary" mt={20} mb={20}>
        Text Grace Ui Kits (primary)
      </Text>
      <Text align={align} color="secondary" mt={20} mb={20}>
        Text Grace Ui Kits (secondary)
      </Text>
      <Text align={align} color="success" mt={20} mb={20}>
        Text Grace Ui Kits (success)
      </Text>
      <Text align={align} color="error" mt={20} mb={20}>
        Text Grace Ui Kits (error)
      </Text>
      <Text align={align} color="modern" mt={20} mb={20}>
        Text Grace Ui Kits (modern)
      </Text>

      <hr />

      <Text align={align} underline mt={20} mb={20}>
        Text Grace Ui Kits (underline)
      </Text>
      <Text align={align} lineThrough mt={20} mb={20}>
        Text Grace Ui Kits (lineThrough)
      </Text>
      <Text align={align} italic mt={20} mb={20}>
        Text Grace Ui Kits (italic)
      </Text>
      <Text align={align} bold mt={20} mb={20}>
        Text Grace Ui Kits (bold)
      </Text>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  align: 'start',
};
