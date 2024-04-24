import { Meta, StoryObj } from '@storybook/react';
import Checkout from './Checkout';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const meta: Meta<typeof Checkout> = {
  title: 'Components/Checkout',
  component: Checkout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const FilledOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Email'), 'example@example.com');
    await userEvent.type(canvas.getByPlaceholderText('Card Number'), '1234 5678 9012 3456');
    await userEvent.type(canvas.getByPlaceholderText('MM/YY'), '12/24');
    await userEvent.type(canvas.getByPlaceholderText('CVC'), '123');
    await userEvent.type(canvas.getByLabelText('Name on card'), 'John Doe');
    await userEvent.type(canvas.getByLabelText('Country or region'), 'United States');
    await userEvent.type(canvas.getByPlaceholderText('ZIP'), '90210');
  },
};