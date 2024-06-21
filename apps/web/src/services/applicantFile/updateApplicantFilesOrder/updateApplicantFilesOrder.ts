import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateApplicantFilesOrderRequest } from './updateApplicantFilesOrder.interface'

const updateApplicantFilesOrder = async (form: UpdateApplicantFilesOrderRequest) =>
  await http.patch(API_URL.UPDATE_APPLICANT_FILES_ORDER(form.file_id), form.body)

export default updateApplicantFilesOrder
