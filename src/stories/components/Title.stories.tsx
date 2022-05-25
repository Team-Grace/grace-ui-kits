import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Title, { TitleProps } from 'src/components/Title/Title';

export default {
  title: 'components/Title',
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<TitleProps> = ({ align }: TitleProps) => {
  return (
    <>
      <Title align={align} mb={20}>
        h1 Grace Ui Kits 1
      </Title>
      <Title align={align} level={1} mt={20} mb={20}>
        h1 Grace Ui Kits 2
      </Title>
      <Title align={align} level={2} mt={20} mb={20}>
        h2 Grace Ui Kits
      </Title>
      <Title align={align} level={3} mt={20} mb={20}>
        h3 Grace Ui Kits
      </Title>
      <Title align={align} level={4} mt={20} mb={20}>
        h4 Grace Ui Kits
      </Title>
      <Title align={align} level={5} mt={20} mb={20}>
        h5 Grace Ui Kits
      </Title>

      <hr />

      <Title align={align} mt={20} mb={20}>
        h1 Grace Ui Kits1
      </Title>
      <Title align={align} color="primary" mt={20} mb={20}>
        h1 Grace Ui Kits 2
      </Title>
      <Title align={align} color="secondary" level={2} mt={20} mb={20}>
        h2 Grace Ui Kits
      </Title>
      <Title align={align} color="success" level={3} mt={20} mb={20}>
        h3 Grace Ui Kits
      </Title>
      <Title align={align} color="error" level={4} mt={20} mb={20}>
        h4 Grace Ui Kits
      </Title>
      <Title align={align} color="modern" level={5} mt={20} mb={20}>
        h5 Grace Ui Kits
      </Title>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  align: 'start',
};
