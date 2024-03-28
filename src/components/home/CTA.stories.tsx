import type { Meta, StoryObj } from "@storybook/react";
import CtaComponent from "~/components/home/CTA";

const meta: Meta = {
  title: "Components/CTA",
  component: CtaComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
