import type { Meta, StoryObj } from "@storybook/react";
import icons from "../../assets/icons.json";
import FloatingInput from "./index";

const meta = {
  title: "Component/Form/Input/FloatingInput",
  component: FloatingInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["text", "password", "tel", "email"],
      control: {type: "select"},
      description: "텍스트인풋 타입 선택",
    },
    value: {
      type: "string",
      description: "value로 전달할 텍스트 입력",
    },
    placeholder: {
      type: "string",
      description: "placeholder로 지정할 텍스트 입력",
    },
    isCorrect: {
      type: "boolean",
      description: "정답인 경우 true로 설정",
    },
    isError: {
      type: "boolean",
      description: "오류인 경우 true로 설정",
    },
    isEye: {
      type: "boolean",
      description: "눈 아이콘을 사용할 경우 true로 설정",
    },
    icon: {
      options: Object.keys(icons),
      control: {type: "select"},
    },
    validationMessage: {
      type: "string",
      description: "유효성 검사 메시지",
    },
  },
} satisfies Meta<typeof FloatingInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "텍스트를 입력해주세요.",
    value: undefined,
    onChange: undefined,
    isCorrect: false,
    isError: false,
    isEye: false,
    icon: "icon/show-solid",
    validationMessage: "",
  },
};
