import type { Meta, StoryObj } from "@storybook/react";
import icons from "../../assets/icons.json";
import { Empty } from "../Empty";

const meta = {
  title: "Component/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconSource: {
      options: Object.keys(icons),
      control: { type: "select" },
      description: "아이콘 이미지",
    },
    title: {
      type: "string",
      description: "제목",
    },
    description: {
      type: "string",
      description: "설명",
    },
    children: { type: "function", description: "직접 추가 내용" },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconSource: "icon/document-solid",
    title: "아직 메모가 없습니다",
    description: "이 곳에서 지원자들에 대한 생각을 메모할 수 있습니다.",
  },
};

export const WithChildren: Story = {
  args: {
    iconSource: "icon/document-solid",
    title: "아직 메모가 없습니다",
    description: "이 곳에서 지원자들에 대한 생각을 메모할 수 있습니다.",
    children: (
      <div style={{ padding: "16px" }}>
        {/*<Button width="fit-content" text="버튼" />*/}
      </div>
    ),
  },
};
