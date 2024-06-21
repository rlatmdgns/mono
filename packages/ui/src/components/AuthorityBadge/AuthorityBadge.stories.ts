import { Meta, StoryObj } from '@storybook/react'
import { AuthorityBadge } from '.'

const meta = {
  title: 'Component/AuthorityBadge',
  component: AuthorityBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    authority: {
      options: ['adminMember', 'recruitmentMember', 'evaluationMember'],
      description: '권한',
    },
  },
} satisfies Meta<typeof AuthorityBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    authority: 'adminMember',
  },
}
