import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./index";

const meta = {
  title: "Component/Form/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    actions: {
      onChange: {
        action: "checked",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      control: {type: "boolean"},
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {type: "radio"},
    },
    isDisabled: {type: "boolean", description: "비활성화 여부 설정"},
    onChange: {
      action: "checked",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    isChecked: true,
    isDisabled: false,
    onChange: () => {
    },
  },
};
