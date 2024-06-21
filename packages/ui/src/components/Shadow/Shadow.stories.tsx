import { Meta, StoryObj } from "@storybook/react";
import { Shadow } from "./index";
import { ShadowType } from "./Shadow.interface";

const meta = {
  title: "Component/Shadow",
  component: Shadow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "그림자 타입",
    },
    children: {
      description: "자식 요소",
    },
  },
} satisfies Meta<typeof Shadow>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Args {
  type?: ShadowType;
  children: React.ReactNode;
}

export const Default: Story = ({
                                 type = Default.args.type,
                                 children,
                               }: Args) => <Shadow type={type}>{children}</Shadow>;

Default.args = {
  type: "shadowInner",
  children: <div style={{width: "90px", height: "90px"}}></div>,
};
