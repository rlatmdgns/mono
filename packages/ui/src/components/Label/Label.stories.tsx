import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '.'

const meta = {
  title: 'Component/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Label',
    },
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
      description: '타입 선택',
    },
    isRequired: {
      type: 'boolean',
      defaultValue: false,
      description: '필수 여부',
    },
    hasInfo: {
      type: 'boolean',
      defaultValue: false,
      description: 'info 아이콘 여부',
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    size: 'md',
    isRequired: false,
    hasInfo: false,
  },
}
