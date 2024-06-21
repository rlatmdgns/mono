import { SequenceInterface } from '@/entities/onboarding/types'

export const findHasSequence = (fields: SequenceInterface[], d_day: number) => {
  const status = fields.some((field: SequenceInterface) => field.d_day === d_day && field.isAppend)
  const index = fields.findIndex(
    (field: SequenceInterface) => field.d_day === d_day && field.isAppend,
  )
  return {
    status,
    index,
  }
}

export const getSequenceCheckWithAuthority = (isSequenceWithAuthority: boolean) => {
  if (isSequenceWithAuthority) {
    return {
      text: `설정된 일정에 시퀀스가 존재합니다.`,
      status: false,
    }
  }

  return {
    text: '시퀀스가 적용되었습니다.',
    status: true,
  }
}
