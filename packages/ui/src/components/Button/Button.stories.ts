import type { Meta, StoryObj } from "@storybook/react";
import icons from "../../assets/icons.json";
import { Button } from "./index";
import { COLORS } from "../../constants";

const meta = {
  title: "Component/Button/Default",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "사이즈",
    },
    state: {
      name: "state",
      description: "타입",
      defaultValue: "primary",
    },
    style: {
      description: "스타일",
      defaultValue: "fill-strong",
    },
    type: {
      name: "action",
    },
    text: {
      type: "string",
      description: "텍스트",
      defaultValue: "버튼",
    },
    leadingIcon: {
      table: {
        type: {summary: "select"},
      },
      options: [undefined, ...Object.keys(icons)],
      description: "텍스트 기준 좌측 아이콘",
    },
    trailingIcon: {
      table: {
        type: {summary: "select"},
      },
      options: [undefined, ...Object.keys(icons)],
      description: "텍스트 기준 우측 아이콘",
    },
    leadingIconColor: {
      control: "select",
      options: [undefined, ...Object.keys(COLORS)],
      description: "텍스트 기준 좌측 아이콘 색상",
    },
    trailingIconColor: {
      control: "select",
      options: [undefined, ...Object.keys(COLORS)],
      description: "텍스트 기준 우측 아이콘 색상",
    },
    width: {
      type: "string",
      description: "버튼 가로사이즈 ex) 120px",
    },
    href: {
      type: "string",
      description: "연결 링크 ex) https://app.steadhr.com",
    },
    disabled: {type: "boolean", description: "비활성화", defaultValue: false},
    isLoading: {
      type: "boolean",
      description: "로딩 중 여부",
      defaultValue: false,
    },
    isNewTab: {
      type: "boolean",
      description: "페이지 연결 시 새 탭 열기 여부",
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    state: "primary",
    style: "fill-strong",
    text: "버튼",
    leadingIcon: undefined,
    trailingIcon: undefined,
    leadingIconColor: undefined,
    trailingIconColor: undefined,
    disabled: false,
    isLoading: false,
    isNewTab: true,
    type: "button",
  },
};
