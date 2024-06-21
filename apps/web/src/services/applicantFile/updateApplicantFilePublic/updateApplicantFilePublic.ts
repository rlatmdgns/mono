import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateApplicantFilePublicRequest } from '@/services/applicantFile/updateApplicantFilePublic/updateApplicantFilePublic.interface'

const updateApplicantFilePublic = async (file_id: string, form: UpdateApplicantFilePublicRequest) =>
  await http.patch(API_URL.UPDATE_APPLICANT_FILE_PUBLIC(file_id), form)

export default updateApplicantFilePublic
