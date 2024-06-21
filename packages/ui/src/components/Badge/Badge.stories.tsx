import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta = {
  title: "Component/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      type: "string",
      defaultValue: "직접 추가",
      description: "뱃지 텍스트",
    },
    type: {
      options: ["blueStrong", "blue", "red", "gray", "orange", "green"],
      control: {type: "select"},
      description: "뱃지 타입",
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
      description: "비활성화 여부",
    },

    rounded: {
      type: "number",
      defaultValue: 4,
      description: "라운드",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "직접 추가",
    type: "blue",
    isDisabled: false,
    rounded: 4,
  },
};
