import { ModalLayout } from '@/shared/ui'
import { Applicant } from '@/interface/applicants'
import WriteMailContent from '@/modals/WriteMailModal/components/WriteMailContent'
import WriteMailFooter from '@/modals/WriteMailModal/components/WriteMailFooter'
import WriteMailHeader from '@/modals/WriteMailModal/components/WriteMailHeader'
import { sendEmailSchema, sendPostingEmailSchema } from '@/modals/WriteMailModal/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { useSelectApplicants } from '@/shared/hooks'

interface WriteMailModalProps {
  id?: string
  onClose: () => void
  applicant?: Applicant
}

const WriteMailModal = ({ id, applicant, onClose }: WriteMailModalProps) => {
  const { selectApplicantOptions } = useSelectApplicants()
  const methods = useForm({
    resolver: yupResolver(id ? sendPostingEmailSchema : sendEmailSchema),
    mode: 'all',
    defaultValues: {
      mail_to: applicant ? [applicant] : selectApplicantOptions,
    },
  })
  return (
    <FormProvider {...methods}>
      <ModalLayout isDimmed>
        <Styles.Wrapper>
          <WriteMailHeader onClick={onClose} />
          <WriteMailContent postingId={id} />
          <WriteMailFooter onClick={onClose} postingId={id} />
        </Styles.Wrapper>
      </ModalLayout>
    </FormProvider>
  )
}

export default WriteMailModal
