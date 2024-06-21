import { ApplicantEvaluationTableMember } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'

export const convertToAvatarMultiple = (members: ApplicantEvaluationTableMember[]) => {
  return members.map((member) => ({
    identification: member.identification,
    user_name: member.user_name,
    user_profile: member.user_profile,
    disabled: !member.is_member_evaluation_submitted,
  }))
}
