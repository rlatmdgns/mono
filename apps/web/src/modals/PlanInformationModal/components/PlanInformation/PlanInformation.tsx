import * as Styles from './styles'
import { getMakeComma } from '@/shared/lib/utils'
import {
  PaymentInformationAtom,
  PaymentTypeAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { useRecoilValue } from 'recoil'
import { scheduleDayJs } from '@/shared/lib'
import { useTranslations } from 'next-intl'
import usePaymentContainerConstant from '@/app/[locale]/settings/payment/hooks/usePaymentContainerConstant'

const PlanInformation = () => {
  const $t = useTranslations()
  const { PLAN } = usePaymentContainerConstant()
  const dateFormat = $t('date_format.two_year_date')
  const planInformation = useRecoilValue(PlanInformationAtom)
  const paymentInformation = useRecoilValue(PaymentInformationAtom)
  const getPaymentType =
    planInformation.period_type === 'annual'
      ? $t('payment.payment_short_type.annual')
      : $t('payment.payment_short_type.monthly')
  const getPaymentPeriod =
    planInformation.period_type === 'annual' ? `x 12${$t('common.months')}` : ''

  const currentType = useRecoilValue(PaymentTypeAtom)
  const cost = getMakeComma(PLAN.COST[planInformation.period_type])
  const tax = getMakeComma(PLAN.COST[planInformation.period_type] / 10)
  const total = getMakeComma(
    PLAN.COST[planInformation.period_type] + PLAN.COST[planInformation.period_type] / 10,
  )

  return (
    <>
      <Styles.PlanPayment>
        <Styles.Info>
          <Styles.Title>{$t('payment.period')}</Styles.Title>
          <Styles.Desc>
            {scheduleDayJs(paymentInformation.payment_start).format(dateFormat)} ~
            {scheduleDayJs(paymentInformation.payment_end).format(dateFormat)}
          </Styles.Desc>
        </Styles.Info>
        <Styles.Info>
          <Styles.Title>{$t('common.payment')}</Styles.Title>
          <Styles.Desc>
            {getPaymentType} {$t('common.agreement')}
          </Styles.Desc>
        </Styles.Info>
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
            {$t('common.won')} {getPaymentPeriod}
          </Styles.TotalDesc>
        </Styles.Info>
      </Styles.PlanPayment>
    </>
  )
}
export default PlanInformation
