import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useRecoilValue } from 'recoil'
import {
  PaymentInformationAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import PlanInformation from '@/modals/PlanInformationModal/components/PlanInformation'
import BillingEmail from '@/features/Card/components/BillingEmail/BillingEmail'
import useUpdateBillingEmail from '@/modals/PlanInformationModal/hooks/useUpdateBillingEmail'
import { useTranslations } from 'next-intl'

interface PlanInformationFormProps {
  onClose: () => void
}

const PlanInformationForm = ({ onClose }: PlanInformationFormProps) => {
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
  const $t = useTranslations('common')
  const [isConfirmStatus, setIsConfirmStatus] = useState(false)
  const { updateBillingEmailMutate } = useUpdateBillingEmail(getValues('email') as string, onClose)

  const handleUpdateBillingEmail = () => {
    if (!getValues('email')) return
    updateBillingEmailMutate()
  }

  const isMailMatch = !!watch('email')?.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
  )

  return (
    <Styles.PlanInformationForm>
      <PlanInformation />
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <BillingEmail email={getValues('email')} onChange={onChange} />
        )}
      />
      <Styles.Footer>
        <Button
          text={$t('save')}
          disabled={!isDirty || !isMailMatch}
          onClick={handleUpdateBillingEmail}
        />
      </Styles.Footer>
    </Styles.PlanInformationForm>
  )
}
export default PlanInformationForm
