import * as yup from 'yup'
import { useTranslations } from 'next-intl'

export const useValidation = () => {
  const $t = useTranslations('validation')
  const accountInfoSchema = yup.object({
    user_name: yup
      .string()
      .matches(/^[가-힣a-zA-Z]+$/g, $t('name_input_message'))
      .required(),
    user_phone: yup
      .string()
      .matches(/^\d{3}\d{4}\d{4}$/g, $t('phone_validation_message'))
      .required(),
    user_email: yup
      .string()
      .matches(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
        $t('email_validation_error'),
      )
      .required(),
    user_profile: yup.string().required(),
    user_job: yup.string().notRequired(),
    user_department: yup.string().notRequired(),
  })
  return {
    accountInfoSchema,
  }
}
