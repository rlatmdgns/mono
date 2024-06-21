import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./index";

const meta = {
  title: "Component/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {type: "radio"},
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    alt: "스테드",
    src: "rgb(81,168,249)",
  },
};

export const WithImage: Story = {
  args: {
    size: "md",
    alt: "스테드",
    src: "https://avatars.githubusercontent.com/u/77449586?v=4",
  },
};
