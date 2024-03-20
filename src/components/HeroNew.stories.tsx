import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HeroNew from './HeroNew';

const meta: Meta = {
  title: 'Components/HeroNew',
  component: HeroNew,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};