import * as yup from 'yup'
import { useTranslations } from 'next-intl'

export const useValidation = () => {
  const $t = useTranslations('validation')

  const invitedSignUpFormSchema = yup.object({
    user_email: yup
      .string()
      .trim()
      .required($t('email_input_message'))
      .matches(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
        $t('email_validation_error'),
      ),
    user_name: yup
      .string()
      .trim()
      .matches(/^[가-힣a-zA-Z]+$/g, $t('name_input_message'))
      .required($t('name_validation_message')),
    user_phone: yup
      .string()
      .trim()
      .matches(/^\d{3}\d{4}\d{4}$/g, $t('phone_validation_message'))
      .required($t('phone_input_message')),
    user_password: yup
      .string()
      .trim()
      .required($t('password_input_message'))
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{7,}$/g,
        $t('password_validation_error'),
      ),
    user_re_password: yup
      .string()
      .trim()
      .oneOf([yup.ref('user_password')], $t('password_input_message'))
      .required($t('password_input_message')),
    service_agreement: yup
      .boolean()
      .required($t('service_agreement_validation'))
      .oneOf([true], $t('service_agreement_validation')),
    consent_to_marketing: yup.boolean(),
  })
  return {
    invitedSignUpFormSchema,
  }
}
