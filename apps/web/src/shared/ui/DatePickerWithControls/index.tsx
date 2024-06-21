import { wrapper, footer } from './styles.css'
import DatePicker from 'react-datepicker'
import { ko } from 'date-fns/locale'
import { Button, Icon } from '@repo/ui'
import { useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import dayjs from 'dayjs'

interface DatePickerWithControlsProps {
  defaultValue?: Date
  onChange: (date?: Date | null) => void
  onClose?: () => void
}

export const DatePickerWithControls = ({
  defaultValue,
  onChange,
  onClose,
}: DatePickerWithControlsProps) => {
  const datePickerRef = useRef<ReactDatePicker | null>(null)
  const [date, setDate] = useState<Date | null>(defaultValue || null)
  const isChanged = dayjs(date).isSame(defaultValue)

  const handleCancel = () => {
    setDate(defaultValue || null)
    onClose?.()
    datePickerRef?.current?.setOpen(false)
  }

  const handleSave = () => {
    onClose?.()
    onChange(date)
    datePickerRef?.current?.setOpen(false)
  }

  return (
    <div className={wrapper}>
      <DatePicker
        ref={datePickerRef}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        selected={date}
        onChange={setDate}
        shouldCloseOnSelect={false}
        previousMonthButtonLabel={<Icon icon="icon/left-line" color="neutralGray500" />}
        nextMonthButtonLabel={<Icon icon="icon/right-line" color="neutralGray500" />}
        onClickOutside={handleCancel}
      >
        <div className={footer}>
          <Button
            onClick={handleCancel}
            width="104"
            text="취소"
            state="secondary"
            style="mono"
            size="sm"
          />
          <Button
            onClick={handleSave}
            disabled={!isChanged}
            width="104"
            text="저장"
            style="fill-weak"
            size="sm"
          />
        </div>
      </DatePicker>
    </div>
  )
}
