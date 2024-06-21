import type { Meta, StoryObj } from "@storybook/react";
import { TagList } from "./index";

const meta = {
  title: "Component/Tag/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tags: {
      description: "태그 안에 들어갈 텍스트를 입력 해주세요.",
    },
    isDisabled: {
      type: "boolean",
    },
    isInaccessible: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: ["Tag1", "Tag2", "Tag3"],
    isDisabled: false,
    isInaccessible: false,
  },
};
