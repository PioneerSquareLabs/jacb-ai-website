import type { Meta, StoryObj } from "@storybook/react";
import DesignedForDevs from "~/components/DesignForDevelopers";

const meta = {
  title: "Components/DesignedForDevs",
  component: DesignedForDevs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DesignedForDevs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Centered: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};