import * as Styles from './styles'
import dayjs from 'dayjs'
import { Button } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { NavigateAction, ToolbarProps } from 'react-big-calendar'
import { getDayFormat } from '@/shared/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import { today } from '@/shared/lib'

export const ScheduleToolbar = (props: ToolbarProps) => {
  const currentLocale = useLocale()

  const currentWeek = getDayFormat(dayjs(props.date).weekday(0).toDate(), 'YYYYMMDD')
  const currentYear = `${getDayFormat(props.date, 'YYYY')}${currentLocale === 'ko' ? '년' : '.'}`
  const currentMonth = `${getDayFormat(props.date, 'MM')}${currentLocale === 'ko' ? '월' : ''}`
  const currentDate = `${getDayFormat(props.date, 'DD')}${currentLocale === 'ko' ? '일' : ''}`

  const todayWeek = getDayFormat(dayjs().weekday(0).toDate(), 'YYYYMMDD')

  const isPrevDisabledCondition =
    props.view === 'week'
      ? currentWeek === todayWeek
      : getDayFormat(props.date, 'YYYYMMDD') === today

  const $t = useTranslations('common')
  const onClick = (action: NavigateAction) => {
    props.onNavigate(action)
  }

  return (
    <Styles.ToolbarWrap>
      <Styles.ToolbarTitle>
        <Styles.ToolbarText>{currentYear}</Styles.ToolbarText>
        <Styles.ToolbarText>{currentMonth}</Styles.ToolbarText>
        {props.view === 'day' && currentDate}
      </Styles.ToolbarTitle>
      <Styles.MonthButtons>
        <Styles.MonthArrowButtons>
          <Styles.MonthButton
            onClick={() => onClick('PREV')}
            aria-label={$t('prev_week')}
            disabled={isPrevDisabledCondition}
          >
            <Icon icon="icon/left-line" />
          </Styles.MonthButton>
          <Styles.TodayButtonWrapper>
            <Button
              state="standard"
              style="mono"
              size={'sm'}
              onClick={() => onClick('TODAY')}
              text={$t('today')}
            ></Button>
          </Styles.TodayButtonWrapper>
          <Styles.MonthButton onClick={() => onClick('NEXT')} aria-label={$t('next_week')}>
            <Icon icon="icon/right-line" />
          </Styles.MonthButton>
        </Styles.MonthArrowButtons>
      </Styles.MonthButtons>
    </Styles.ToolbarWrap>
  )
}
