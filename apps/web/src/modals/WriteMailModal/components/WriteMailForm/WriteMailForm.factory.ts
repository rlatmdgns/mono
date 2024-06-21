import { Template } from '@/interface/template'
import { Applicant } from '@/interface/applicants'
import { PostingMember } from '@/interface/posting'

export const createTemplateOptions = (templates?: Template[]) => {
  if (!templates) return []

  return templates?.map((template) => ({
    value: template.template_id,
    label: template.template_title,
  }))
}

export const createRecipientOptions = (applicants?: Applicant[]) => {
  if (!applicants) return []

  return applicants?.map((applicant) => ({
    value: applicant.applicant_id,
    label: `${applicant.applicant_name} <${applicant.applicant_email}>`,
    name: applicant.applicant_name,
  }))
}

export const createCarbonCopyOptions = (members?: PostingMember[]) => {
  if (!members) return []

  return members?.map((member) => ({
    value: member.user_email,
    label: member.user_name,
    image: member.user_profile,
  }))
}
