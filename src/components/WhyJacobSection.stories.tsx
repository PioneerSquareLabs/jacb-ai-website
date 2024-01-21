import { Meta, StoryObj } from "@storybook/react";
import WhyJacobSection from "./WhyJacobSection";

const meta: Meta = {
  title: "Components/WhyJacobSection",
  component: WhyJacobSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomText: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ color: 'white' }}>
        <h1 style={{ textAlign: 'center' }}>Custom Header Before JACoB Section</h1>
        <Story />
      </div>
    ),
  ],
};