import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPostingApplicantForm } from '@/features/build-application/api'
import { CreatePostingApplicantFormRequest } from '@/features/build-application/types'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'

export const useCreatePostingApplicantForm = (
  id: string,
  callback?: (applicantItems: CreatePostingApplicantFormRequest) => void,
) => {
  const queryClient = useQueryClient()
  const { mutate: createPostingApplicantMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_POSTING_APPLICANT, id],
    mutationFn: (data: CreatePostingApplicantFormRequest) => createPostingApplicantForm(id, data),
    onSuccess: (result: CreatePostingApplicantFormRequest) => {
      const applicantForm = queryClient.getQueryData<CreatePostingApplicantFormRequest>([
        QUERY_KEY.POSTING_APPLICANT_FORM,
        id,
      ])
      const terms =
        result.posting_applicant_form[result.posting_applicant_form.length - 1]?.description
      queryClient.setQueryData([QUERY_KEY.POSTING_APPLICANT_FORM, id], {
        ...applicantForm,
        datas: [...result.posting_applicant_form],
        terms: {
          enterprise_select_personal_terms: null,
          enterprise_required_personal_terms: terms,
        },
      })
      Toast.success('지원서 양식이 저장되었습니다.')

      if (!callback) return
      callback(result)
    },
    onError: (error) => {
      console.error(error)
      Toast.error('지원서 양식이 생성이 실패하였습니다.')
    },
  })

  return {
    createPostingApplicantMutate,
  }
}
