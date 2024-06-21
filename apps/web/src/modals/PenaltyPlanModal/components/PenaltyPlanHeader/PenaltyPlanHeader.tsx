import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { PlanInformationAtom } from '@/app/[locale]/settings/payment/recoil/atom'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'

interface PenaltyPlanHeaderProps {
  onClose: () => void
}

const PenaltyPlanHeader = ({ onClose }: PenaltyPlanHeaderProps) => {
  const planInformation = useRecoilValue(PlanInformationAtom)
  const $t = useTranslations()
  return (
    <Styles.Header>
      <Styles.Title>{$t('penalty_payment.penalty_info_and_payment')}</Styles.Title>
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
export default PenaltyPlanHeader
