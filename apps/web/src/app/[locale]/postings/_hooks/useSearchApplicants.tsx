import { useMutation } from '@tanstack/react-query'
import { MUTATION_KEY } from '@/shared/constants'
import { useSetRecoilState } from 'recoil'
import { applicantsAtom, stepsAtom } from '@/app/[locale]/postings/_recoil'
import getApplicants from '@/services/applicant/getApplicants'
import { ApplicantsRequest } from '@/interface/applicants'

const useSearchApplicants = (postingId: string) => {
  const setApplicants = useSetRecoilState(applicantsAtom)
  const setSteps = useSetRecoilState(stepsAtom)
  const { mutate: searchApplicantsMutate } = useMutation({
    mutationKey: [MUTATION_KEY.SEARCH_APPLICANTS],
    mutationFn: (data: ApplicantsRequest) => getApplicants(postingId, data),
    onSuccess: (result) => {
      setApplicants(result.applicant_list)
      setSteps(result.posting_step)
    },
  })
  return {
    searchApplicantsMutate,
  }
}

export default useSearchApplicants
