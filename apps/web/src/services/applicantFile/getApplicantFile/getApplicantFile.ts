import { http } from '@/shared/lib/http'
import { ApplicantFileResponse } from '@/interface/applicantFile'
import { API_URL } from '@/shared/constants'

const getApplicantFile = async (fileId: number) =>
  await http.get<ApplicantFileResponse>(API_URL.APPLICANT_FILE(fileId))

export default getApplicantFile
