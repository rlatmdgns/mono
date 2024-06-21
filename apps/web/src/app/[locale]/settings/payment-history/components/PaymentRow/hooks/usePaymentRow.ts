import { PeriodType } from '@/app/[locale]/settings/payment-history/components/PaymentRow/PaymentRow.interface'
import { useTranslations } from 'next-intl'

export const usePaymentRow = () => {
  const $t = useTranslations()
  const PERIOD_TYPE: PeriodType = {
    monthly: $t('payment.payment_auto_type.monthly'),
    annual: $t('payment.payment_auto_type.annual'),
  }

  const getPlanTitle = (type: string) => {
    switch (type) {
      case 'allInOne':
        return $t('setting.payment_management.all_in_one_plan')
    }
  }

  return { PERIOD_TYPE, getPlanTitle }
}
