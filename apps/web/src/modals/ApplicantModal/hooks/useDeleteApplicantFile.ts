import deleteApplicantFile from '@/services/applicantFile/deleteApplicantFile'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useDeleteApplicantFile = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteApplicantFileMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_APPLICANT_FILE],
    mutationFn: (file_id: string) => deleteApplicantFile(file_id),
    onSuccess: () => {
      Toast.success($t('delete_document_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_FILES],
      })
    },
    onError: () => {
      Toast.error($t('delete_document_fail'))
    },
  })
  return { deleteApplicantFileMutate }
}

export default useDeleteApplicantFile
