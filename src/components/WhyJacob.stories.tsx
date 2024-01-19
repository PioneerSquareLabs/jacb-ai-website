import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import WhyJacob from './WhyJacob';

const meta: Meta = {
  title: 'Components/WhyJacob',
  component: WhyJacob,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};