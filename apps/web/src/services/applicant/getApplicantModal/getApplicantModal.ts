import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { ApplicantModalResponse } from './getApplicantModal.interface'

const getApplicantModal = async (applicant_id: string) =>
  await http.get<ApplicantModalResponse>(API_URL.GET_APPLICANT_MODAL(applicant_id))

export default getApplicantModal
