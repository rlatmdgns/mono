import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./index";

const meta = {
  title: "Component/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "태그 안에 들어갈 텍스트를 입력 해주세요.",
    },
    type: {
      control: {type: "select"},
      options: ["standard", "primary", "warning", "gray"],
    },
    size: {
      options: ["md", "lg"],
      control: {type: "select"},
    },
    isDisabled: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Tag",
    type: "standard",
    size: "lg",
    isDisabled: false,
  },
};
