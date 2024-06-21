import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'

interface WaitingRequestMemberHeaderProps {
  onClose: () => void
}

const WaitingRequestMemberHeader = ({ onClose }: WaitingRequestMemberHeaderProps) => {
  const $t = useTranslations('setting.member_setting')
  return (
    <Styles.Header>
      <Styles.Title>{$t('response_waiting_members')}</Styles.Title>
      <IconButton icon="icon/cancle-line1" onClick={onClose} size="sm" color="neutralGray400" />
    </Styles.Header>
  )
}
export default WaitingRequestMemberHeader
