import React from 'react'
import * as Styles from './styles'
import { IconButton } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface WriteMailHeaderProps {
  readonly onClick: () => void
}

const WriteMailHeader = ({ onClick }: WriteMailHeaderProps) => {
  const $t = useTranslations('mail')
  return (
    <Styles.Header>
      {$t('write_mail')}
      <IconButton icon="icon/cancle-line1" onClick={onClick} />
    </Styles.Header>
  )
}

export default WriteMailHeader
