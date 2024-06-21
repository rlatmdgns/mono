import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const deleteApplicantTag = async (applicant_id: string, tag_id: number) =>
  await http.delete(API_URL.APPLICANT_TAG(applicant_id), {
    tag_id: tag_id,
  })

export default deleteApplicantTag
