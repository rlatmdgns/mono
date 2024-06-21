import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { SelectDefaultOption } from './OptionLabel/SelectDefaultOption'
import { SelectMemberOptionLabel } from './OptionLabel/SelectMemberOptionLabel'

const meta = {
  title: 'Component/Select/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    actions: {},
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object', description: '선택 옵션 배열로 전달' },
    Option: {
      control: 'select',
      description: '옵션 컴포넌트 전달',
      options: [SelectDefaultOption, SelectMemberOptionLabel],
    },
    placeholder: { control: 'text', description: 'placeholder' },
    isNoDropdownIndicator: {
      control: 'boolean',
      description: '드롭다운 아이콘을 숨길지 여부',
    },
    styles: { control: 'object', description: '객체로 스타일 전달' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      {
        value: '2',
        label: '홍길동',
        image: 'rgb(49,190,51)',
        name: '홍길동',
      },
      {
        value: '3',
        label: '김영희',
        image: 'rgb(46,234,148)',
        name: '김영희',
      },
      {
        value: '4',
        label: '박지원',
        image: 'rgb(96,37,12)',
        name: '박지원',
      },
      {
        value: '5',
        label: '김철수',
        image:
          'https://s3.ap-northeast-2.amazonaws.com/stead-data/enterprises/324/users/iJ7UFpTpjDHrcRG356/profile20240402101324.jpg',
        name: '김철수',
        google_connect: true,
      },
    ],
  },
}
