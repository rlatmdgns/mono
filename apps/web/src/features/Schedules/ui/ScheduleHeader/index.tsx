import * as Styles from './styles'
import { Select } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import { useScheduleHeaderConstant } from '@/features/Schedules/ui/ScheduleHeader/hooks/useScheduleHeaderConstant'

interface ScheduleHeaderProps {
  interviewTime: number
  intervalTime: number
  view: string
  onChangeStep: (value: number) => void
  onChangeInterval: (value: number) => void
  onChangeView: (value: string) => void
}

export const ScheduleHeader = ({
  interviewTime,
  intervalTime,
  view,
  onChangeStep,
  onChangeInterval,
  onChangeView,
}: ScheduleHeaderProps) => {
  const { INTERVIEW_TIME, SCHEDULE_VIEWS } = useScheduleHeaderConstant()

  const initInterviewTime = INTERVIEW_TIME.TIME.find((time) => time.value === interviewTime)
  const initIntervalTime = INTERVIEW_TIME.INTERVAL.find((time) => time.value === intervalTime)
  const initView = SCHEDULE_VIEWS.find((schedule_view) => schedule_view.value === view)
  const $t = useTranslations('interview_request')
  return (
    <Styles.Header>
      <Styles.Wrapper>
        <Styles.SelectWrap>
          <Styles.Text>{$t('interview_time')}</Styles.Text>
          <Select
            options={INTERVIEW_TIME.TIME}
            value={initInterviewTime}
            onChange={(option) => onChangeStep(option.value)}
          />
        </Styles.SelectWrap>
        <Styles.SelectWrap>
          <Styles.Text>{$t('interview_interval_time')}</Styles.Text>
          <Select
            options={INTERVIEW_TIME.INTERVAL}
            value={initIntervalTime}
            onChange={(option) => onChangeInterval(option.value)}
          />
        </Styles.SelectWrap>
      </Styles.Wrapper>
      <Styles.Wrapper>
        <Styles.SelectWrap>
          <Select
            options={SCHEDULE_VIEWS}
            value={initView}
            onChange={(option) => onChangeView(option.value)}
          />
        </Styles.SelectWrap>
      </Styles.Wrapper>
    </Styles.Header>
  )
}
