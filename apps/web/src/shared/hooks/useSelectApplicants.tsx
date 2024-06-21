import { useRecoilValue } from 'recoil'
import { applicantsAtom, selectApplicantCardsAtom } from '@/app/[locale]/postings/_recoil'
import { Applicant } from '@/interface/applicants'

export const useSelectApplicants = () => {
  const applicants = useRecoilValue(applicantsAtom)
  const selectApplicants = useRecoilValue(selectApplicantCardsAtom)

  const createApplicantOptions = (newApplicants: Applicant[]) => {
    if (!newApplicants) return []

    return newApplicants?.map((applicant) => {
      return {
        label: `${applicant.applicant_name} <${applicant.applicant_email}>`,
        value: Number(applicant.applicant_id),
        name: applicant.applicant_name,
      }
    })
  }

  const applicantOptions = createApplicantOptions(applicants)
  const selectApplicantOptions = createApplicantOptions(selectApplicants)

  return {
    applicantOptions,
    selectApplicantOptions,
  }
}
