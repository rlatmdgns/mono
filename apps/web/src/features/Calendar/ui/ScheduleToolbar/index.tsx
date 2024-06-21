import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { NavigateAction, ToolbarProps } from 'react-big-calendar'
import { getDayFormat } from '@/shared/lib/utils'
import { useSetRecoilState } from 'recoil'
import { DateAtom } from '../../model/atom'
import { useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import dayjs from 'dayjs'

export const ScheduleToolbar = (props: ToolbarProps) => {
  const currentLocale = useLocale()
  const date = props.date
  const setDate = useSetRecoilState(DateAtom)
  const $t = useTranslations()

  const getLocaleYear = () => {
    return currentLocale === 'ko'
      ? `${getDayFormat(date, 'YYYY')}년`
      : `${getDayFormat(date, 'YYYY')}`
  }

  const getLocaleMonth = () => {
    return currentLocale === 'ko'
      ? `${getDayFormat(date, 'MM')}월`
      : dayjs(date).toDate().toLocaleString(currentLocale, { month: 'short' })
  }

  const currentYear = getLocaleYear()
  const currentMonth = getLocaleMonth()

  const onClick = (action: NavigateAction) => {
    props.onNavigate(action)
  }

  useEffect(() => {
    setDate(props.date)
  }, [date])

  return (
    <Styles.ToolbarWrap>
      <Styles.ToolbarDate>
        <Styles.ToolbarText>{currentYear}</Styles.ToolbarText>
        <Styles.ToolbarText>{currentMonth}</Styles.ToolbarText>
      </Styles.ToolbarDate>
      <Styles.MonthArrowButtons>
        <Styles.MonthButton onClick={() => onClick('PREV')} aria-label={$t('common.prev_month')}>
          <Icon icon="icon/left-line" />
        </Styles.MonthButton>
        <Styles.TodayButtonWrap>
          <Button
            state="standard"
            style="mono"
            onClick={() => onClick('TODAY')}
            text={$t('common.today')}
          ></Button>
        </Styles.TodayButtonWrap>
        <Styles.MonthButton onClick={() => onClick('NEXT')} aria-label={$t('common.next_month')}>
          <Icon icon="icon/right-line" />
        </Styles.MonthButton>
      </Styles.MonthArrowButtons>
    </Styles.ToolbarWrap>
  )
}
