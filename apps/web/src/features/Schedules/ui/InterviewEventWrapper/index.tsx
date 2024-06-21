import React, { useEffect, useRef } from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { CurrentScheduleAtom } from '@/modals/ReqeustInterviewModal/recoil/atom'
import * as Styles from './styles'
import { scheduleDayJs } from '@/shared/lib'
import { Tooltip } from '@/shared/ui'

interface InterviewEventWrapperProps {
  props: any
  isSoloApplicants: boolean
}

export const InterviewEventWrapper = ({ props, isSoloApplicants }: InterviewEventWrapperProps) => {
  const setCurrentSchedule = useSetRecoilState(CurrentScheduleAtom)
  const initCurrentSchedule = useResetRecoilState(CurrentScheduleAtom)

  const handleCurrentScheduleSave = () => setCurrentSchedule(props.children.props.event.id)
  const handleInitCurrentSchedule = () => initCurrentSchedule()

  const isScheduled = props.children.props.event.isScheduled
  const isTodayBeforeDay = scheduleDayJs(props.event.end).isBefore()
  const isGoogleSchedule = props.children.props.event.isGoogleSchedule

  const scheduleWrapper = useRef() as React.MutableRefObject<HTMLDivElement>
  const googleScheduleWrapper = useRef() as React.MutableRefObject<HTMLDivElement>
  const summary = useRef() as React.MutableRefObject<HTMLDivElement>
  const info = useRef() as React.MutableRefObject<HTMLDivElement>
  const isGoogleScheduleOver = useRef(false)
  const isScheduleOver = useRef(false)

  const getScheduleHeight = () => {
    if (!scheduleWrapper.current) return
    const scheduleEventButton = scheduleWrapper.current.children[0]
    const scheduleEventLabel = scheduleEventButton.children[0].children[1]

    if (scheduleEventButton?.clientHeight >= scheduleEventLabel?.clientHeight) return
    return (isScheduleOver.current = true)
  }

  const getGoogleScheduleHeight = () => {
    if (!(googleScheduleWrapper.current && summary.current && info.current)) return
    const googleScheduleWrapperHeight = googleScheduleWrapper.current.clientHeight
    const summaryHeight = summary.current.clientHeight
    const infoHeight = info.current.clientHeight

    if (googleScheduleWrapperHeight >= summaryHeight + infoHeight) return
    return (isGoogleScheduleOver.current = true)
  }

  useEffect(() => {
    getScheduleHeight()
    getGoogleScheduleHeight()
  }, [])

  if (isScheduled && isTodayBeforeDay) return null

  if (isGoogleSchedule) {
    const scheduleData = props.children.props.event
    const title = scheduleData.summary
    const user = scheduleData.interviewers
    const startTime = scheduleDayJs(scheduleData.start).format('a h:mm')
    const endTime = scheduleDayJs(scheduleData.end).format('a h:mm')
    const tootipText = `${title} · ${startTime} ~ ${endTime} · ${user.user_name} ${!user.department ? '' : ` · ${user.department}`} ${!user.position ? '' : ` · ${user.position}`}`

    return (
      <Styles.GoogleSchedule
        $style={props.style}
        ref={googleScheduleWrapper}
        $isGoogleScheduleOver={isGoogleScheduleOver.current}
      >
        <Tooltip text={tootipText}>
          <div className={'google-schedule'}>
            <Styles.Summary ref={summary} $isGoogleScheduleOver={isGoogleScheduleOver.current}>
              {!title ? '(제목 없음)' : title}
            </Styles.Summary>
            <Styles.Info ref={info}>
              <Styles.Date>{`${startTime} ~ ${endTime}`}</Styles.Date>
              <Styles.User>{user.user_name}</Styles.User>
            </Styles.Info>
          </div>
        </Tooltip>
      </Styles.GoogleSchedule>
    )
  }

  return (
    <>
      <Styles.Schedule
        onMouseOver={handleCurrentScheduleSave}
        onMouseLeave={handleInitCurrentSchedule}
        $style={props.style}
        $isScheduled={isScheduled}
        $isSoloApplicants={isSoloApplicants}
        $isScheduleOver={isScheduleOver.current}
        ref={scheduleWrapper}
      >
        {props.children}
      </Styles.Schedule>
    </>
  )
}

export default InterviewEventWrapper
