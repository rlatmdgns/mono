import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { UpdateApplicantLocationInModalRequest } from './updateApplicantLocationInModal.interface'

const updateApplicantLocationInModal = async (
  posting_id: string,
  data: UpdateApplicantLocationInModalRequest,
) => {
  return await http.put(API_URL.UPDATE_APPLICANT_MODAL_LOCATION(posting_id), data)
}

export default updateApplicantLocationInModal
