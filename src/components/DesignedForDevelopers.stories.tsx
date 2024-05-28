import type { Meta, StoryObj } from "@storybook/react";
import DesignedForDevelopers from "./DesignedForDevelopers";

const meta = {
  title: "Components/DesignedForDevelopers",
  component: DesignedForDevelopers,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DesignedForDevelopers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomBackground: Story = {
  parameters: {
    backgrounds: { default: 'lightgray' },
  },
};

export const WithPadding: Story = {
  parameters: {
    layout: 'padded',
  },
};