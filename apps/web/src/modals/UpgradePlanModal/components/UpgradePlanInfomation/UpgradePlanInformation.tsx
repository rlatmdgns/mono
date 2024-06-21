import * as Styles from './styles'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'

interface UpgradePlanInformationProps {
  plan: string
  updatePaymentType: string
}

const UpgradePlanInformation = ({ plan, updatePaymentType }: UpgradePlanInformationProps) => {
  const $t = useTranslations()

  if (!updatePaymentType) return

  const getPeriodUsePay = () => {
    const today = dayjs().format($t('date_format.date'))
    const endType = updatePaymentType === 'monthly' ? 'month' : 'year'
    const endDate = dayjs().add(1, endType).format($t('date_format.date'))

    return `${today} ~ ${endDate}`
  }
  return (
    <Styles.PlanInfo>
      <Styles.Info>
        <Styles.Title>{$t('payment.plan_name')}</Styles.Title>
        <Styles.Desc>{$t('payment.plan_explain.title')}</Styles.Desc>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('payment.payment_interval')}</Styles.Title>
        <Styles.PaymentTypeList>
          <Styles.Type $isActive>
            <Styles.Icon />
            {plan} {$t('common.payment')}
          </Styles.Type>
        </Styles.PaymentTypeList>
      </Styles.Info>
      <Styles.Info>
        <Styles.Title>{$t('payment.period')}</Styles.Title>
        <Styles.Desc>{getPeriodUsePay()}</Styles.Desc>
      </Styles.Info>
    </Styles.PlanInfo>
  )
}
export default UpgradePlanInformation
