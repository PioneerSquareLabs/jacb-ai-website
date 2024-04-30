import type { Meta, StoryObj } from "@storybook/react";
import Checkout from "~/components/Checkout";

const meta = {
  title: "Components/Checkout",
  component: Checkout,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckout: Story = {
  args: {},
};