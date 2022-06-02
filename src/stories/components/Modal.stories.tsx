import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

export default {
  title: 'components/Modal',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'modern'],
      control: { type: 'select' },
    },
    shape: {
      options: ['rect', 'round'],
      control: { type: 'select' },
    },
    buttonType: {
      options: ['single', 'double'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<any> = ({ color, shape, title, buttonType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    alert('확인');
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>모달 열기</Button>
      <Modal
        buttonType={buttonType}
        shape={shape}
        title={title}
        isOpen={isOpen}
        color={color}
        onClose={handleModalClose}
        onConfirm={handleConfirm}>
        Lorem ipsum di quibusdam cum ipsam? Lorem ipsum di quibusdam cum ipsam?
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
export const NoHeader = Template.bind({});

Default.args = {
  title: '알림',
  color: 'primary',
  buttonType: 'single',
  shape: 'rect',
};

NoHeader.args = {
  color: 'primary',
  buttonType: 'single',
  shape: 'rect',
};
