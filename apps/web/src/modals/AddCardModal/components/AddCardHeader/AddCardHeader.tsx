import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'

interface AddCardHeaderProps {
  onClose: () => void
}

const AddCardHeader = ({ onClose }: AddCardHeaderProps) => {
  const $t = useTranslations()
  return (
    <Styles.Header>
      <Styles.Title>{$t('setting.card.register')}</Styles.Title>
      <IconButton
        icon="icon/cancle-line1"
        onClick={onClose}
        size="sm"
        color="neutralGray400"
        ariaLabel={$t('common.close')}
      />
    </Styles.Header>
  )
}
export default AddCardHeader
