import { Avatar, Badge } from '@/shared/ui'
import * as Style from './styles'

interface MemberProps {
  readonly name: string
  readonly image: string
  readonly text?: string
  readonly type?: 'standard' | 'primary' | 'warning' | 'gray'
  isPadding?: boolean
  isBackground?: boolean
}

export const Member = ({ name, image, text, type, isPadding, isBackground }: MemberProps) => {
  return (
    <Style.Wrapper $isPadding={isPadding} $isBackground={isBackground}>
      <Avatar size="sm" alt={name} src={image} />
      <Style.Name>{name}</Style.Name>
      {text && <Badge text={text} type={type} />}
    </Style.Wrapper>
  )
}
