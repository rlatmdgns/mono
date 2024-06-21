import * as Styles from './styles'
import 'react-datepicker/dist/react-datepicker.css'

import { LocationSelect, Member, Select, SelectMemberOptionLabel, TextInput } from '@/shared/ui'
import { usePostings, useScheduleRequirement } from '@/shared/hooks'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'

import {
  useConvertInterviewPlaceholder,
  createScheduleSchema,
  formatScheduleData,
  isPastEndTime,
  isPastStartTime,
  useCreateSchedule,
} from '@/features/CreateSchedule'
import { CreateScheduleFooter } from '../CreateScheduleFooter'

import { useRecoilValue } from 'recoil'
import { yupResolver } from '@hookform/resolvers/yup'
import { setHours, setMinutes } from 'date-fns'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { enUS, ko } from 'date-fns/locale'
import { Icon } from '@repo/ui'
import { useAlarmOptions } from '@/features/CreateSchedule/hooks/useAlarmOptions'

interface CreateScheduleFormProps {
  onClick: () => void
}

interface SelectOption {
  [key: string]: any
}

type FormValues = {
  posting: SelectOption
  schedule_alarm: SelectOption
  schedule_title: string
  schedule_applicant: SelectOption[]
  schedule_attendant: SelectOption[]
  interview_guide?: string
  date: Date
  start_time: Date
  end_time: Date
}

