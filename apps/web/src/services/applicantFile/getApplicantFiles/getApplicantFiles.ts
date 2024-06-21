import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantFilesResponse } from '@/interface/applicantFile'

const getApplicantFiles = async (applicantId: string) =>
  await http.get<ApplicantFilesResponse>(API_URL.APPLICANT_FILES(applicantId))

export default getApplicantFiles
