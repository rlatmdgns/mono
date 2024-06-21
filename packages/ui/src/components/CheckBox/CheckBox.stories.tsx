import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from ".";
import { CheckBoxProps } from "./CheckBox.interface";

const meta = {
  title: "Component/Form/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      control: { type: "boolean", description: "체크박스 체크 여부" },
    },
    type: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
      description: "라디오 타입",
    },
    size: {
      control: {
        type: "radio",
        options: ["md", "lg"],
      },
      description: "체크박스 사이즈",
    },
    text: {
      control: "text",
      description: "라벨 있을 경우 텍스트",
    },
    isRequired: {
      description: "필수 여부 표시",
    },
    hasInfo: {
      description: "info 아이콘 표시",
    },
    disabled: {
      type: "boolean",
      description: "비활성화 여부",
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({
  isChecked,
  isPartial,
  name,
  text,
  size,
  type,
  isRequired,
  hasInfo,
  disabled,
  onChange,
}: CheckBoxProps) => (
  <CheckBox
    isChecked={isChecked}
    isPartial={isPartial}
    type={type}
    size={size}
    text={text}
    name={name}
    isRequired={isRequired}
    hasInfo={hasInfo}
    disabled={disabled}
    onChange={onChange}
  />
);

Default.args = {
  isChecked: true,
  isPartial: false,
  type: "primary",
  size: "md",
  text: undefined,
  isRequired: false,
  hasInfo: false,
  disabled: false,
  name: "checkbox",
  onChange: () => {},
};
