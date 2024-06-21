'use client'

import { PAGE } from '@/shared/constants'
import signUp from '@/services/auth/signUp'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import SignUpFormContent from './components/SignUpFormContent/SignUpFormContent'
import SignUpFormHeader from './components/SignUpFormHeader'
import * as Styles from './styles'
import { signUpFormSchema } from './validation'
import { Toast } from '@/shared/ui'

interface SignUpFormProps {
  readonly email: string
}

const SignUpForm = ({ email }: SignUpFormProps) => {
  const router = useRouter()

  const methods = useForm({
    resolver: yupResolver(signUpFormSchema),
    mode: 'all',
  })

  const { handleSubmit } = methods

  const handleFormSubmit = async (form: FieldValues) => {
    const data = {
      consent_to_marketing: form.consent_to_marketing ? form.consent_to_marketing : false,
      enterprise_name: form.enterprise_name,
      user_access_path: form.user_access_path,
      user_email: form.user_email,
      user_name: form.user_name,
      user_password: form.user_password,
      user_phone: form.user_phone,
      user_re_password: form.user_re_password,
    }

    try {
      await signUp(data)
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
          <SignUpFormHeader />
          <SignUpFormContent email={email} />
        </Styles.Container>
      </Styles.Wrapper>
    </FormProvider>
  )
}

export default SignUpForm
