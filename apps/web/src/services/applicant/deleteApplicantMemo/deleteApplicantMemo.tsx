import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const deleteApplicantMemo = async (applicant_id: string, memo_id: string) => {
  return await http.delete(API_URL.MODIFY_APPLICANT_MEMO(applicant_id, memo_id))
}

export default deleteApplicantMemo
