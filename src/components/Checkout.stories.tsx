import { Meta, StoryObj } from '@storybook/react';
import Checkout from './Checkout';

const meta: Meta<typeof Checkout> = {
  title: 'Components/Checkout',
  component: Checkout,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};