import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { UpdateEvaluationMembersRequest } from '@/services/evaluation/updateEvaluationMembers/updateEvaluationMembers.interface'

const updateEvaluationMembers = async (data: UpdateEvaluationMembersRequest) =>
  await http.patch(API_URL.UPDATE_EVALUATION_MEMBER(data.evaluation_id), data.data)

export default updateEvaluationMembers
