import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from './Hero';

const meta: Meta = {
  title: 'Components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};