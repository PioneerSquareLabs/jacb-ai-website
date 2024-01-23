import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WhyJacobSection from './WhyJacobSection';

const meta: Meta = {
  title: 'Components/WhyJacobSection',
  component: WhyJacobSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPlaceholderImages: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <style>
          {`
            .WhyJacobSection img {
              content: url("https://via.placeholder.com/1024x768");
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};