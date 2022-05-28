import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Select from 'src/components/Select/Select';
import Title from 'src/components/Title/Title';

export default {
  title: 'components/Select',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'modern'],
      control: { type: 'select' },
    },
    shape: {
      options: ['rect', 'round'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<any> = ({ color, placeholder, shape }: any) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('Disabled Value');

  const onChange1 = (value: any) => {
    setValue1(value);
  };
  const onChange2 = (value: any) => {
    setValue2(value);
  };
  const onChange3 = (value: any) => {
    setValue3(value);
  };

  return (
    <div>
      <Title level={2} mb={20} color={color}>
        Color={color} width=100%
      </Title>
      <Select
        mb={40}
        color={color}
        value={value1}
        shape={shape}
        onChange={onChange1}
        placeholder={placeholder}>
        <Select.Item value={'React'}>React</Select.Item>
        <Select.Item value={'Javascript'}>Javascript</Select.Item>
        <Select.Item value={'CSS'}>CSS</Select.Item>
        <Select.Item value={'HTML'}>HTML</Select.Item>
      </Select>

      <hr />

      <Title level={2} mt={40} mb={20} color={color}>
        Color={color} width=300 height=300 Scroll
      </Title>
      <Select
        mb={40}
        width={300}
        height={300}
        color={color}
        shape={shape}
        value={value2}
        onChange={onChange2}
        placeholder={placeholder}>
        <Select.Item value={'React'}>React</Select.Item>
        <Select.Item value={'Javascript'}>Javascript</Select.Item>
        <Select.Item value={'CSS'}>CSS</Select.Item>
        <Select.Item value={'HTML'}>HTML</Select.Item>
        <Select.Item value={'StyledComponent'}>StyledComponent</Select.Item>
        <Select.Item value={'Docker'}>Docker</Select.Item>
        <Select.Item value={'AWS'}>AWS</Select.Item>
        <Select.Item value={'Node'}>Node</Select.Item>
        <Select.Item value={'SASS'}>SASS</Select.Item>
        <Select.Item value={'Vue'}>Vue</Select.Item>
      </Select>

      <hr />

      <Title level={2} mb={20} mt={40} color={color}>
        Color={color} disabled
      </Title>
      <Select
        mb={40}
        color={color}
        value={value3}
        shape={shape}
        onChange={onChange3}
        disabled
        placeholder={placeholder}>
        <Select.Item value={'React'}>React</Select.Item>
        <Select.Item value={'Javascript'}>Javascript</Select.Item>
        <Select.Item value={'CSS'}>CSS</Select.Item>
        <Select.Item value={'HTML'}>HTML</Select.Item>
      </Select>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  placeholder: 'Select Value',
  shape: 'rect',
};
