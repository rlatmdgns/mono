import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateApplicantTagRequest } from '@/services/applicantTag/updateApplicantTag/updateApplicantTag.interface'

const updateApplicantTag = async (applicant_id: string, data: UpdateApplicantTagRequest) =>
  await http.put(API_URL.UPDATE_APPLICANT_TAG(applicant_id), data)

export default updateApplicantTag
