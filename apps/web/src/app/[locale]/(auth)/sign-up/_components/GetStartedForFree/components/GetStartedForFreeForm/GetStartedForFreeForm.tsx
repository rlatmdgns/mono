import { useFormContext } from 'react-hook-form'
import { Button, FloatingInput } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const GetStartedForFreeForm = () => {
  const $t = useTranslations()
  const {
    register,
    formState: { isValid, errors, isSubmitting },
  } = useFormContext()

  return (
    <Styles.Form>
      <FloatingInput
        type="email"
        placeholder={$t('form.email')}
        icon="icon/mail-line"
        isCorrect={isValid && !errors?.user_email}
        isError={!!errors?.user_email}
        validationMessage={errors?.user_email?.message}
        register={register('user_email')}
      />
      <Button
        isLoading={isSubmitting}
        size="md"
        type="submit"
        text={$t('sign_up.starting_free')}
        disabled={!isValid}
      />
    </Styles.Form>
  )
}

export default GetStartedForFreeForm
