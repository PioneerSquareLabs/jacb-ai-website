import type { Meta, StoryObj } from "@storybook/react";
import Header from "~/components/home/Header";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholderLogo: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <style>{`.w-30 { width: 120px; } .h-8 { height: 32px; }`}</style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const WithRealLogo: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div>
        <style>{`.w-30 { width: 120px; } .h-8 { height: 32px; }`}</style>
        <img
          src="https://via.placeholder.com/1024x768"
          alt="Placeholder Logo"
          className="w-30 h-8"
        />
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};
