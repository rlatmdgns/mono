import getApplicantModal from '@/services/applicant/getApplicantModal'
import { QUERY_KEY } from '@/shared/constants'
import { ApplicantModalResponse } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import { useQuery } from '@tanstack/react-query'

const useApplicantModal = (applicant_id: string) => {
  const { data, isLoading } = useQuery<ApplicantModalResponse>({
    queryKey: [QUERY_KEY.APPLICANT_MODAL, applicant_id],
    queryFn: () => getApplicantModal(applicant_id),
    enabled: !!applicant_id,
  })
  return { data, isLoading }
}

export default useApplicantModal
