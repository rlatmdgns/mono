import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { PostMemo } from '@/services/applicant/addApplicantMemo/addApplicantMemo.interface'

const updateApplicantMemo = async (applicant_id: string, memo_id: string, postData: PostMemo) => {
  return await http.patch(API_URL.MODIFY_APPLICANT_MEMO(applicant_id, memo_id), {
    memo: postData,
  })
}

export default updateApplicantMemo
