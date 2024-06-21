import { input } from './styles.css'
import { Controller, ControllerRenderProps, FieldValues } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { isDateValid } from '@/features/onboarding/lib/isDateValid'

interface FreshManDateInputProps {
  name: string
  isBatchUpdate?: boolean
  onUpdateStartDate?: (event: ChangeEvent<HTMLInputElement>, name: string) => void
}

export const FreshManDateInput = ({
  name,
  isBatchUpdate,
  onUpdateStartDate,
}: FreshManDateInputProps) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, string>,
  ) => {
    if (`${event.target.value}`.length >= 7) return
    if (isBatchUpdate && onUpdateStartDate) {
      onUpdateStartDate(event, name)
      return
    }
    field.onChange(event)
  }

  return (
    <Controller
      name={name}
      rules={{
        required: '필수 입력 항목입니다.',
        minLength: {
          value: 6,
          message: '6자리를 입력해주세요.',
        },
        maxLength: {
          value: 6,
          message: '6자리를 입력해주세요.',
        },
        validate: (value) => !isDateValid(value) || '정확한 날짜를 입력해주세요.',
      }}
      render={({ field, fieldState: { error } }) => {
        return (
          <input
            className={input({
              error: !!error,
            })}
            ref={field.ref}
            value={field.value || ''}
            onChange={(event) => handleChange(event, field)}
            onWheel={(event) => (event.target as HTMLElement).blur()}
            placeholder="240101"
            type="number"
          />
        )
      }}
    />
  )
}
