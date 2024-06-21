import { useTranslations } from 'next-intl'

export const useMailEditorVariableConstants = () => {
  const $t = useTranslations('mail_variable')
  const VARIABLES = [
    {
      id: 'company',
      value: `{${$t('company_name')}}`,
      color: '#FF7067',
      backgroundColor: '#FFF1F0',
    },
    {
      id: 'posting',
      value: `{${$t('announcement_name')}}`,
      color: '#F7A459',
      backgroundColor: '#FFF3E9',
    },
    {
      id: 'applicant',
      value: `{${$t('applicant_name')}}`,
      color: '#4BC482',
      backgroundColor: '#E3FAEE',
    },
    {
      id: 'sender-name',
      value: `{${$t('sender_name')}}`,
      color: '#5B97F5',
      backgroundColor: '#EAF2FF',
    },
    {
      id: 'sender-email',
      value: `{${$t('sender_email')}}`,
      color: '#6272FF',
      backgroundColor: '#EFF1FF',
    },
  ]

  return { VARIABLES }
}