export const CreateScheduleForm = ({ onClick }: CreateScheduleFormProps) => {
  const { createScheduleMutate } = useCreateSchedule()

  const currentLocale = useLocale()
  const datePickerLocale = currentLocale === 'ko' ? ko : enUS

  const currentPlace = useRecoilValue(CurrentInterviewPlaceAtom)
  const location = useRecoilValue(CurrentContactPlaceAtom)

  const $t = useTranslations()
  const { ALARM_OPTIONS } = useAlarmOptions()

  const placeHolderText = useConvertInterviewPlaceholder(currentPlace.desc)

  const {
    control,
    setValue,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(createScheduleSchema),
    mode: 'all',
  })

  const { postingOptions } = usePostings()
  const id = watch('posting')?.value
  const { applicantOptions, attendantOptions } = useScheduleRequirement(id)
  const [isAutoClose, setIsAutoClose] = useState(false)

  const isVisible = currentPlace && currentPlace.type === 'contact'
  const isValidForm = isVisible ? isValid : isValid && !!watch('interview_guide')

  const handleChangeAutoClose = (status: boolean) => {
    setIsAutoClose(status)
  }
  const getStateHandle = (values: FieldValues) => {
    const payload = formatScheduleData({ values, currentPlace, location })
    createScheduleMutate(payload)
    return
  }

  const handleCreateSchedule = (values: FieldValues) => {
    getStateHandle(values)
    onClick()
  }

  const handleChangeStartTime = (date: Date) => {
    const selectedDate = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
    }
    if (watch('start_time')) {
      const startTime = {
        hour: watch('start_time').getHours(),
        minute: watch('start_time').getMinutes(),
      }
      setValue(
        'start_time',
        new Date(
          selectedDate.year,
          selectedDate.month,
          selectedDate.date,
          startTime.hour,
          startTime.minute,
        ),
      )
    }
    if (watch('end_time')) {
      const endTime = {
        hour: watch('end_time').getHours(),
        minute: watch('end_time').getMinutes(),
      }
      setValue(
        'end_time',
        new Date(
          selectedDate.year,
          selectedDate.month,
          selectedDate.date,
          endTime.hour,
          endTime.minute,
        ),
      )
    }
  }

  return (
    <Styles.Form onSubmit={handleSubmit(handleCreateSchedule)}>
      <Styles.Fieldset>
        <Styles.Column>
          <Styles.Label>{$t('common.title')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="schedule_title"
              control={control}
              render={({ field }) => <TextInput placeholder={$t('common.title')} {...field} />}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.time')}</Styles.Label>
          <Styles.Item>
            <Styles.DatepickerBox>
              <Controller
                name="date"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <DatePicker
                      className="react-datepicker"
                      dateFormat={$t('date_format.date')}
                      dateFormatCalendar={$t('date_format.calendar')}
                      locale={datePickerLocale}
                      placeholderText={$t('common.select_date')}
                      selected={value}
                      onChange={(data) => {
                        if (!data) return
                        handleChangeStartTime(data)
                        onChange(data)
                      }}
                      onCalendarOpen={() => handleChangeAutoClose(!isAutoClose)}
                      showIcon
                      icon={<Icon icon="icon/calendar-solid" size={16} color="neutralGray500" />}
                      minDate={new Date()}
                      customInput={<TextInput isReadOnly={true} />}
                      previousMonthButtonLabel={
                        <Icon icon="icon/left-line" size={16} color="neutralGray500" />
                      }
                      nextMonthButtonLabel={
                        <Icon icon="icon/right-line" size={16} color="neutralGray500" />
                      }
                    />
                  )
                }}
              />
              <Controller
                name="start_time"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <DatePicker
                      className="react-datepicker"
                      locale={datePickerLocale}
                      selected={value}
                      onChange={(time) => {
                        onChange(time)
                      }}
                      onCalendarOpen={() => handleChangeAutoClose(!isAutoClose)}
                      timeIntervals={30}
                      timeCaption={$t('common.start_time')}
                      placeholderText={$t('common.start_time')}
                      timeFormat="aa h:mm"
                      dateFormat="aa h:mm"
                      showTimeSelect
                      showTimeSelectOnly
                      isClearable
                      icon={<Icon icon="icon/time-solid" size={16} color="neutralGray500" />}
                      showIcon
                      startDate={setHours(setMinutes(new Date(), 0), 8)}
                      filterTime={(time) => isPastStartTime(time, watch('date'))}
                      customInput={<TextInput isReadOnly={true} />}
                    />
                  )
                }}
              />
              <Controller
                name="end_time"
                control={control}
                render={({ field: { value, onChange } }) => {
                  return (
                    <DatePicker
                      className="react-datepicker"
                      locale={datePickerLocale}
                      selected={value}
                      onChange={(time) => onChange(time)}
                      onCalendarOpen={() => handleChangeAutoClose(!isAutoClose)}
                      timeIntervals={30}
                      timeCaption={$t('common.end_time')}
                      placeholderText={$t('common.end_time')}
                      timeFormat="aa h:mm"
                      dateFormat="aa h:mm"
                      showTimeSelect
                      showTimeSelectOnly
                      isClearable
                      icon={<Icon icon="icon/time-solid" size={16} color="neutralGray500" />}
                      showIcon
                      minDate={new Date()}
                      filterTime={(time) => isPastEndTime(time, watch('date'), watch('start_time'))}
                      customInput={<TextInput isReadOnly={true} />}
                    />
                  )
                }}
              />
            </Styles.DatepickerBox>
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.location')}</Styles.Label>
          <Styles.Item>
            <LocationSelect isAutoClose={isAutoClose} />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label $isNotRequired={isVisible}>{$t('common.notification')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="interview_guide"
              control={control}
              render={({ field }) => <TextInput placeholder={placeHolderText} {...field} />}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.announcement')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="posting"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={postingOptions}
                  placeholder={$t('common.select_announcement')}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.applicant')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="schedule_applicant"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={applicantOptions}
                  isNoDropdownIndicator
                  isSearchable
                  placeholder={$t('common.select_applicant')}
                  noOptionsMessage={$t('common.empty_applicant')}
                  closeMenuOnSelect={false}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.interviewer')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="schedule_attendant"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  Option={SelectMemberOptionLabel}
                  options={attendantOptions}
                  isSearchable
                  isNoDropdownIndicator
                  closeMenuOnSelect={false}
                  placeholder={$t('common.select_interviewer')}
                  MultiValueLabel={(props) => {
                    return <Member name={props.data.name} image={props.data.image} />
                  }}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.alarm')}</Styles.Label>
          <Styles.Item>
            <Controller
              name="schedule_alarm"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={ALARM_OPTIONS}
                  placeholder={$t('common.select_alarm')}
                />
              )}
            />
          </Styles.Item>
        </Styles.Column>
      </Styles.Fieldset>
      <CreateScheduleFooter isValid={isValidForm} />
    </Styles.Form>
  )
}
