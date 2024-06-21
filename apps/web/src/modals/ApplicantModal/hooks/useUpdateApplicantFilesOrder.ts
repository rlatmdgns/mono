import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { UpdateApplicantFilesOrderRequest } from '@/services/applicantFile/updateApplicantFilesOrder/updateApplicantFilesOrder.interface'
import updateApplicantFilesOrder from '@/services/applicantFile/updateApplicantFilesOrder'
import { useTranslations } from 'next-intl'

const useUpdateApplicantFilesOrder = (handleChangeConfirm: (status: boolean) => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateApplicantFilesOrderMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_FILES_ORDER],
    mutationFn: (form: UpdateApplicantFilesOrderRequest) => updateApplicantFilesOrder(form),
    onSuccess: () => {
      Toast.success($t('document_order_changed'))
      handleChangeConfirm(false)
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_FILES],
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return { updateApplicantFilesOrderMutate }
}

export default useUpdateApplicantFilesOrder
