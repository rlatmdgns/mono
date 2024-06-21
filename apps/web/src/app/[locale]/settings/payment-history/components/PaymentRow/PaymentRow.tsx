import * as Styles from './styles'
import Link from 'next/link'
import { getDayFormat, getMakeComma } from '@/shared/lib/utils'
import { PaymentLog, PaymentLogHeaderInterface } from '@/interface/payment'
import { useLocale, useTranslations } from 'next-intl'
import { usePaymentRow } from '@/app/[locale]/settings/payment-history/components/PaymentRow/hooks/usePaymentRow'

interface PaymentRowProps {
  paymentLogHeaders: PaymentLogHeaderInterface[]
  paymentLogs: PaymentLog[]
}

const PaymentRow = ({ paymentLogHeaders, paymentLogs }: PaymentRowProps) => {
  const $t = useTranslations()
  const { PERIOD_TYPE, getPlanTitle } = usePaymentRow()
  const currentLocale = useLocale()
  if (paymentLogs.length < 1)
    return (
      <>
        <Styles.Rows $isThead={true}>
          {paymentLogHeaders.map((logHeader, index) => (
            <Styles.Cell key={`logHeader_${index}`}>{logHeader[currentLocale]}</Styles.Cell>
          ))}
        </Styles.Rows>
        <Styles.NoData>{$t('payment_history.no_payment_history')}</Styles.NoData>
      </>
    )

  return (
    <>
      <Styles.Rows $isThead>
        {paymentLogHeaders.map((logHeader, index) => (
          <Styles.Cell key={`logHeader_${index}`}>{logHeader[currentLocale]}</Styles.Cell>
        ))}
      </Styles.Rows>
      {paymentLogs.length > 0 &&
        paymentLogs.map((log, index) => (
          <Styles.Rows key={`log_${index}`}>
            <Styles.Cell>{getPlanTitle(log.plan_type)}</Styles.Cell>
            <Styles.Cell>{PERIOD_TYPE[log.period_type]}</Styles.Cell>
            <Styles.Cell>
              {getMakeComma(log.amount)} {$t('common.won')}
            </Styles.Cell>
            <Styles.Cell>{getDayFormat(log.payment_date, 'YYYY-MM-DD hh:mm')}</Styles.Cell>
            <Styles.Cell>
              {log.is_paid
                ? $t('setting.payment_history.payment_complete')
                : $t('setting.payment_history.payment_scheduled')}
            </Styles.Cell>
            <Styles.Cell>
              {log.receipt_url && (
                <Link href={log.receipt_url} target={'_blank'}>
                  {$t('common.view_detail')}
                </Link>
              )}
            </Styles.Cell>
          </Styles.Rows>
        ))}
    </>
  )
}
export default PaymentRow
