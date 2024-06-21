import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useRecoilValue } from 'recoil'
import {
  PaymentInformationAtom,
  PaymentTypeAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { Controller, useForm } from 'react-hook-form'
import Card from '@/features/Card/Card'
import PenaltyPlanInformation from '@/modals/PenaltyPlanModal/components/PenaltyPlanInformation'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'
import { useState } from 'react'
import ConfirmModal from '@/modals/ConfirmModal'
import useDeletePayment from '@/modals/PenaltyPlanModal/hooks/useDeletePayment'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface AddPlanFormProps {
  onClose: () => void
  currentType: string
}

const AddPlanForm = ({ onClose }: AddPlanFormProps) => {
  const paymentType = useRecoilValue(PaymentTypeAtom)
  const planInformation = useRecoilValue(PlanInformationAtom)
  const paymentInformation = useRecoilValue(PaymentInformationAtom)
  const { control, watch, getValues } = useForm({
    defaultValues: {
      email: paymentInformation.billing_email,
    },
  })
  const { openModal, closeModal } = useModal()

  const $t = useTranslations()

  const [isConfirmStatus, setIsConfirmStatus] = useState(false)
  const { deletePaymentMutate } = useDeletePayment(getValues('email') as string, onClose)
  const isDowngrade =
    planInformation.period_type === 'annual' &&
    !planInformation.is_free_plan &&
    paymentType === 'monthly'

  const getPaymentType =
    planInformation.period_type === 'annual'
      ? $t('payment.payment_short_type.annual')
      : $t('payment.payment_short_type.monthly')

  const getEndPlanDate = getDayFormat(
    dayjs(planInformation.plan_end_date).toDate(),
    $t('date_format.two_year_date'),
  )

  const handleSetIsConfirmStatus = (status: boolean) => {
    setIsConfirmStatus(status)
  }

  const handlePenaltyPaymentSubmit = () => {
    if (!getValues('email')) return
    deletePaymentMutate()
    if (isDowngrade) {
      onClose()
      openModal(MODAL.ADD_PLAN, {
        currentType: 'monthly',
        onClose: () => closeModal(MODAL.ADD_PLAN),
      })
    }
  }

  return (
    <Styles.AddPlanForm>
      <PenaltyPlanInformation />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Card email={getValues('email')} onChange={onChange} />
        )}
      />
      <Styles.PenaltyPlanEnd>
        {$t('payment.penalty_plan_end_description', {
          paymentType: getPaymentType,
          endPlanDate: getEndPlanDate,
        })}
      </Styles.PenaltyPlanEnd>
      <Styles.Footer>
        <Button
          text={$t('penalty_payment.penalty_payment')}
          disabled={!watch('email')}
          onClick={() => handleSetIsConfirmStatus(true)}
        />
      </Styles.Footer>
      {isConfirmStatus && (
        <ConfirmModal
          title={$t('messages.payment_confirm')}
          state="positive"
          textConfirm={$t('common.confirm')}
          onClick={() => handlePenaltyPaymentSubmit()}
          onClose={() => handleSetIsConfirmStatus(false)}
        />
      )}
    </Styles.AddPlanForm>
  )
}
export default AddPlanForm
