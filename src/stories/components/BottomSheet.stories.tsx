import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import BottomSheet from 'components/BottomSheet';
import Button from 'components/Button';
import Text from 'components/Text';

export default {
  title: 'components/BottomSheet',
  argTypes: {},
};

const Template: Story<any> = ({ isDimmed }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>바텀시트 오픈</Button>
      <BottomSheet isOpen={isOpen} onClose={onClose} isDimmed={isDimmed}>
        <div style={{ padding: '20px' }}>
          <Text>안녕하세요</Text>
          <Text>안녕하세요</Text>
          <Text>안녕하세요</Text>
          <Text>안녕하세요</Text>
        </div>
        <Button mt={10} fullWidth onClick={() => setIsOpen(false)}>
          바텀시트 닫기
        </Button>
      </BottomSheet>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  isDimmed: true,
};
