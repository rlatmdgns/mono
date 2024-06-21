import { SequenceField } from '@/pageModules/create-scenario/type'
import { findHasSequence } from '@/widgets/onboarding/model'
import { Toast } from '@/shared/ui'
import { getDdayText } from '@/features/onboarding/lib'

export const updateValidWithAction = (
  type: 'freshman' | 'manager',
  index: number,
  d_day: number,
  sequences: any,
  action: any,
  methods: any,
) => {
  const authorityText = type === 'manager' ? '온보딩 매니저' : '입사자'
  const differType = type === 'manager' ? 'freshman' : 'manager'
  const appendData = {
    d_day,
    scenes: [],
    isAppend: true,
  }
  const isHasSequence = findHasSequence(sequences[type], d_day)
  const isHasDifferSequence = findHasSequence(sequences[differType], d_day)
  const isSameDday = sequences[type][index].d_day === d_day
  const currentAction = action[type]
  const differAction = action[differType]
  const moveSequenceIndex = sequences[type].findIndex(
    (sequence: SequenceField) => sequence.d_day === d_day,
  )
  const scenes = [...sequences[type][index]['scenes']]

  if (!currentAction.update || !currentAction.append || !differAction.append) return

  if (isHasSequence.status && isSameDday) {
    return Toast.error('동일한 시퀀스입니다.')
  }

  if (isHasSequence.status && !isSameDday) {
    const moveScenes = [...sequences[type][moveSequenceIndex]['scenes']]
    currentAction.update(index, {
      ...sequences[type][index],
      scenes: [],
      isAppend: false,
    })

    currentAction.update(isHasDifferSequence.index, {
      ...sequences[type][index],
      d_day,
      scenes: [],
      isAppend: true,
    })

    methods.setValue(`${type}.${isHasDifferSequence.index}.scenes`, [...scenes, ...moveScenes])

    return Toast.success(`${authorityText} 시퀀스가 ${getDdayText(d_day)}로 이동되었습니다.`)
  }

  if (!isHasSequence.status && !isHasDifferSequence.status) {
    currentAction.update(index, {
      ...sequences[type][index],
      scenes: [],
      isAppend: false,
    })

    currentAction.append({
      ...appendData,
      scenes: [...scenes],
      isAppend: true,
    })

    differAction.append({
      ...appendData,
      scenes: [],
      isAppend: false,
    })

    return Toast.success(`${authorityText} 시퀀스가 ${getDdayText(d_day)}로 이동되었습니다.`)
  }

  if (!isHasSequence.status && isHasDifferSequence.status) {
    currentAction.update(index, {
      ...sequences[type][index],
      scenes: [],
      isAppend: false,
    })

    currentAction.update(isHasDifferSequence.index, {
      ...sequences[type][index],
      d_day,
      scenes: [...scenes],
      isAppend: true,
    })

    return Toast.success(`${authorityText} 시퀀스가 ${getDdayText(d_day)}로 이동되었습니다.`)
  }
}
