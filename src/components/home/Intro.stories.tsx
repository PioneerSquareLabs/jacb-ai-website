import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Intro from './Intro';

const meta: Meta = {
  title: 'Components/Intro',
  component: Intro,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};