'use client'

import * as Styles from './styles'
import { TextInputProps } from './TextInput.interface'
import { Icon } from '@repo/ui'

export const TextInput = ({
  type = 'text',
  state = 'success',
  defaultValue,
  value,
  placeholder,
  width = '100%',
  onClick,
  onChange,
  onKeyUp,
  onKeyDown,
  onClickReset,
  register,
  pattern,
  disabled = false,
  isReadOnly = false,
  maxLength,
  autoFocus = false,
  step,
  max,
  min = 0,
}: TextInputProps) => {
  const iconColor = state === 'error' ? 'red500' : 'neutralGray300'

  return (
    <Styles.InputContainer>
      <Styles.Input
        $width={width}
        $state={state}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        pattern={pattern}
        disabled={disabled}
        {...register}
        readOnly={isReadOnly}
        max={max}
        min={min}
        maxLength={maxLength}
        autoFocus={autoFocus}
        step={step}
        onWheel={(event) => (event.target as HTMLElement).blur()}
      />
      {onClickReset && (
        <Styles.RemoveButtonBox onClick={onClickReset}>
          <Icon icon="icon/cancle-solid" color={iconColor} />
        </Styles.RemoveButtonBox>
      )}
    </Styles.InputContainer>
  )
}
