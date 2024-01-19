import { Meta, StoryObj } from "@storybook/react";
import JacobInMotion from "~/components/JacobInMotion";

const meta: Meta = {
  title: "Components/JacobInMotion",
  component: JacobInMotion,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};