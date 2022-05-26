import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Card, { CardProps } from 'src/components/Card/Card';

export default {
  title: 'components/Card',
  argTypes: {},
};

const Template: Story<CardProps> = () => {
  return (
    <>
      <h2>Extra</h2>
      <Card
        title="카드입니다."
        extra="More"
        mb={20}
        onExtra={() => alert('hi')}>
        <p> extra=More</p>
      </Card>
      <Card
        title="카드입니다."
        extra="More"
        width={300}
        mb={20}
        onExtra={(e) => alert(e.target)}>
        <p> extra=More</p>
        <p> width=300</p>
      </Card>

      <hr />

      <h2>Size</h2>
      <Card title="카드입니다." mb={20} size="large">
        <p> size=large</p>
      </Card>
      <Card title="카드입니다." mb={20} size="medium">
        <p> size=medium</p>
      </Card>
      <Card title="카드입니다." mb={20} size="small">
        <p> size=small</p>
      </Card>

      <hr />

      <h2>No Title</h2>
      <Card mb={20}>
        <p>타이틀 없는 카드입니다.</p>
      </Card>

      <hr />

      <h2>Type</h2>
      <Card title="카드입니다." extra={'More'} type="contained" mb={20}>
        <p> type=contained</p>
      </Card>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  onExtra: () => alert('hi'),
};
