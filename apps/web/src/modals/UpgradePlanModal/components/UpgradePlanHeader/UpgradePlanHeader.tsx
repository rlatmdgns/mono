import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'

interface AddPlanHeaderProps {
  onClose: () => void
}

const UpgradePlanHeader = ({ onClose }: AddPlanHeaderProps) => {
  const $t = useTranslations()
  return (
    <Styles.Header>
      <Styles.Title>{$t('payment.upgrade.all_in_one_plan_change')}</Styles.Title>
      <IconButton
        icon="icon/cancle-line1"
        onClick={onClose}
        ariaLabel={$t('common.close')}
        size="sm"
        color="neutralGray400"
      />
    </Styles.Header>
  )
}
export default UpgradePlanHeader
