import { Meta, StoryObj } from "@storybook/react";
import Checkout from "~/components/Checkout";

const meta: Meta<typeof Checkout> = {
  title: "Components/Checkout",
  component: Checkout,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText("Enter your email"), "user@example.com");
    await userEvent.type(canvas.getByPlaceholderText("Card Number"), "1234 5678 9012 3456");
    await userEvent.type(canvas.getByPlaceholderText("MM/YY"), "12/24");
    await userEvent.type(canvas.getByPlaceholderText("CVC"), "123");
    await userEvent.type(canvas.getByPlaceholderText("Enter name on card"), "John Doe");
    await userEvent.selectOptions(canvas.getByLabelText("Country or region"), "United States");
    await userEvent.type(canvas.getByPlaceholderText("ZIP"), "12345");
  },
};