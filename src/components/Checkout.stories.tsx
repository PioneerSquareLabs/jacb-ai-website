import type { Meta, StoryObj } from "@storybook/react";
import Checkout from "~/components/Checkout";
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const meta = {
  title: "Components/Checkout",
  component: Checkout,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Email"), "user@example.com");
    await userEvent.type(canvas.getByPlaceholderText("1234 1234 1234 1234"), "1234 1234 1234 1234");
    await userEvent.type(canvas.getByPlaceholderText("MM / YY"), "12/34");
    await userEvent.type(canvas.getByPlaceholderText("CVC"), "123");
    await userEvent.type(canvas.getByLabelText("Name on card"), "John Doe");
    await userEvent.type(canvas.getByLabelText("Country or region"), "United States");
    await userEvent.type(canvas.getByPlaceholderText("ZIP"), "12345");
  },
};