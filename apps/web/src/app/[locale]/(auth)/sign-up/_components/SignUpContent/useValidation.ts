import * as yup from 'yup'
import { useTranslations } from 'next-intl'

export const useValidation = () => {
  const $t = useTranslations('validation')
  const getStartedForFreeSchema = yup.object().shape({
    user_email: yup
      .string()
      .required($t('email_input_message'))
      .matches(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
        $t('email_validation_error'),
      ),
  })
  return { getStartedForFreeSchema }
}
