import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ModalFooter } from ".";
import { Button } from "../Button";

const meta = {
  title: "Component/Modal/ModalFooter",
  component: ModalFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "컴포넌트",
    },
    hasSelect: {
      type: "boolean",
      description: "셀렉트 박스 유무",
    },
    width: {
      type: "string",
      description: "모달 길이",
    },
  },
} satisfies Meta<typeof ModalFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Args {
  children: React.ReactNode;
  hasSelect?: boolean;
  width?: string;
}

export const Default: Story = ({
  hasSelect = false,
  width = "480px",
}: Args) => (
  <div style={{ padding: "20px", width: "100%", backgroundColor: "lightgray" }}>
    <ModalFooter hasSelect={hasSelect} width={width}>
      <Button
        text="취소"
        state="secondary"
        style="line"
        size="md"
        width="58px"
      />
      {hasSelect && (
        <select
          style={{
            width: "78px",
            height: "40px",
            border: "1px solid #E5E8EB",
            borderRadius: "6px",
            backgroundColor: "white",
          }}
        />
      )}
      <Button
        text="버튼"
        state="secondary"
        style="fill-strong"
        size="md"
        width="58px"
      />
    </ModalFooter>
  </div>
);

Default.args = {
  children: undefined,
  hasSelect: false,
  width: "480px",
};
