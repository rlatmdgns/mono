import { MODAL } from '@/shared/constants'
import dayjs from 'dayjs'
import { SequenceInterface } from '@/entities/onboarding/types'
import React from 'react'
import { SequenceOption } from '@/features/onboarding/type'

export const getModalKey = (type: string) => {
  switch (type) {
    case 'alarm':
      return MODAL.ADD_ALARM
    case 'content':
      return MODAL.ADD_CONTENT
    case 'survey':
      return MODAL.ONBOARDING_SURVEY
    default:
      return MODAL.ADD_EVALUATION
  }
}

export const getDdayText = (day: number) => {
  if (day === 0) return '입사일'
  if (day > 0) return `입사 ${Math.abs(day)}일 후`

  return `입사 ${Math.abs(day)}일 전`
}

export const getConvertDifferDay = (differDay: string, day: Date | null) => {
  if (!day || !differDay) return 0
  return dayjs(day).diff(differDay, 'day')
}

export const getSceneIcons = (type: string) => {
  if (!type) return

  switch (type) {
    case 'alarm':
      return `icon/notification-solid`
    case 'content':
      return 'icon/cancle-solid'
    case 'evaluation':
      return 'icon/document-line'
    default:
      return 'icon/notification-solid'
  }
}
export const getConvertOptions = (
  sequence: SequenceInterface[],
  label: React.ReactNode,
  d_day: number,
) => {
  const { defaultOptions, sequenceOptions } = sequence.reduce<{
    defaultOptions: SequenceOption[]
    sequenceOptions: SequenceOption[]
  }>(
    (acc, data) => {
      const option: SequenceOption = {
        value: data.d_day,
        label: getDdayText(data.d_day),
      }

      if (data.d_day === d_day) {
        acc.defaultOptions.push(option)
      }

      acc.sequenceOptions.push(option)
      return acc
    },
    { defaultOptions: [], sequenceOptions: [] },
  )

  return {
    defaultOptions,
    sequenceOptions: [
      ...sequenceOptions,
      {
        label: label,
        value: 'add_sequence',
      },
    ],
  }
}
