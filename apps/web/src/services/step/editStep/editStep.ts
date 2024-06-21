import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { EditStepRequest } from '@/services/step/editStep/editStep.interface'

const editStep = async (data: EditStepRequest) => {
  return await http.put(API_URL.EDIT_POSTING_STEP(data.postingId, data.stepId), {
    step_name: data.title,
  })
}

export default editStep
