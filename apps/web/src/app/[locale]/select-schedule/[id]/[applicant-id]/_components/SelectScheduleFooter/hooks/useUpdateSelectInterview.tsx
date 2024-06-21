import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { useSetRecoilState } from 'recoil'
import {
  InterviewResponseAtoms,
  InterviewResponseDataAtoms,
} from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_recoil/atom'
import selectInterview from '@/services/interview/selectInterview'
import { InterviewPostRequest } from '@/interface/interview'

const useUpdateSelectInterview = () => {
  const setInterviewResponse = useSetRecoilState(InterviewResponseAtoms)
  const setInterviewResponseData = useSetRecoilState(InterviewResponseDataAtoms)

  const queryClient = useQueryClient()
  const { mutate: updateSelectInterviewMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_SELECT_INTERVIEW],
    mutationFn: (postData: InterviewPostRequest) => selectInterview(postData),
    onSuccess: (result) => {
      setInterviewResponse(true)
      const {
        enterprise_name,
        posting_title,
        interview_location,
        interview_date,
        applicant_name,
        applicant_phone,
        applicant_email,
        application_date,
      } = result
      setInterviewResponseData({
        enterprise_name,
        posting_title,
        interview_location,
        interview_date,
        applicant_name,
        applicant_phone,
        applicant_email,
        application_date,
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.INTERVIEW],
      })
    },
  })
  return { updateSelectInterviewMutate }
}

export default useUpdateSelectInterview
