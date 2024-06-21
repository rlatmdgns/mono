import * as yup from 'yup'
import { useTranslations } from 'next-intl'

export const useValidation = () => {
  const $t = useTranslations('validation')
  const enterpriseSchema = yup.object({
    enterprise_logo: yup.string().notRequired(),
    enterprise_name: yup
      .string()
      .required($t('enterprise_name_required_message'))
      .max(15, $t('enterprise_name_validation_message')),
    enterprise_recruit_url: yup.string().required($t('enterprise_url_required_message')),
    enterprise_address: yup.string().notRequired(),
    enterprise_detail_address: yup.string().notRequired(),
    enterprise_explanation: yup.string().notRequired(),
    enterprise_email: yup.string().required($t('enterprise_email_required_message')),
    enterprise_background: yup.array().notRequired(),
  })

  return { enterpriseSchema }
}
