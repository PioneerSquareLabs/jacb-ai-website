import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CodeInAction from './CodeInAction';

const meta: Meta = {
  title: 'Components/CodeInAction',
  component: CodeInAction,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <CodeInAction {...args} />,
};