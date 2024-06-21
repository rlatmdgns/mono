import type { Meta, StoryObj } from "@storybook/react";
import icons from "../../assets/icons.json";
import { Icon } from "./index";

const meta = {
  title: "Component/Icon",
  component: Icon,
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
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "icon/interview-solid",
    size: 16,
    color: "black",
  },
};
