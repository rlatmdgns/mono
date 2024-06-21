import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { UpdateApplicantLocationRequest } from '@/services/applicant/updateApplicantLocation/updateApplicantLocation.interface'

const updateApplicantLocation = async (
  posting_id: string,
  data: UpdateApplicantLocationRequest,
) => {
  return await http.post(API_URL.UPDATE_APPLICANT_LOCATION(posting_id), data)
}

export default updateApplicantLocation
