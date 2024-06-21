import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateApplicantFileNameRequest } from '@/services/applicantFile/updateApplicantFileName/updateApplicantFileName.interface'

const updateApplicantFileName = async (file_id: string, data: UpdateApplicantFileNameRequest) =>
  await http.patch(API_URL.UPDATE_APPLICANT_FILE_NAME(file_id), data)

export default updateApplicantFileName
