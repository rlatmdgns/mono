import React from 'react'
import { SlackChannel } from '@/entities/apps/ui/SlackChannel'
import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'

interface SlackChannelChangeProps {
  isOpen?: boolean
  channel?: string | null
}

export const SlackChannelChange = ({ isOpen, channel }: SlackChannelChangeProps) => {
  const { openModal, closeModal } = useModal()
  const handleClick = () => {
    openModal(MODAL.INTEGRATION_SLACK, {
      isConnected: true,
      onClose: () => closeModal(MODAL.INTEGRATION_SLACK),
    })
  }

  if (!isOpen) return null

  return (
    <Styles.Wrapper>
      <SlackChannel channel={channel} />
      <Button
        size="sm"
        width="98px"
        state="standard"
        style="mono"
        iconSource="icon/move-solid"
        text="채널 변경"
        onClick={handleClick}
      />
    </Styles.Wrapper>
  )
}
