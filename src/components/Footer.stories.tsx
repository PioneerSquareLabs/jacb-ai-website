import type { Meta, StoryObj } from "@storybook/react";
import Footer from "~/components/Footer";

const meta: Meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};