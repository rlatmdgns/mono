import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateApplicantFileName from '@/services/applicantFile/updateApplicantFileName'
import { Toast } from '@/shared/ui'
import { UpdateApplicantFileNameRequest } from '@/services/applicantFile/updateApplicantFileName/updateApplicantFileName.interface'
import { useTranslations } from 'next-intl'

const useUpdateApplicantFileName = (file_id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: updateApplicantFileNameMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_FILE_NAME],
    mutationFn: (data: UpdateApplicantFileNameRequest) => updateApplicantFileName(file_id, data),
    onSuccess: () => {
      Toast.success($t('document_name_change_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_FILES],
      })
    },
    onError: () => {
      Toast.error($t('document_name_change_fail'))
    },
  })

  return { updateApplicantFileNameMutate }
}

export default useUpdateApplicantFileName
