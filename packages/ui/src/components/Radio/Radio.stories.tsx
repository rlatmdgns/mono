import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from ".";
import { RadioProps } from "./Radio.interface";

const meta = {
  title: "Component/Form/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
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
      description: "라디오 사이즈",
    },
    checked: {
      description: "라디오 체크여부",
    },
    labelText: {
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
      description: "비활성화 여부",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({
  checked,
  name,
  state,
  size,
  labelText,
  value,
  onChange,
  isRequired,
  hasInfo,
  disabled,
}: RadioProps) => (
  <>
    <Radio
      checked={checked}
      name={name}
      value={value}
      onChange={onChange}
      labelText={labelText}
      isRequired={isRequired}
      hasInfo={hasInfo}
      state={state}
      size={size}
      disabled={disabled}
    />
  </>
);

Default.args = {
  state: "primary",
  size: "md",
  checked: true,
  labelText: undefined,
  isRequired: false,
  hasInfo: false,
  disabled: false,
  value: "value",
  name: "radio",
  onChange: () => {},
};
