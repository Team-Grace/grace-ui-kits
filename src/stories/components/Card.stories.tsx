import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Card, { CardContent, CardAddon } from 'src/components/Card/Card';
import { CardProps } from 'src/types/card';

export default {
  title: 'components/Card',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    type: {
      options: ['contained', 'outlined'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<CardProps> = ({ size, extra, type, onExtra }) => {
  return (
    <>
      <h2>Card No Title</h2>
      <Card mb={20} type={type}>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </p>
        </CardContent>
      </Card>

      <hr />

      <h2>Card width=100%</h2>
      <Card mb={20} size={size} type={type}>
        <CardAddon extra={extra} onExtra={onExtra}>
          This is Addon (Header)
        </CardAddon>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </p>
        </CardContent>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </p>
        </CardContent>
      </Card>

      <hr />

      <h2>Card width=500</h2>
      <Card mb={20} size={size} width={500} type={type}>
        <CardContent>
          <p>Hi</p>
          <p>Grace Ui kits</p>
          <p>with React</p>
        </CardContent>
        <CardAddon extra={extra} onExtra={onExtra}>
          This is Addon (Footer)
        </CardAddon>
      </Card>
    </>
  );
};

export const Default = Template.bind({});
export const Extra = Template.bind({});
export const Contained = Template.bind({});

Default.args = {
  size: 'medium',
};

Extra.args = {
  size: 'medium',
  extra: 'More',
  onExtra: () => alert('hi'),
};

Contained.args = {
  size: 'medium',
  type: 'contained',
  extra: 'More',
  onExtra: () => alert('hi'),
};
