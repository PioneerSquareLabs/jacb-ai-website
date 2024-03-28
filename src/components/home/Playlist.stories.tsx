import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Playlist from './Playlist';

const meta: Meta = {
  title: 'Components/Playlist',
  component: Playlist,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};