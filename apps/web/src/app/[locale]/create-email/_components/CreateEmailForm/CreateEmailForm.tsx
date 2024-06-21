import { Button } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import createEmail from '@/services/auth/signUp/createEmail'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import CreateEmailMailBox from '../CreateEmailMailBox'
import * as Styles from './styles'
import { createEmailFormSchema } from './validation'
import { useTranslations } from 'next-intl'

const CreateEmailForm = () => {
  const $t = useTranslations()
  const router = useRouter()

  const methods = useForm({
    resolver: yupResolver(createEmailFormSchema),
    mode: 'onBlur',
  })

  const {
    formState: { isValid, errors, isSubmitting },
    handleSubmit,
    setError,
  } = methods

  const handleFormSubmit = async (form: FieldValues) => {
    const { enterprise_email } = form

    const data = {
      enterprise_email: `${enterprise_email}@steadhr.com`,
    }
    try {
      await createEmail(data)
      router.replace(PAGE.HOME)
    } catch (error) {
      if (error instanceof Error) {
        if (error.message) {
          return setFormError(error.message)
        }
        setFormError($t('messages.create_enterprise_email_fail'))
      }
    }
  }

  const setFormError = (error: string) => {
    setError('enterprise_email', {
      type: 'manual',
      message: error,
    })
  }

  return (
    <FormProvider {...methods}>
      <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <CreateEmailMailBox />
        <Styles.Error>{errors?.enterprise_email?.message}</Styles.Error>
        <Button
          isLoading={isSubmitting}
          type="submit"
          text={$t('stead_mail_setting.setting_account')}
          size="md"
          disabled={!isValid}
        />
      </Styles.Form>
    </FormProvider>
  )
}

export default CreateEmailForm
