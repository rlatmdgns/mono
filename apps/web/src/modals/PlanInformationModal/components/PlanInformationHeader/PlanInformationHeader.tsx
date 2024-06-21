import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'

interface PenaltyPlanHeaderProps {
  onClose: () => void
}
const PlanInformationHeader = ({ onClose }: PenaltyPlanHeaderProps) => {
  const $t = useTranslations()
  return (
    <Styles.Header>
      <Styles.Title>{$t('payment.service_subscription_history')}</Styles.Title>
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
export default PlanInformationHeader
