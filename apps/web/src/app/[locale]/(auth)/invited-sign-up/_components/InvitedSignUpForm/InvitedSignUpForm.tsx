'use client'

import { PAGE } from '@/shared/constants'
import invitedSignUp from '@/services/auth/invitedSignUp'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import InvitedSignUpFormContent from './components/InvitedSignUpFormContent'
import InvitedSignUpFormHeader from './components/InvitedSignUpFormHeader'
import * as Styles from './styles'
import { Toast } from '@/shared/ui'
import { useValidation } from '@/app/[locale]/(auth)/invited-sign-up/_components/InvitedSignUpForm/hooks/useValidation'

interface InvitedSignUpFormProps {
  email: string
  authCode: string
}

const InvitedSignUpForm = ({ email, authCode }: InvitedSignUpFormProps) => {
  const router = useRouter()

  const { invitedSignUpFormSchema } = useValidation()
  const methods = useForm({
    resolver: yupResolver(invitedSignUpFormSchema),
    mode: 'all',
  })

  const { handleSubmit } = methods

  const handleFormSubmit = async (form: FieldValues) => {
    const data = {
      consent_to_marketing: form.consent_to_marketing ? form.consent_to_marketing : false,
      user_email: form.user_email,
      user_password: form.user_password,
      user_name: form.user_name,
      user_phone: form.user_phone,
      auth_code: authCode,
    }
    try {
      await invitedSignUp(data)
      router.replace(PAGE.SIGN_IN)
    } catch (error) {
      if (error instanceof Error) {
        Toast.error(error.message)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Styles.Wrapper onSubmit={handleSubmit(handleFormSubmit)}>
        <Styles.Container>
          <InvitedSignUpFormHeader />
          <InvitedSignUpFormContent email={email} />
        </Styles.Container>
      </Styles.Wrapper>
    </FormProvider>
  )
}

export default InvitedSignUpForm
