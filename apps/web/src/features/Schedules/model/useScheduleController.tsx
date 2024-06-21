import { useState } from 'react'

export const useScheduleController = () => {
  const [interviewTime, setInterviewTime] = useState(60)
  const [intervalTime, setIntervalTime] = useState(0)
  const handleChangeStep = (value: number) => {
    setInterviewTime(value)
  }

  const handleChangeInterval = (value: number) => {
    setIntervalTime(value)
  }
  return {
    interviewTime,
    intervalTime,
    handleChangeStep,
    handleChangeInterval,
  }
}
