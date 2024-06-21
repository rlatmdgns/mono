import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import GetStartedForFree from '../GetStartedForFree'
import MailConfirmation from '@/app/[locale]/(auth)/_container/MailConfirmation'
import checkEmailAuthentication from '@/services/auth/signUp/checkEmailAuthentication'
import * as Styles from './styles'
import { useValidation } from '@/app/[locale]/(auth)/sign-up/_components/SignUpContent/useValidation'

const SignUpContent = () => {
  const { getStartedForFreeSchema } = useValidation()
  const methods = useForm({
    resolver: yupResolver(getStartedForFreeSchema),
    mode: 'all',
  })

  const {
    handleSubmit,
    watch,
    setError,
    formState: { isSubmitSuccessful },
  } = methods

  const handleFormSubmit = async (form: FieldValues) => {
    const { user_email } = form

    try {
      await checkEmailAuthentication(user_email)
    } catch (error) {
      if (error instanceof Error) {
        setError('user_email', {
          type: 'manual',
          message: error.message,
        })
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <Styles.Wrapper onSubmit={handleSubmit(handleFormSubmit)}>
        {isSubmitSuccessful ? (
          <MailConfirmation email={watch('user_email')} />
        ) : (
          <GetStartedForFree />
        )}
      </Styles.Wrapper>
    </FormProvider>
  )
}

export default SignUpContent
