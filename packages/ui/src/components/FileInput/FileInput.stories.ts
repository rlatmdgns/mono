import type { Meta, StoryObj } from "@storybook/react";
import { FileInput } from "./index";

const meta = {
  title: "Component/Form/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    files: {control: {type: "object"}},
    accept: {
      control: {type: "text"},
      description: "파일 확장자",
    },
    placeholder: {
      control: {type: "text"},
      description: "파일 업로드 안내 문구",
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "[conditions] 파일만 업로드 가능합니다.   ",
  },
};

export const WithFiles: Story = {
  args: {
    files: [new File([""], "[파일명].pdf")],
  },
};
