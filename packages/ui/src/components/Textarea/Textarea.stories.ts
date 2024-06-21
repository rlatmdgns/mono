import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Component/Form/Input/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      type: "string",
      description: "value로 전달할 텍스트 입력",
    },
    placeholder: {
      type: "string",
      description: "placeholder로 지정할 텍스트 입력",
    },
    state: {
      options: ["success", "error"],
      control: { type: "select" },
      description: "텍스트인풋 상태 선택",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    value: undefined,
    onChange: undefined,
    disabled: false,
  },
};
