import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./index";

const meta = {
  title: "Component/Form/Input/SearchInput",
  component: SearchInput,
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
    maxWidth: {
      control: {
        type: "text",
      },
      description: "텍스트인풋의 가로 길이 설정 ex) 372px, 100%",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md"],
        default: "md",
      },
      description: "사이즈",
    },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: "200px",
    placeholder: "검색어 입력해주세요.",
    value: undefined,
    onChange: undefined,
  },
};
