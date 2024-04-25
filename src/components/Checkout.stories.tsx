import { Meta, StoryObj } from '@storybook/react';
import Checkout from './Checkout';

const meta: Meta<typeof Checkout> = {
  title: 'Components/Checkout',
  component: Checkout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckout: Story = {
  args: {},
};