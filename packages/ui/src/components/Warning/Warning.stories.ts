import type { StoryObj } from "@storybook/react";
import { Warning } from "./index";

const meta = {
  title: "Component/Warning",
  component: Warning,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "경고에 대한 제목을 적어주세요.",
    },
    description: {
      description: "경고에 대한 설명을 적어주세요.",
    },
    subDescription: {
      description: "경고에 대한 부가 설명을 적어주세요.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "경고",
    description: "경고에 대한 설명을 적어주세요.",
    subDescription: "경고에 대한 부가 설명을 적어주세요.",
  },
};
