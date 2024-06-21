'use client'

import { TextareaProps } from './Textarea.interface'
import { textareaStyle } from './styles.css'

export const Textarea = ({
                           value,
                           defaultValue,
                           onChange,
                           maxLength = 20,
                           placeholder,
                           rows = 4,
                           disabled = false,
                           register,
                           state = 'success',
                         }: TextareaProps) => {
  if (register) {
    return (
      <textarea className={textareaStyle({
        state
      })}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxLength}
                rows={rows}
                {...register}
      />
    )
  }

  return (
    <textarea className={textareaStyle({
      state
    })}
              value={value}
              defaultValue={defaultValue}
              onChange={onChange}
              placeholder={placeholder}
              disabled={disabled}
              maxLength={maxLength}
              rows={rows}
    />
  )
}
