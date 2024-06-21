import * as Styles from './styles'
import { getMakeComma } from '@/shared/lib/utils'
import { PaymentTypeAtom } from '@/app/[locale]/settings/payment/recoil/atom'
import { useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'
import usePaymentContainerConstant from '@/app/[locale]/settings/payment/hooks/usePaymentContainerConstant'

const PenaltyPlanPayment = () => {
  const { PLAN } = usePaymentContainerConstant()
  const currentType = useRecoilValue(PaymentTypeAtom)
  const cost = getMakeComma(PLAN.COST[currentType])
  const tax = getMakeComma(PLAN.COST[currentType] / 10)
  const total = getMakeComma(PLAN.COST[currentType] + PLAN.COST[currentType] / 10)
  const $t = useTranslations()

  return (
    <Styles.PlanPayment>
      <Styles.Info>
        <Styles.Title>{$t('setting.payment.service_fee')}</Styles.Title>
        <Styles.Desc>
          {cost}
          {$t('common.won')}
        </Styles.Desc>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('setting.payment.tax_fee')}</Styles.Title>
        <Styles.Desc>
          {tax}
          {$t('common.won')}
        </Styles.Desc>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('setting.payment.total_fee')}</Styles.Title>
        <Styles.TotalDesc>
          {total}
          {$t('common.won')}
        </Styles.TotalDesc>
      </Styles.Info>
    </Styles.PlanPayment>
  )
}
export default PenaltyPlanPayment
