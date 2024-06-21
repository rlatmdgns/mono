import type { Meta, StoryObj } from "@storybook/react";
import { NavigationTabs } from ".";
import { sizeType } from "./NavigationTabs.interface";

const meta = {
  title: "Component/NavigationTabs",
  component: NavigationTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "탭 사이즈",
      control: {
        type: "radio",
        options: ["md", "lg"],
      },
    },
    buttons: {
      description: "탭 버튼 목록",
    },
    contents: {
      description: "탭 컨텐츠 목록",
    },
  },
} satisfies Meta<typeof NavigationTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Args {
  size?: sizeType;
}

export const Default: Story = ({ size }: Args) => (
  <div style={{ padding: "30px", height: "240px" }}>
    <NavigationTabs
      size={size}
      buttons={Default.args.buttons}
      contents={Default.args.contents}
    />
  </div>
);

Default.args = {
  size: "md",
  buttons: [
    {
      label: "첫 번째 버튼",
      icon: "icon/list-solid",
    },
    {
      label: "두 번째 버튼",
      icon: "icon/list-solid",
    },
    {
      label: "세 번째 버튼",
      icon: "icon/list-solid",
    },
  ],
  contents: [
    <div
      style={{
        margin: "10px",
        padding: "10px",
        height: "100px",
        backgroundColor: "lightblue",
      }}
    >
      첫 번째 컨텐츠
    </div>,
    <div
      style={{
        margin: "10px",
        padding: "10px",
        height: "100px",
        backgroundColor: "lightgreen",
      }}
    >
      <div>두 번째 컨텐츠</div>
    </div>,
    <div
      style={{
        margin: "10px",
        padding: "10px",
        height: "100px",
        backgroundColor: "lightpink",
      }}
    >
      <div>세 번째 컨텐츠</div>
    </div>,
  ],
};
