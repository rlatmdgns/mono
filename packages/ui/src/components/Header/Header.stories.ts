import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = {
  title: "Component/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {type: "text"},
      description: "헤더 타이틀",
    },
    description: {
      control: {type: "text"},
      description: "헤더 설명",
    },
    children: {
      control: {type: "object"},
      description: "헤더 하단에 위치할 컴포넌트",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "헤더 타이틀",
    description: "헤더 설명",
    children: undefined,
  },
};
