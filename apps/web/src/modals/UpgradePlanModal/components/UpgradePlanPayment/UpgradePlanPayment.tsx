import * as Styles from './styles'
import { getMakeComma } from '@/shared/lib/utils'
import { useTranslations } from 'next-intl'
import usePaymentContainerConstant from '@/app/[locale]/settings/payment/hooks/usePaymentContainerConstant'

interface UpgradePlanPaymentProps {
  updatePaymentType: string
}

const UpgradePlanPayment = ({ updatePaymentType }: UpgradePlanPaymentProps) => {
  const $t = useTranslations()
  const { PLAN } = usePaymentContainerConstant()
  if (!updatePaymentType) return

  const cost = getMakeComma(PLAN.COST[updatePaymentType])
  const tax = getMakeComma(PLAN.COST[updatePaymentType] / 10)
  const total = getMakeComma(PLAN.COST[updatePaymentType] + PLAN.COST[updatePaymentType] / 10)

  return (
    <Styles.PlanPayment>
      <Styles.Info>
        <Styles.Title>{$t('payment.service_fee')}</Styles.Title>
        <Styles.Desc>
          {cost} {$t('common.won')}
        </Styles.Desc>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('payment.tax_fee')}</Styles.Title>
        <Styles.Desc>
          {tax} {$t('common.won')}
        </Styles.Desc>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('payment.total_fee')}</Styles.Title>
        <Styles.TotalDesc>
          {total}
          {$t('common.won')} / {$t('common.month')}
        </Styles.TotalDesc>
      </Styles.Info>
    </Styles.PlanPayment>
  )
}
export default UpgradePlanPayment
