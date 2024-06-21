import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PostMemo } from '@/services/applicant/addApplicantMemo/addApplicantMemo.interface'

const addApplicantMemo = async (applicant_id: string, postData: PostMemo) => {
  return await http.post(API_URL.POST_APPLICANT_MEMO(applicant_id), {
    memo: postData,
  })
}

export default addApplicantMemo
