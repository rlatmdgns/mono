import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const filterCustomApplicantItems = (applicantItems?: RecruitApplicationItem[]) => {
  if (!applicantItems) return []
  return applicantItems.filter(
    (applicantItem: RecruitApplicationItem) =>
      applicantItem.key !== 'enterprise_required_personal_terms',
  )
}

export const getAgreeItem = (applicantItems?: PostingApplicationFormResponse) => {
  if (!applicantItems) return ''
  return applicantItems.terms?.enterprise_required_personal_terms || ''
}
