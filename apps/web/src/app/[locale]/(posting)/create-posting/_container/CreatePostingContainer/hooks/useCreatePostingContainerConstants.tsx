import { useTranslations } from 'next-intl'

export const useCreatePostingContainerConstants = () => {
  const $t = useTranslations('folder')
  const defaultValues = {
    folder_id: { value: 'null', label: $t('none_folder_select') },
    posting_title: '',
    enterprise_explanation: '',
    posting_position: '',
    min_experience_years: undefined,
    max_experience_years: undefined,
    is_irrelevant: false,
    is_newcomer: false,
    is_experienced: false,
    isRequestFile: false,
    posting_request_file: [],
    posting_work_info: '',
    posting_work_place: '',
    posting_work_place_detail: '',
    posting_qualification: '',
    posting_advantage: '',
    posting_benefits_welfare: '',
    isAddQuestion: false,
    posting_add_question: [],
  }

  return { defaultValues }
}
