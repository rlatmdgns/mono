import React from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface SlackChannelProps {
  channel?: string | null
}

export const SlackChannel = ({ channel }: SlackChannelProps) => {
  return (
    <Styles.Content>
      <Icon icon="icon/right-down-solid" color="neutralGray800" />
      <Styles.Channel>{channel}</Styles.Channel>채널로 메시지 받는 중
    </Styles.Content>
  )
}
