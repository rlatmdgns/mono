'use client'

import SettingTitle from '@/app/[locale]/settings/_components/SettingTitle'
import PaymentList from '@/app/[locale]/settings/payment-history/components/PaymentList'
import { PAYMENT_LOG_HEADERS } from '@/app/[locale]/settings/payment-history/container/HistoryContainer/HistoryContainer.constant'
import { useEffect, useState } from 'react'
import * as Styles from './styles'
import useGetPayments from '@/app/[locale]/settings/payment-history/hooks/useGetPayments'
import { PaymentLog } from '@/interface/payment'
import { useTranslations } from 'next-intl'

const HistoryContainer = () => {
  const $t = useTranslations('setting.payment_history')
  const { paymentData } = useGetPayments()
  const [paymentLogs, setPaymentLogs] = useState<PaymentLog[]>([])

  const initHistory = () => {
    if (!paymentData) return
    const { payment_log } = paymentData
    setPaymentLogs(payment_log)
  }

  useEffect(() => {
    initHistory()
  }, [paymentData])

  return (
    <Styles.HistoryContainer>
      <SettingTitle title={$t('title')} />
      <PaymentList paymentLogHeaders={PAYMENT_LOG_HEADERS} paymentLogs={paymentLogs} />
    </Styles.HistoryContainer>
  )
}

export default HistoryContainer
