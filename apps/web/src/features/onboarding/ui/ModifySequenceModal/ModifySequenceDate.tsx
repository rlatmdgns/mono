import { Controller, useFormContext } from 'react-hook-form'
import { Icon } from '@repo/ui'
import {
  dateWrapper,
  formWrapper,
  labelWrapper,
  required,
  sectionTitle,
  sectionWrapper,
} from '@/features/onboarding/ui/AddSequenceModal/styles.css'
import DatePicker from 'react-datepicker'
import React from 'react'
import { useLocale } from 'next-intl'
import { enUS, ko } from 'date-fns/locale'
import dayjs from 'dayjs'
import { getConvertDifferDay, getDdayText } from '@/features/onboarding/lib'
import { joinDateStyle } from '@/features/onboarding/ui/ModifySequenceModal/styles.css'

interface ModifySequenceDateProps {
  originalJoinDate: string
  isPublish?: boolean
}

// TODO : 컴포넌트명 변경해야 함.
export const ModifySequenceDate = ({ isPublish, originalJoinDate }: ModifySequenceDateProps) => {
  const currentLocale = useLocale()
  const datePickerLocale = currentLocale === 'ko' ? ko : enUS
  const { control, setValue, watch } = useFormContext()

  const todayDate = dayjs(watch('d_day')).format('YYYY-MM-DD')
  const modifyDday = watch('modify_d_day_date')

  if (!isPublish) return null
  // TODO : 입사일(추후, 입사일 데이터 셋팅 후 비교

  return (
    <div className={sectionWrapper}>
      <p className={sectionTitle}>
        날짜 지정
        <span className={required}>*</span>
      </p>
      <div className={dateWrapper}>
        <div className={labelWrapper}>
          <div className={formWrapper}>
            <Controller
              name="modify_d_day_date"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  className="react-datepicker"
                  dateFormat={dayjs(value).format('M월 D일 (dddd)')}
                  dateFormatCalendar={'YY년 MM월'}
                  locale={datePickerLocale}
                  placeholderText={'날짜'}
                  selected={value}
                  onChange={(data) => {
                    const currentDate = dayjs(data).format('YYYY-MM-DD')
                    onChange(currentDate)
                    setValue('join_date', getConvertDifferDay(originalJoinDate, modifyDday))
                  }}
                  onKeyDown={(e) => {
                    e.preventDefault()
                  }}
                  icon={<Icon icon="icon/calendar-solid" size={16} color="neutralGray500" />}
                  previousMonthButtonLabel={
                    <Icon icon="icon/left-line" size={16} color="neutralGray500" />
                  }
                  nextMonthButtonLabel={
                    <Icon icon="icon/right-line" size={16} color="neutralGray500" />
                  }
                  showIcon
                />
              )}
            />
            <p className={joinDateStyle}>
              <Icon icon={'icon/info-line'} color={'blue500'} />
              {!modifyDday && '날짜를 선택해주세요.'}
              {modifyDday && getDdayText(getConvertDifferDay(originalJoinDate, modifyDday))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
