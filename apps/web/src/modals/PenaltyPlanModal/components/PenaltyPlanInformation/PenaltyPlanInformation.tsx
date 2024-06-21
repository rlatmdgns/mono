import { PlanInformationAtom } from '@/app/[locale]/settings/payment/recoil/atom'
import * as Styles from '@/modals/PenaltyPlanModal/components/PenaltyPlanPayment/styles'
import { getMakeComma } from '@/shared/lib/utils'
import { useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

const PenaltyPlanInformation = () => {
  const $t = useTranslations()
  const planInformation = useRecoilValue(PlanInformationAtom)

  return (
    <>
      <Styles.PenaltyInformation>
        <Icon icon="icon/warning-solid" color="red500" />
        {$t('penalty_payment.description')}
      </Styles.PenaltyInformation>
      <Styles.PlanPayment>
        <Styles.Info>
          <Styles.Title>{$t('payment.service_period')}</Styles.Title>
          <Styles.Desc>
            {planInformation?.penalty_charge.discount_count} {$t('common.months')}
          </Styles.Desc>
        </Styles.Info>
        <Styles.Info>
          <Styles.Title>{$t('payment.sale_price_with_tax')}</Styles.Title>
          <Styles.Desc>
            {getMakeComma(planInformation?.penalty_charge.discounted_amount)}
            {$t('common.won')}
          </Styles.Desc>
        </Styles.Info>
        <Styles.Info>
          <Styles.Title>{$t('payment.total_fee')}</Styles.Title>
          <Styles.TotalDesc>
            {getMakeComma(planInformation?.penalty_charge?.total_amount_of_penalty_charges)}
            {$t('common.month')}
          </Styles.TotalDesc>
        </Styles.Info>
      </Styles.PlanPayment>
    </>
  )
}
export default PenaltyPlanInformation
