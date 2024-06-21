import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { getApplicantMemoResponse } from '@/services/applicant/getApplicantMemo/getApplicantMemo.interface'

const getApplicantMemo = async (applicant_id: string) =>
  await http.get<getApplicantMemoResponse>(API_URL.GET_APPLICANT_MEMOS(applicant_id))

export default getApplicantMemo
