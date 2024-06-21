'use client'
import * as Styles from './styles'
import Link from 'next/link'
import RefuseScheduleHeader from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleHeader'
import RefuseScheduleBody from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleBody'
import RefuseScheduleFooter from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_components/RefuseScheduleFooter'
import { useSetRecoilState } from 'recoil'
import {
  RefuseApplicantIdAtom,
  RefuseInterviewCodeAtom,
} from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_recoil/atom'
import { useEffect } from 'react'
import { useGetSelectSchedule } from '@/app/[locale]/expire-schedule/[id]/[applicant-id]/_hooks/useGetSelectSchedule'
import RefuseScheduleLoading from '@/app/[locale]/refuse-interview/[id]/[applicant-id]/_container/RefuseScheduleLoading'
import { PAGE } from '@/shared/constants'

interface RefuseScheduleContainerProps {
  interviewCode: string
  applicantId: string
}

const RefuseScheduleContainer = ({ interviewCode, applicantId }: RefuseScheduleContainerProps) => {
  const setInterviewCode = useSetRecoilState(RefuseInterviewCodeAtom)
  const setApplicantId = useSetRecoilState(RefuseApplicantIdAtom)

  const { data, error } = useGetSelectSchedule(interviewCode, applicantId)

  const status = !error
  const isDataEmpty = !data

  useEffect(() => {
    setInterviewCode(interviewCode)
    setApplicantId(applicantId)
  }, [])

  if (error) {
    return (
      <Styles.RefuseScheduleWrap>
        <Styles.RefuseScheduleBox>
          <RefuseScheduleHeader status={status} />
        </Styles.RefuseScheduleBox>
        <Styles.BackgroundText>
          본 메일은 발신전용이므로 회신이 되지 않습니다.
          <Styles.PoweredText>
            {' '}
            powered by <Link href={PAGE.POWERED_BY}>Stead</Link>
          </Styles.PoweredText>
        </Styles.BackgroundText>
      </Styles.RefuseScheduleWrap>
    )
  }

  if (isDataEmpty) return <RefuseScheduleLoading />

  return (
    <Styles.RefuseScheduleWrap>
      <Styles.RefuseScheduleBox>
        <RefuseScheduleHeader status={status} />
        <RefuseScheduleBody status={status} />
        <RefuseScheduleFooter status={status} />
      </Styles.RefuseScheduleBox>
      <Styles.BackgroundText>
        본 메일은 발신전용이므로 회신이 되지 않습니다.
        <Styles.PoweredText>
          {' '}
          powered by <Link href={PAGE.POWERED_BY}>Stead</Link>
        </Styles.PoweredText>
      </Styles.BackgroundText>
    </Styles.RefuseScheduleWrap>
  )
}

export default RefuseScheduleContainer
