import type { Meta, StoryObj } from "@storybook/react";
import icons from "../../assets/icons.json";
import { ArrowToggle } from "./index";

const meta = {
  title: "Component/ArrowToggle",
  component: ArrowToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: {type: "select"},
    },
    size: {
      type: "number",
      description: "px 단위로 입력해주세요.",
    },
    expanded: {
      type: "boolean",
      description: "펼침/접힘 상태",
    },
  },
} satisfies Meta<typeof ArrowToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "icon/down-solid",
    color: "neutralGray900",
    size: 16,
    expanded: false,
    onClick: undefined,
  },
};
