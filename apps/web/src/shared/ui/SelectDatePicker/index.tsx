import { convertDateFormat } from '@/shared/lib'
import { Select } from '@/shared/ui'
import { MONTH_OPTIONS, YEAR_OPTIONS } from '@/shared/ui/SelectDatePicker/model'
import { ko } from 'date-fns/locale'
import DatePicker from 'react-datepicker'
import * as Styles from './styles'
import dayjs from 'dayjs'
import { Icon } from '@repo/ui'
import React from 'react'

interface SelectDatePickerProps {
  placeholder: string
  value?: string | Date | null
  onChange?: (date: Date | null) => void
  disabled?: boolean
  minDate?: Date | null
  closeOnScroll?: boolean
}

export const SelectDatePicker = ({
  placeholder,
  value,
  onChange,
  disabled,
  minDate,
  closeOnScroll = true,
}: SelectDatePickerProps) => {
  const month = dayjs().month()
  const year = dayjs().year()

  const defaultMonth = MONTH_OPTIONS[month]
  const defaultYear = YEAR_OPTIONS.find((option) => option.value === year)

  return (
    <Styles.Wrapper $disabled={disabled}>
      <DatePicker
        renderCustomHeader={({ changeYear, changeMonth }) => (
          <Styles.DatePickerHeader>
            <Select
              defaultValue={defaultYear}
              onChange={(options) => {
                changeYear(options.value)
              }}
              options={YEAR_OPTIONS}
              styles={{ menuPortalZIndex: 60 }}
              isMenuPortalOff
            />
            <Select
              defaultValue={defaultMonth}
              onChange={(options) => {
                changeMonth(options.value - 1)
              }}
              options={MONTH_OPTIONS}
              styles={{ menuPortalZIndex: 60 }}
              isMenuPortalOff
            />
          </Styles.DatePickerHeader>
        )}
        value={convertDateFormat(value as string)}
        onChange={(date) => {
          onChange && onChange(date)
        }}
        closeOnScroll={(event: any) => {
          const isReactSelect = event.target?.id.includes('react-select')
          return !isReactSelect && closeOnScroll
        }}
        placeholderText={placeholder}
        disabled={disabled}
        minDate={minDate}
        locale={ko}
        dropdownMode="select"
        icon={<Icon icon="icon/calendar-solid" size={16} color="neutralGray500" />}
        showMonthDropdown
        showYearDropdown
        showIcon
      />
    </Styles.Wrapper>
  )
}
