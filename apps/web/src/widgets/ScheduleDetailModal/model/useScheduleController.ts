import { useState } from 'react'

interface ScheduleControllerProps {
  currentIdx: number
  scheduleIds: string[]
}

export const useScheduleController = ({ currentIdx, scheduleIds }: ScheduleControllerProps) => {
  const [scheduleIdx, setScheduleIdx] = useState(currentIdx)
  const [currentScheduleId, setCurrentScheduleId] = useState(scheduleIds[scheduleIdx])

  const lastIdx: number = scheduleIds.length - 1
  const isPrevDisabledStatus = scheduleIdx <= 0
  const isNextDisabledStatus = scheduleIdx === lastIdx

  const handlePrevDetail = () => {
    if (isPrevDisabledStatus) return
    const newScheduleIdx = scheduleIdx - 1
    const currentScheduleId = scheduleIds[newScheduleIdx]
    setScheduleIdx(newScheduleIdx)
    setCurrentScheduleId(currentScheduleId)
  }

  const handleNextDetail = () => {
    if (isNextDisabledStatus) return
    const newScheduleIdx = scheduleIdx + 1
    const currentScheduleId = scheduleIds[newScheduleIdx]
    setScheduleIdx(newScheduleIdx)
    setCurrentScheduleId(currentScheduleId)
  }

  return {
    currentScheduleId,
    isPrevDisabledStatus,
    isNextDisabledStatus,
    handlePrevDetail,
    handleNextDetail,
  }
}
