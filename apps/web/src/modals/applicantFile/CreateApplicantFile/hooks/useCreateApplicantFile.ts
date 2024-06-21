import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import createApplicantFile from '@/services/applicantFile/createApplicantFile'
import { ApplicantFile } from '@/services/applicantFile/createApplicantFile/createApplicantFile.interface'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useCreateApplicantFile = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: createApplicantFileMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_APPLICANT_FILE],
    mutationFn: (data: ApplicantFile) => createApplicantFile(data),
    onSuccess: () => {
      Toast.success($t('add_document_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_FILES],
      })
    },
    onError: () => {
      Toast.error($t('add_document_fail'))
    },
  })

  return { createApplicantFileMutate }
}

export default useCreateApplicantFile
