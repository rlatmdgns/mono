import type { Meta, StoryObj } from "@storybook/react";
import { LabelInput } from "./index";

const meta = {
  title: "Component/Form/Input/LabelInput",
  component: LabelInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["text", "password"],
      control: {type: "select"},
      description: "텍스트인풋 타입 선택",
    },
    state: {
      options: ["success", "error"],
      control: {type: "select"},
      description: "텍스트인풋 상태 선택",
    },
    value: {
      type: "string",
      description: "value로 전달할 텍스트 입력",
    },
    placeholder: {
      type: "string",
      description: "placeholder로 지정할 텍스트 입력",
    },
    width: {
      control: {
        type: "text",
      },
      description: "텍스트인풋의 가로 길이 설정 ex) 372px, 100%",
    },
    labelTextSize: {
      options: ["md", "lg"],
      control: {type: "select"},
      description: "라벨 텍스트 사이즈 선택",
    },
  },
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    state: "success",
    width: "452px",
    placeholder: "텍스트를 입력해주세요.",
    value: undefined,
    onChange: undefined,
    onClick: undefined,
    disabled: false,
  },
};
