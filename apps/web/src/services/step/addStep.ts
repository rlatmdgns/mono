import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const addStep = async (posting_id: string) => {
  return await http.post(API_URL.ADD_POSTING_STEP(posting_id), {
    step_name: '제목 없음',
  })
}

export default addStep
