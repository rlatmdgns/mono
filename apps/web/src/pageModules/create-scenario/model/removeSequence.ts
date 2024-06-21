import {
  FreshmanActionType,
  ManagerActionType,
  TargetType,
} from '@/pageModules/create-scenario/type'
import { Toast } from '@/shared/ui'

export const removeSequence = (target: any, action: any) => {
  const { sequence, index } = target
  const { update } = action
  const isSequenceInnerScenes = sequence.scenes.length > 0
  const removeSequenceApply = () => {
    if (!update) return

    update(index, {
      d_day: sequence.d_day,
      scenes: [],
      isAppend: false,
    })
    Toast.success(`시퀀스가 삭제되었습니다.`)
  }
  return {
    isSequenceInnerScenes,
    removeSequenceApply,
  }
}
