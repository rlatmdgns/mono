import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useRecoilValue } from 'recoil'
import {
  PaymentInformationAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { Controller, useForm } from 'react-hook-form'
import Card from '@/features/Card/Card'
import UpgradePlanPayment from '@/modals/UpgradePlanModal/components/UpgradePlanPayment'
import UpgradePlanInformation from '@/modals/UpgradePlanModal/components/UpgradePlanInfomation'
import { getDayFormat } from '@/shared/lib/utils'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import useUpgradePayment from '@/modals/UpgradePlanModal/hooks/useUpgradePayment'
import { useTranslations } from 'next-intl'

interface AddPlanFormProps {
  onClose: () => void
  currentType: string
}

const UpgradePlanForm = ({ onClose, currentType }: AddPlanFormProps) => {
  const $t = useTranslations()
  const [updatePaymentType, setUpdatePaymentType] = useState('')
  const planInformation = useRecoilValue(PlanInformationAtom)
  const paymentInformation = useRecoilValue(PaymentInformationAtom)
  const {
    formState: { isDirty },
    control,
    watch,
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: paymentInformation.billing_email,
    },
  })
  const { upgradePaymentMutate } = useUpgradePayment(onClose)

  const getUpdatePaymentType =
    planInformation.period_type === 'annual'
      ? $t('payment.payment_short_type.monthly')
      : $t('payment.payment_short_type.annual')

  const getPaymentType =
    planInformation.period_type === 'annual'
      ? $t('payment.payment_short_type.annual')
      : $t('payment.payment_short_type.monthly')

  const getEndPlanDate = getDayFormat(
    dayjs(planInformation.plan_end_date).toDate(),
    $t('date_format.two_year_date'),
  )

  const handlePaymentSubmit = () => {
    if (!getValues('email')) return
    upgradePaymentMutate({
      period_type: updatePaymentType,
      billing_email: getValues('email') as string,
    })
  }

  const initUpdatePaymentType = () => {
    planInformation.period_type === 'annual' && setUpdatePaymentType('monthly')
    planInformation.period_type === 'monthly' && setUpdatePaymentType('annual')
  }

  const isMailMatch = !!watch('email')?.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
  )

  useEffect(() => {
    initUpdatePaymentType()
  }, [])
  return (
    <Styles.UpgradePlanForm>
      <UpgradePlanInformation plan={getUpdatePaymentType} updatePaymentType={updatePaymentType} />
      <UpgradePlanPayment updatePaymentType={updatePaymentType} />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Card email={getValues('email')} onChange={onChange} />
        )}
      />
      <Styles.UpgradeText>
        {$t('payment.upgrade.description', {
          paymentType: getPaymentType,
          endPlanDate: getEndPlanDate,
        })}
      </Styles.UpgradeText>
      <Styles.Footer>
        <Button
          text={$t('payment.upgrade.change_text', { paymentType: getPaymentType })}
          disabled={!isMailMatch}
          onClick={handlePaymentSubmit}
        />
      </Styles.Footer>
    </Styles.UpgradePlanForm>
  )
}
export default UpgradePlanForm
