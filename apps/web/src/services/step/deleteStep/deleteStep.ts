import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { DeleteStepRequest } from '@/services/step/deleteStep/deleteStep.interface'

const deleteStep = async (data: DeleteStepRequest) => {
  return await http.delete(API_URL.DELETE_POSTING_STEP(data.postingId, data.stepId))
}

export default deleteStep
