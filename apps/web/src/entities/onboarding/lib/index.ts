import { FinalStageApplicant, SequenceInterface } from '@/entities/onboarding/types'
import { DEFAULT_SCENARIO } from '@/entities/onboarding/constants'

export const isDatePassed = (date: string): boolean => {
  const inputDate = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return inputDate < today
}

export const isDateToday = (date: string): boolean => {
  const today = new Date()
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  return date === todayString
}

export const convertDate = (date: string) => {
  const isToday = isDateToday(date)
  if (isToday) return '오늘'

  const [, month, day] = date.split('-')
  const monthNames = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ]
  const monthName = monthNames[parseInt(month, 10) - 1]
  return `${monthName} ${parseInt(day, 10)}일`
}

export const getConvertSequence = (response: any) => {
  const emptySequence = {
    scenes: [],
    isAppend: false,
  }
  const sequences: any = {
    freshman: [],
    manager: [],
  }

  if (response.freshman.length === 0 && response.manager.length > 0) {
    sequences.manager = response.manager.map((item: any) => {
      sequences.freshman.push({
        d_day: item.d_day,
        ...emptySequence,
      })
      return {
        d_day: item.d_day,
        id: item.id,
        scenario_id: item.scenario_id,
        scenes: item.sequence_data,
        isAppend: true,
      }
    })
  }

  if (response.manager.length === 0 && response.freshman.length > 0) {
    sequences.freshman = response.freshman.map((item: any) => {
      sequences.manager.push({
        d_day: item.d_day,
        ...emptySequence,
      })
      return {
        d_day: item.d_day,
        id: item.id,
        scenario_id: item.scenario_id,
        scenes: item.sequence_data,
        isAppend: true,
      }
    })
  }

  if (response.manager.length > 0 && response.freshman.length > 0) {
    const mergedSequence = response.freshman
      .concat(response.manager)
      .sort((a: any, b: any) => a.d_day - b.d_day)

    mergedSequence.forEach((item: any) => {
      const targetArray = response.freshman.includes(item) ? sequences.freshman : sequences.manager

      targetArray.push({
        d_day: item.d_day,
        id: item.id,
        scenario_id: item.scenario_id,
        scenes: item.sequence_data,
        isAppend: true,
      })

      setEmptySequence(response, 'freshman', item, emptySequence)
      setEmptySequence(response, 'manager', item, emptySequence)
    })
  }

  if (response.manager.length === 0 && response.freshman.length === 0) {
    sequences.freshman = DEFAULT_SCENARIO.freshman
    sequences.manager = DEFAULT_SCENARIO.manager
  }

  return sequences
}

const setEmptySequence = (
  response: any,
  type: 'freshman' | 'manager',
  item: SequenceInterface,
  emptySequence: any,
) => {
  if (!response[type].includes(item)) {
    response[type].push({
      d_day: item.d_day,
      ...emptySequence,
    })
  }
}

export const addFinalStageApplicantDate = (applicant: FinalStageApplicant) => {
  return {
    ...applicant,
    pass_date: applicant.pass_date,
    employment_date: applicant.employment_date,
  }
}
