import { Args, Meta, StoryObj } from "@storybook/react";
import { ModalHeader } from "./index";

const meta = {
  title: "Component/Modal/ModalHeader",
  component: ModalHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "제목",
    },
    subtitle: {
      description: "부제",
    },
    information: {
      description: "정보 유무에 따라 정보 아이콘 나타남",
    },
    onClick: {
      description: "닫기 기능",
    },
    width: {
      type: "string",
      description: "모달 길이",
    },
  },
} satisfies Meta<typeof ModalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({
                                 title = "헤더 타이틀",
                                 subtitle = "서브 타이틀",
                                 width = "480px",
                                 information,
                                 onClick,
                               }: Args) => (
  <div style={{padding: "20px", width: "100%", backgroundColor: "lightgray"}}>
    <ModalHeader
      title={title}
      subtitle={subtitle}
      information={information}
      onClick={onClick}
      width={width}
    />
  </div>
);

Default.args = {
  title: "헤더 타이틀",
  subtitle: "서브 타이틀",
  information: "",
  width: "480px",
};
