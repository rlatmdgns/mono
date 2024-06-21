import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./index";

const meta = {
  title: "Component/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    error: {
      type: "string",
      description: "error 메세지 입력",
    },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: "오류가 발생되었습니다.",
  },
};
