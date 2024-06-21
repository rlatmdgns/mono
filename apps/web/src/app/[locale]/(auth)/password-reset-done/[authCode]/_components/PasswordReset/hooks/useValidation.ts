import * as yup from 'yup'
import { useTranslations } from 'next-intl'

export const useValidation = () => {
  const $t = useTranslations('validation')
  const resetPasswordSchema = yup.object({
    new_password: yup
      .string()
      .required($t('new_password_input_message'))
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/g,
        $t('password_validation_error'),
      ),
    new_password_check: yup
      .string()
      .oneOf([yup.ref('new_password')], $t('new_password_same_check_error'))
      .required($t('new_password_required_message')),
  })

  return { resetPasswordSchema }
}
