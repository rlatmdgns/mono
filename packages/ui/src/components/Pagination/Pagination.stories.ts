import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./index";

const meta = {
  title: "Component/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: {
        type: "number",
      },
    },
    limit: {
      control: {
        type: "number",
      },
    },
    totalPage: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/page",
    currentPage: 1,
    limit: 10,
    totalPage: 100,
  },
};
