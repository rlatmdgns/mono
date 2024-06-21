import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { ScheduleDetail } from '@/interface/schedules'
import ModifyScheduleFooter from '@/modals/ModifyScheduleModal/components/ModifyScheduleFooter'
import { modifyScheduleSchema } from '@/modals/ModifyScheduleModal/validation'
import { SendInterviewersAtom } from '@/modals/ModifyScheduleSendMailModal/recoil/atom'
import { getDayFormat } from '@/shared/lib/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { LocationSelect, Member, Select, SelectMemberOptionLabel, TextInput } from '@/shared/ui'
import * as Styles from './styles'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'
import { useConvertInterviewPlaceholder } from '@/features/CreateSchedule'
import { useLocale, useTranslations } from 'next-intl'
import { enUS, ko } from 'date-fns/locale'
import { Icon } from '@repo/ui'
import { useModifyScheduleFormConstants } from '@/modals/ModifyScheduleModal/components/ModifyScheduleForm/hooks/useModifyScheduleFormConstants'
import { useAlarmOptions } from '@/features/CreateSchedule/hooks/useAlarmOptions'

interface ModifyScheduleFormProps {
  scheduleDetail: ScheduleDetail
  attendantOptions: any[]
  onClick: () => void
}

interface SelectOption {
  [key: string]: any
}

type FormValues = {
  schedule_title: string
  interview_guide?: string
  date: Date
  start_time: Date
  end_time: Date
  schedule_alarm: SelectOption
  schedule_attendant: SelectOption[]
}
const ModifyScheduleForm = ({
  scheduleDetail,
  attendantOptions,
  onClick,
}: ModifyScheduleFormProps) => {
  const { openModal } = useModal()
  const currentPlace = useRecoilValue(CurrentInterviewPlaceAtom)
  const [location, setLocation] = useRecoilState(CurrentContactPlaceAtom)
  const placeHolderText = useConvertInterviewPlaceholder(currentPlace.desc)

  const $t = useTranslations()
  const { ALARM_OPTIONS } = useAlarmOptions()

  const { getModifyScheduleDefaultForm } = useModifyScheduleFormConstants()

  const currentLocale = useLocale()
  const datePickerLocale = currentLocale === 'ko' ? ko : enUS

  const setSendInterviews = useSetRecoilState(SendInterviewersAtom)

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(modifyScheduleSchema),
    mode: 'all',
  })

  const isVisible = currentPlace && currentPlace.type === 'contact'

  const getStateHandle = (values: FieldValues) => {
    const getValues = (members: SelectOption[]) => {
      return members.map((member) => member.value)
    }

    const payload = {
      schedule_alarm: values.schedule_alarm.value,
      schedule_address: currentPlace.type === 'contact' ? location.address : currentPlace.desc,
      schedule_detail_address: currentPlace.type === 'contact' ? location.detail_address : '',
      interview_guide: values.interview_guide,
      schedule_title: values.schedule_title,
      schedule_attendant: getValues(values.schedule_attendant),
      schedule_date: getDayFormat(values.date, 'YYYY-MM-DD'),
      start_time: getDayFormat(values.start_time, 'HH:mm:ss'),
      end_time: getDayFormat(values.end_time, 'HH:mm:ss'),
      interview_type: currentPlace.type,
    }

    setSendInterviews(values.schedule_attendant)

    openModal(MODAL.MODIFY_SCHEDULE_SEND_MAIL, {
      postData: payload,
      modifyScheduleClose: onClick,
    })

    return
  }

  const handleCreateSchedule = (values: FieldValues) => {
    getStateHandle(values)
  }

  const setScheduleData = () => {
    const defaultValues = getModifyScheduleDefaultForm(scheduleDetail, attendantOptions)
    reset({ ...defaultValues })
  }

  const filterPassedTime = (time: Date) => {
    const times = new Date(time)
    const selectedTime = dayjs(watch('start_time')).toDate().getTime()

    return selectedTime < times.getTime()
  }

  useEffect(() => {
    if (attendantOptions) {
      setScheduleData()
    }
  }, [])

  useEffect(() => {
    if (scheduleDetail.schedule_address.indexOf($t('common.interview')) > -1) return
    setLocation({
      address: scheduleDetail.schedule_address,
      detail_address: scheduleDetail.schedule_detail_address,
    })
  }, [])

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
                      onChange={(data) => onChange(data)}
                      minDate={new Date()}
                      showIcon
                      icon={<Icon icon="icon/calendar-solid" size={16} color="neutralGray500" />}
                      previousMonthButtonLabel={
                        <Icon icon="icon/left-line" size={16} color="neutralGray500" />
                      }
                      nextMonthButtonLabel={
                        <Icon icon="icon/right-line" size={16} color="neutralGray500" />
                      }
                      customInput={<TextInput isReadOnly={true} />}
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
                      onChange={(time) => onChange(time)}
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
                      timeIntervals={30}
                      timeCaption={$t('common.end_time')}
                      placeholderText={$t('common.end_time')}
                      timeFormat="aa h:mm"
                      dateFormat="aa h:mm"
                      showTimeSelect
                      showTimeSelectOnly
                      isClearable
                      filterTime={filterPassedTime}
                      icon={<Icon icon="icon/time-solid" size={16} color="neutralGray500" />}
                      showIcon
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
            <LocationSelect />
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
          <Styles.Label>{$t('common.announcement_name')}</Styles.Label>
          <Styles.DisabledItem as={'div'}>{scheduleDetail.posting_title}</Styles.DisabledItem>
        </Styles.Column>
        <Styles.Column>
          <Styles.Label>{$t('common.applicant')}</Styles.Label>
          <Styles.DisabledItem as={'div'}>
            {scheduleDetail.schedule_applicant.map((applicant) => (
              <Styles.Applicant key={applicant.applicant_id}>
                {applicant.applicant_name} {applicant.is_deleted && `(삭제됨)`}
              </Styles.Applicant>
            ))}
          </Styles.DisabledItem>
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
                  options={attendantOptions}
                  Option={SelectMemberOptionLabel}
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
      <ModifyScheduleFooter isValid={isVisible ? isValid : isValid && !!watch('interview_guide')} />
    </Styles.Form>
  )
}

export default ModifyScheduleForm
