'use client'

import PaymentFooter from '@/app/[locale]/settings/payment/components/PaymentFooter'
import PaymentList from '@/app/[locale]/settings/payment/components/PaymentList'
import useGetPayment from '@/app/[locale]/settings/payment/hooks/useGetPayment'
import useGetPlan from '@/app/[locale]/settings/payment/hooks/useGetPlan'
import {
  PaymentInformationAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import ConfirmModal from '@/modals/ConfirmModal'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as Styles from './styles'
import useDeletePayment from '@/app/[locale]/settings/payment/hooks/useDeletePayment'
import PaymentNextInfo from '@/app/[locale]/settings/payment/components/PaymentNextInfo'
import { useLocale, useTranslations } from 'next-intl'

const PaymentContainer = () => {
  const $t = useTranslations()
  const currentLocale = useLocale()
  const { openModal, closeModal } = useModal()

  const [paymentInformation, setPaymentInformation] = useRecoilState(PaymentInformationAtom)
  const [planInformation, setPlanInformation] = useRecoilState(PlanInformationAtom)

  const { paymentData } = useGetPayment()
  const [isCancel, setIsCancel] = useState(false)
  const { planData } = useGetPlan()
  const expiredMsg = useRef('')
  const { deletePaymentMutate } = useDeletePayment(paymentInformation?.billing_email as string)

  const handleSetIsCancel = (status: boolean) => {
    setIsCancel(status)
  }

  const handleGetExpiredPenalty = () => {
    const isNotPenalty =
      !planInformation.penalty_charge ||
      planInformation.penalty_charge?.total_amount_of_penalty_charges === 0

    if (isNotPenalty) {
      handleSetIsCancel(true)
      return
    }

    openModal(MODAL.PENALTY_PLAN, {
      onClose: () => {
        closeModal(MODAL.PENALTY_PLAN)
      },
    })
  }

  const handleExpiredPayment = () => {
    deletePaymentMutate()
    handleSetIsCancel(false)
  }

  const handleCardInformationInit = () => {
    if (!paymentData) return
    if (!planData) return

    const { payment_information } = paymentData
    setPaymentInformation(payment_information)
    setPlanInformation(planData.plan)

    const penaltyExemption =
      planData.plan.penalty_charge?.total_amount_of_penalty_charges === 0
        ? $t('messages.not_penalty_message')
        : ''

    const endDate = dayjs(planData.plan.plan_end_date).toDate()
    expiredMsg.current =
      currentLocale === 'ko'
        ? `현재 이용 중인 플랜은 "${getDayFormat(
            endDate,
            'YY년 MM월 DD일',
          )}"까지 이용 가능합니다. ${penaltyExemption}`
        : `The current plan is available until "${getDayFormat(endDate, 'YY.MM.DD')}" ${penaltyExemption}`
  }

  useEffect(() => {
    handleCardInformationInit()
  }, [paymentData, planData])

  return (
    <Styles.PaymentContainer>
      <PaymentNextInfo />
      <PaymentList />
      {!!paymentInformation?.next_payment && (
        <Styles.PaymentExpired onClick={handleGetExpiredPenalty}>
          {$t('payment.unsubscription')}
        </Styles.PaymentExpired>
      )}
      <PaymentFooter />
      {isCancel && (
        <ConfirmModal
          title={$t('messages.subscription_cancellation_confirm')}
          textConfirm={$t('common.subscription_cancel')}
          subtitle={expiredMsg.current}
          onClick={handleExpiredPayment}
          onClose={() => {
            handleSetIsCancel(false)
          }}
        />
      )}
    </Styles.PaymentContainer>
  )
}

export default PaymentContainer
