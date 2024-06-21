import { IconButton } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface WriteMailHeaderProps {
  readonly onClick: () => void
}

const ModifyScheduleHeader = ({ onClick }: WriteMailHeaderProps) => {
  const $t = useTranslations('interview')
  return (
    <Styles.Header>
      {$t('modify_interview')}
      <IconButton icon="icon/cancle-line1" onClick={onClick} />
    </Styles.Header>
  )
}

export default ModifyScheduleHeader
