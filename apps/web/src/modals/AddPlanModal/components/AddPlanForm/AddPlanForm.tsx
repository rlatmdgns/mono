import * as Styles from './styles'
import { Button } from '@/shared/ui'
import AddPlanInformation from '@/modals/AddPlanModal/components/AddPlanInfomation'
import AddPlanPayment from '@/modals/AddPlanModal/components/AddPlanPayment'
import { useRecoilValue } from 'recoil'
import {
  PaymentInformationAtom,
  PaymentTypeAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { Controller, useForm } from 'react-hook-form'
import useAddPayment from '@/modals/AddPlanModal/hooks/useAddPayment'
import { AddPaymentRequest } from '@/interface/payment'
import Card from '@/features/Card/Card'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface AddPlanFormProps {
  onClose: () => void
  currentType: string
}

const AddPlanForm = ({ onClose, currentType }: AddPlanFormProps) => {
  const $t = useTranslations('common')
  const paymentType = useRecoilValue(PaymentTypeAtom)
  const { control, watch, setValue, getValues, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
  })
  const paymentInformation = useRecoilValue(PaymentInformationAtom)
  const { addPaymentMutate } = useAddPayment(onClose)

  const handlePaymentSubmit = () => {
    if (!getValues('email')) return

    const postData: AddPaymentRequest = {
      period_type: paymentType.toLowerCase(),
      billing_email: getValues('email'),
    }
    addPaymentMutate(postData)
  }
  useEffect(() => {
    if (paymentInformation?.billing_email) {
      setValue('email', paymentInformation.billing_email)
    }
  }, [])

  const isMailMatch = !watch('email').match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
  )

  return (
    <Styles.AddPlanForm>
      <AddPlanInformation />
      <AddPlanPayment />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Card email={getValues('email')} onChange={onChange} />
        )}
      />
      <Styles.Footer>
        <Button text={$t('payment')} disabled={isMailMatch} onClick={handlePaymentSubmit} />
      </Styles.Footer>
    </Styles.AddPlanForm>
  )
}
export default AddPlanForm
