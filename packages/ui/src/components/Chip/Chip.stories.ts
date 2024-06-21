import { Meta, StoryObj } from "@storybook/react";
import { Chip } from ".";
import icons from "../../assets/icons.json";

const meta = {
  title: "Component/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      description: "상태",
    },
    label: {
      type: "string",
      description: "라벨",
    },
    size: {
      options: ["sm", "md"],
      description: "사이즈",
    },
    leadingIcon: {
      name: "leadingIcon",
      table: {
        type: { summary: "select" },
      },
      options: [undefined, ...Object.keys(icons)],
      description: "라벨 기준 왼쪽 아이콘",
    },
    trailingIcon: {
      name: "trailingIcon",
      table: {
        type: { summary: "select" },
      },
      options: [undefined, ...Object.keys(icons)],
      description: "라벨 기준 오른쪽 아이콘",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "default",
    size: "md",
    leadingIcon: "icon/check-line1",
    trailingIcon: "icon/info-line",
    label: "Status chip",
  },
};
