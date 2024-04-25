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

export const Default: Story = {
  args: {},
};

export const FilledOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText('Email'), 'example@example.com');
    await userEvent.type(canvas.getByPlaceholderText('1234 1234 1234 1234'), '1234 1234 1234 1234');
    await userEvent.type(canvas.getByPlaceholderText('MM / YY'), '12/34');
    await userEvent.type(canvas.getByPlaceholderText('CVC'), '123');
    await userEvent.type(canvas.getByLabelText('Name on card'), 'John Doe');
    await userEvent.type(canvas.getByLabelText('Country or region'), 'United States');
    await userEvent.type(canvas.getByPlaceholderText('ZIP'), '12345');
  },
};