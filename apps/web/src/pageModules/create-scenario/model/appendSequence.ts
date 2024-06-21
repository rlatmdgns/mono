import { findHasSequence, getSequenceCheckWithAuthority } from '@/widgets/onboarding/model'
import { getDdayText } from '@/features/onboarding/lib'
import { Toast } from '@/shared/ui'
import {
  SequenceFieldArray,
  FreshmanActionType,
  ManagerActionType,
} from '@/pageModules/create-scenario/type'

export const appendValidWithAction = (
  authority: string,
  d_day: number,
  sequences: any,
  action: any,
) => {
  const isHasManagerSequence = findHasSequence(sequences.manager, d_day)
  const isHasFreshmanSequence = findHasSequence(sequences.freshman, d_day)
  const isManagerValid = getSequenceCheckWithAuthority(isHasManagerSequence.status)
  const isFreshmanValid = getSequenceCheckWithAuthority(isHasFreshmanSequence.status)
  const appendData = {
    d_day,
    scenes: [],
    isAppend: true,
  }

  if (
    !action.freshman.update ||
    !action.freshman.append ||
    !action.manager.update ||
    !action.manager.append
  )
    return

  const { update: freshmanUpdate, append: freshmanAppend } = action.freshman
  const { update: managerUpdate, append: managerAppend } = action.manager

  let result = {
    status: true,
    text: '',
  }

  if (!isManagerValid.status && isFreshmanValid.status) {
    freshmanUpdate(isHasManagerSequence.index, { ...appendData })
    result = {
      status: false,
      text: `${getDdayText(d_day)} : 신규 입사자 시퀀스가 추가되었습니다.`,
    }
    return Toast.success(result.text)
  }

  if (isManagerValid.status && !isFreshmanValid.status) {
    managerUpdate(isHasFreshmanSequence.index, { ...appendData })
    result = {
      status: false,
      text: `${getDdayText(d_day)} : 온보딩 담당자 시퀀스가 추가되었습니다.`,
    }
    return Toast.success(result.text)
  }

  if (!isManagerValid.status && !isFreshmanValid.status) {
    result = {
      status: false,
      text: `${getDdayText(d_day)} : 온보딩 담당자, 신규 입사자 시퀀스가 중복됩니다.`,
    }
    return Toast.error(result.text)
  }

  if (authority === 'all') {
    freshmanAppend({ ...appendData })
    managerAppend({ ...appendData })
    result = {
      status: true,
      text: `${getDdayText(d_day)} : 전체 시퀀스가 추가되었습니다.`,
    }
  }

  if (authority === 'manager') {
    freshmanAppend({
      ...appendData,
      isAppend: false,
    })
    managerAppend({ ...appendData })
    result = {
      status: true,
      text: `${getDdayText(d_day)} : 온보딩 담장자 시퀀스가 추가되었습니다.`,
    }
  }

  if (authority === 'freshman') {
    freshmanAppend({
      ...appendData,
    })
    managerAppend({
      ...appendData,
      isAppend: false,
    })
    result = {
      status: true,
      text: `${getDdayText(d_day)} : 신규 입사자 시퀀스가 추가되었습니다.`,
    }
  }

  return Toast.success(result.text)
}
