import { contentBox } from './styles.css'
import { DatePickerWithControls } from '@/shared/ui'

interface FreshManDatePickerProps {
  isDate: boolean
  defaultValue: string
  onDateEditClose: () => void
  onDateChange: (date?: Date | null) => void
}

export const FreshManDatePicker = ({
  isDate,
  defaultValue,
  onDateEditClose,
  onDateChange,
}: FreshManDatePickerProps) => {
  const isDateValid = `${new Date(defaultValue)}` !== 'Invalid Date'

  if (!isDate) return null
  return (
    <div className={contentBox}>
      <DatePickerWithControls
        defaultValue={isDateValid ? new Date(defaultValue) : undefined}
        onChange={onDateChange}
        onClose={onDateEditClose}
      />
    </div>
  )
}
