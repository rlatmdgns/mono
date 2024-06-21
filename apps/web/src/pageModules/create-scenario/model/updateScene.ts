import { Scene, SequenceInterface } from '@/entities/onboarding/types'
import { Toast } from '@/shared/ui'
import { MODAL } from '@/shared/constants'

export const moveScene = (
  type: 'freshman' | 'manager',
  sceneIndex: number,
  original_d_day: number,
  move_d_day: number,
  getValues: any,
  setValue: any,
  closeModal: (key: string) => void,
) => {
  const sequences = getValues(type)
  const moveScenesWithSequence = sequences.find((sequence: SequenceInterface) => {
    return sequence.d_day === move_d_day
  })

  const scenesWithSequence = sequences.find((sequence: SequenceInterface) => {
    return sequence.d_day === original_d_day
  })

  if (original_d_day === move_d_day) {
    return Toast.error('동일한 시퀀스입니다.')
  }

  moveScenesWithSequence.scenes.push(scenesWithSequence.scenes[sceneIndex])

  scenesWithSequence.scenes.splice(sceneIndex, 1)
  setValue(type, [...sequences])
  Toast.success('씬이 이동되었습니다.')
  closeModal(MODAL.MOVE_SCENE)
}
