import React from 'react';
import Card from '../../components/Card';
import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Text from '../../components/Text';
import { CardProps } from '../../types/card';
import { Story } from '@storybook/react/types-6-0';

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
    shape: {
      options: ['rect', 'round'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<CardProps> = ({ size, extra, type, shape, onExtra }) => {
  return (
    <>
      <h2>Card No Title</h2>
      <Card mb={20} size={size} shape={shape}>
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </Text>
        </Card.Content>
      </Card>

      <hr />

      <h2>Card width=100%</h2>
      <Card mb={20} size={size} shape={shape}>
        <Card.Addon extra={extra} onExtra={onExtra} type={type}>
          <Title level={3}>Header</Title>
        </Card.Addon>
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </Text>
        </Card.Content>
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </Text>
        </Card.Content>
      </Card>

      <hr />

      <h2>Card width=500</h2>
      <Card mb={20} size={size} width={500} type={type} shape={shape}>
        <Card.Addon extra={extra} onExtra={onExtra} type={type}>
          <Title level={3}>Header</Title>
        </Card.Addon>
        <Card.Content>
          <Text italic size="large">
            Hi
          </Text>
          <Text>Grace Ui kits</Text>
          <Text>with React</Text>
        </Card.Content>
      </Card>

      <hr />

      <h2>Card with Button (round)</h2>

      <Card mb={20} size={size} width={500} shape={shape}>
        <Card.Addon extra={extra} onExtra={onExtra} type={type}>
          <Title color="primary" level={3}>
            Header (color=primary)
          </Title>
        </Card.Addon>
        <Card.Content>
          <Text color="secondary">Hi</Text>
          <Text>Grace Ui kits</Text>
          <Text underline>with React</Text>
          <Text color="success">Author: Gromit</Text>
        </Card.Content>
        <Card.Addon>
          <ButtonGroup align="end">
            <Button onClick={() => alert('확인')}>확인</Button>
            <Button variant="outlined" onClick={() => alert('취소')}>
              취소
            </Button>
          </ButtonGroup>
        </Card.Addon>
      </Card>
    </>
  );
};

export const Default = Template.bind({});
export const Extra = Template.bind({});
export const Contained = Template.bind({});

Default.args = {
  size: 'medium',
  type: 'outlined',
  extra: '',
  shape: 'rect',
  onExtra: () => alert('hi'),
};

Extra.args = {
  size: 'medium',
  type: 'outlined',
  extra: 'More',
  shape: 'rect',
  onExtra: () => alert('hi'),
};

Contained.args = {
  size: 'medium',
  type: 'contained',
  extra: 'More',
  shape: 'rect',
  onExtra: () => alert('hi'),
};
