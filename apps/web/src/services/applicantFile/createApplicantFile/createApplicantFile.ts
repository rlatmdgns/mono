import { ApplicantFile } from './createApplicantFile.interface'
import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const createApplicantFile = async (data: ApplicantFile) => {
  const formData = new FormData()

  if (!data.request_body.applicant_file) return
  if (!data.request_body.is_public) return
  formData.append('applicant_file', data.request_body.applicant_file)
  formData.append('file_name', data.request_body.file_name)
  formData.append('is_public', data.request_body.is_public.toString())

  return await http.postForm(API_URL.CREATE_APPLICANT_FILE(data.applicant_id), formData)
}

export default createApplicantFile
