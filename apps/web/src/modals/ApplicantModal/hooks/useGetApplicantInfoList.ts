import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import { getDaysAgo } from '@/shared/lib'
import { getApplicantExtract } from '@/modals/ApplicantModal/ApplicantModal.factory'
import { useTranslations } from 'next-intl'

export const useGetApplicantInfoList = () => {
  const $t = useTranslations()
  const getApplicantInfoList = (applicant: ApplicantResponse) => {
    const { applicant_email, applicant_phone, applicant_re_url, application_date } =
      getApplicantExtract(applicant)

    const daysSinceApplication = `${getDaysAgo(application_date)}일 전`

    return [
      {
        label: $t('common.email'),
        name: 'applicant_email',
        value: applicant_email,
        options: {
          required: $t('validation.email_input_message'),
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z][-_]*)*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi,
            message: $t('validation.email_validation_error'),
          },
        },
      },
      {
        label: $t('common.phone'),
        name: 'applicant_phone',
        value: applicant_phone,
        options: {
          required: $t('validation.phone_input_message'),
          pattern: {
            value: /^\d{3}\d{4}\d{4}$/g,
            message: $t('validation.phone_validation_message'),
          },
        },
        maxLength: 11,
      },
      {
        label: $t('common.apply_path'),
        name: 'applicant_re_url',
        value: applicant_re_url,
        options: {
          required: $t('validation.apply_path_required_message'),
        },
        maxLength: 20,
      },
      {
        label: $t('common.apply_period'),
        name: 'application_date',
        value: daysSinceApplication,
        isFixed: true,
      },
    ]
  }
  return { getApplicantInfoList }
}
