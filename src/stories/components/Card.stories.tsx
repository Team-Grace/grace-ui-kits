import React from 'react';
import Card from 'src/components/Card/Card';
import ButtonGroup from 'src/components/ButtonGroup/ButtonGroup';
import Button from 'src/components/Button/Button';
import Title from 'src/components/Title/Title';
import { CardProps } from 'src/types/card';
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
  },
};

const Template: Story<CardProps> = ({ size, extra, type, onExtra }) => {
  return (
    <>
      <h2>Card No Title</h2>
      <Card mb={20}>
        <Card.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </p>
        </Card.Content>
      </Card>

      <hr />

      <h2>Card width=100%</h2>
      <Card mb={20} size={size}>
        <Card.Addon extra={extra} onExtra={onExtra} type={type}>
          <Title level={3}>Header</Title>
        </Card.Addon>
        <Card.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </p>
        </Card.Content>
        <Card.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            aperiam? Ea, ullam? Eos nesciunt magnam eum tenetur illo? Similique
            fuga ut quaerat itaque harum exercitationem in excepturi illum,
            repudiandae incidunt.
          </p>
        </Card.Content>
      </Card>

      <hr />

      <h2>Card width=500</h2>
      <Card mb={20} size={size} width={500} type={type}>
        <Card.Addon extra={extra} onExtra={onExtra} type={type}>
          <Title level={3}>Header</Title>
        </Card.Addon>
        <Card.Content>
          <p>Hi</p>
          <p>Grace Ui kits</p>
          <p>with React</p>
        </Card.Content>
      </Card>

      <hr />

      <h2>Card with Button</h2>

      <Card mb={20} size={size} width={500}>
        <Card.Addon extra={extra} onExtra={onExtra} type={type}>
          <Title color="primary" level={3}>
            Header (color=primary)
          </Title>
        </Card.Addon>
        <Card.Content>
          <p>Hi</p>
          <p>Grace Ui kits</p>
          <p>with React</p>
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
  onExtra: () => {},
};

Extra.args = {
  size: 'medium',
  type: 'outlined',
  extra: 'More',
  onExtra: () => alert('hi'),
};

Contained.args = {
  size: 'medium',
  type: 'contained',
  extra: 'More',
  onExtra: () => alert('hi'),
};
