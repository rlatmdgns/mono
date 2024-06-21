import * as Styles from './styles'

import { Badge, Location } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import { ScheduleDetailAtom, ScheduleModify } from '@/features/InterviewSchedule'
import {
  ScheduleApplicantList,
  ScheduleAttendantList,
  ScheduleTime,
} from '@/entities/InterviewSchedule'

import { getDayFormat } from '@/shared/lib/utils'

import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { useLocale, useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface DetailContentProps {
  handleCloseModal: () => void
}

export const ScheduleDetailContent = ({ handleCloseModal }: DetailContentProps) => {
  const interviewDetail = useRecoilValue(ScheduleDetailAtom)
  const currentLocale = useLocale()
  const $t = useTranslations()

  if (!interviewDetail) return null
  const {
    posting_title,
    schedule_start,
    schedule_end,
    schedule_title,
    interview_state,
    schedule_address,
    schedule_detail_address,
    schedule_applicant,
    schedule_attendant,
    posting_id,
    before_the_change,
  } = interviewDetail

  const getInterviewLocaleTime = () => {
    if (currentLocale !== 'ko') {
      return `${getDayFormat(
        schedule_start,
        'YY.MM.DD (dd) a h:mm',
      )} ~ ${getDayFormat(schedule_end, 'a h:mm')}`
    }

    return `${getDayFormat(
      schedule_start,
      'YY년 MM월 DD일 (dd) a h:mm',
    )} ~ ${getDayFormat(schedule_end, 'a h:mm')}`
  }

  const interview_time = getInterviewLocaleTime()

  return (
    <Styles.DetailContentWrapper>
      <ScheduleModify interviewState={interview_state} handleCloseModal={handleCloseModal} />
      <Styles.DetailContentHeader>
        <Styles.DetailContentTitle>{schedule_title}</Styles.DetailContentTitle>
        {interview_state === 'canceled' && <Badge text={$t('interview.cancel')} type={'gray'} />}
      </Styles.DetailContentHeader>
      <Styles.TopArea>
        <ScheduleTime interviewTime={interview_time} beforeTheChange={before_the_change} />
        <Location
          scheduleAddress={schedule_address}
          scheduleDetailAddress={schedule_detail_address}
        />
      </Styles.TopArea>
      <Styles.AttendWrap>
        <Styles.InterviewTitle>{$t('common.applicant')}</Styles.InterviewTitle>
        <ScheduleApplicantList scheduleApplicants={schedule_applicant} />
      </Styles.AttendWrap>
      <Styles.AttendWrap>
        <Styles.InterviewTitle>{$t('common.interviewer')}</Styles.InterviewTitle>
        <ScheduleAttendantList scheduleAttendants={schedule_attendant} />
      </Styles.AttendWrap>
      <Styles.AttendWrap>
        <Styles.InterviewTitle>{$t('common.announcement')}</Styles.InterviewTitle>
        <Styles.PostingButton as={'div'}>
          <Link href={`${PAGE.POSTINGS_DETAIL(posting_id)}`} prefetch={false}>
            <Icon icon="icon/recruitment-solid" color="neutralGray500" />
            <Styles.LinkButtonText>{posting_title}</Styles.LinkButtonText>
            <Icon icon="icon/right-line" color="neutralGray500" />
          </Link>
        </Styles.PostingButton>
      </Styles.AttendWrap>
    </Styles.DetailContentWrapper>
  )
}
