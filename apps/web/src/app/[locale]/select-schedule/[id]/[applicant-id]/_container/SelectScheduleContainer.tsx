'use client'

import * as Styles from './styles'
import SelectScheduleHeader from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleHeader'
import SelectScheduleBody from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleBody'
import SelectScheduleFooter from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_components/SelectScheduleFooter'
import { ScheduleHeaderInformation } from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_constant/SelectSchedule.constant'
import Link from 'next/link'
import {
  ApplicantIdAtom,
  InterviewCodeAtom,
  InterviewResponseAtoms,
} from '@/app/[locale]/select-schedule/[id]/[applicant-id]/_recoil/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { useGetSelectSchedule } from '@/app/[locale]/expire-schedule/[id]/[applicant-id]/_hooks/useGetSelectSchedule'
import Skeleton from 'react-loading-skeleton'
import { PAGE } from '@/shared/constants'

interface SelectScheduleContainerProps {
  applicantId: string
  interviewCode: string
}

const SelectScheduleContainer = ({ applicantId, interviewCode }: SelectScheduleContainerProps) => {
  const setInterviewCode = useSetRecoilState(InterviewCodeAtom)
  const setApplicantId = useSetRecoilState(ApplicantIdAtom)
  const interviewResponse = useRecoilValue(InterviewResponseAtoms)

  const { data, error } = useGetSelectSchedule(interviewCode, applicantId)

  let status: string = 'LOADING'
  if (data) status = 'SELECT'
  if (error) status = 'EXPIRE'
  if (interviewResponse) status = 'COMPLETE'

  const detailData = ScheduleHeaderInformation[status]

  for (const date in data?.interview_date) {
    const interview: { date: string; interview_list: string[] } = {
      date: '',
      interview_list: [],
    }
    interview.date = date
    data?.interview_date[date].map((element, index, date) => {
      interview.interview_list.push(`${date[0]} ~ ${date[1]}`)
    })
  }
  useEffect(() => {
    setInterviewCode(interviewCode)
    setApplicantId(applicantId)
  }, [])

  return (
    <Styles.SelectScheduleWrap>
      {status === 'LOADING' && (
        <Styles.Container>
          <Styles.SelectLoadingBox>
            <Skeleton width="100%" height="100%" />
          </Styles.SelectLoadingBox>
          <Styles.BackgroundText>
            본 메일은 발신전용이므로 회신이 되지 않습니다.
            <Styles.PoweredText>
              {' '}
              powered by <Link href={PAGE.POWERED_BY}>Stead</Link>
            </Styles.PoweredText>
          </Styles.BackgroundText>
        </Styles.Container>
      )}
      {status !== 'LOADING' && (
        <Styles.Container>
          <Styles.SelectScheduleBox $isComplete={interviewResponse}>
            <SelectScheduleHeader
              text={detailData.text}
              icon={detailData.icon}
              iconColor={detailData.iconColor}
            />
            <SelectScheduleBody status={status} interviewDate={data?.interview_date} />
            <SelectScheduleFooter buttonText={detailData.buttonText} status={status} />
          </Styles.SelectScheduleBox>
          <Styles.BackgroundText>
            본 메일은 발신전용이므로 회신이 되지 않습니다.
            <Styles.PoweredText>
              powered by <Link href={PAGE.POWERED_BY}>Stead</Link>
            </Styles.PoweredText>
          </Styles.BackgroundText>
        </Styles.Container>
      )}
    </Styles.SelectScheduleWrap>
  )
}

export default SelectScheduleContainer
