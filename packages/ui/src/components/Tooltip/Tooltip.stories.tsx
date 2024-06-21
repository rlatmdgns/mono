import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./index";
import { Button } from "../Button";

const meta = {
  title: "Component/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      type: "string",
      defaultValue: "This is Tooltip",
      description: "툴팁 내용 ",
    },
    direction: {
      options: ["top", "right", "bottom", "left"],
      control: {type: "radio"},
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This is Tooltip",
    direction: "top",
    children: <Button size="md" text="mouse over" type="button"/>,
  },
};
