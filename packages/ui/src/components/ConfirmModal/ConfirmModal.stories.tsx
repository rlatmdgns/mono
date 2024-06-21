import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import icons from "../../assets/icons.json";
import { ConfirmModal } from ".";
import { Button } from "../Button";
import { IconNames } from "../Icon";

const meta = {
  title: "Component/Modal/ConfirmModal",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "모달 제목",
    },
    subtitle: {
      description: "모달 부제목",
    },
    icon: {
      table: {
        type: { summary: "select" },
      },
      options: [undefined, ...Object.keys(icons)],
      description: "모달 아이콘",
    },
    children: {
      description: "푸터에 들어갈 버튼 컴포넌트",
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Args {
  title: string;
  subtitle?: string;
  icon?: IconNames;
  children: React.ReactNode;
}

export const Default: Story = ({ title, subtitle, icon }: Args) => (
  <ConfirmModal title={title} subtitle={subtitle} icon={icon}>
    <Button state="secondary" style="mono" text="취소" />
    <Button state="danger" text="뒤로가기" />
  </ConfirmModal>
);

Default.args = {
  title: "저장하지 않은 사항이 있습니다.",
  subtitle: "저장하지 않은 메모는 삭제됩니다 뒤로 가시겠습니까?",
  icon: "icon/archive-line",
  children: (
    <>
      <Button state="secondary" style="mono" text="취소" />
      <Button state="danger" text="뒤로가기" />
    </>
  ),
};
