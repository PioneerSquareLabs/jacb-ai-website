import type { Meta, StoryObj } from "@storybook/react";
import DesignerForDevs from "~/components/DesignerForDevs";

const meta: Meta = {
  title: "Components/DesignerForDevs",
  component: DesignerForDevs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};