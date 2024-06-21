'use client'

import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'
import { IconButton } from '@/shared/ui'
import React, { useState } from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { IconNames } from "@repo/ui/src/components/Icon";

interface FloatingInputProps {
  type?: 'text' | 'password' | 'tel' | 'email'
  value?: string
  defaultValue?: string
  placeholder: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  register?: UseFormRegisterReturn
  pattern?: string
  icon: IconNames
  isCorrect?: boolean
  isError?: boolean
  isEye?: boolean
  isReadOnly?: boolean
  validationMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | any
  autoComplete?: 'new-password'
  maxLength?: number
}

export const FloatingInput = ({
                                type = 'text',
                                value,
                                defaultValue,
                                placeholder,
                                onChange,
                                register,
                                pattern,
                                icon,
                                isCorrect = false,
                                isError = false,
                                isEye = false,
                                isReadOnly = false,
                                validationMessage,
                                autoComplete,
                                maxLength,
                              }: FloatingInputProps) => {
  const [eyeToggle, setEyeToggle] = useState(false)

  const isValidate = isError && validationMessage
  const stateIconSource = isError ? 'icon/warning-solid' : isCorrect ? 'icon/check-solid' : null
  const stateIconColor = isError ? 'red500' : isCorrect ? 'blue500' : null
  const showIcon = eyeToggle ? 'icon/show-solid' : 'icon/hide-solid'

  const onEyeToggle = () => {
    setEyeToggle(!eyeToggle)
  }
  const onGetType = () => {
    if (isEye && eyeToggle) return 'text'
    return type
  }

  return (
    <Styles.Wrapper>
      <Styles.InputBox>
        <Icon icon={icon} size={20} color="neutralGray500"/>
        <Styles.Input
          $isError={isError}
          $stateIcon={stateIconSource}
          $isEye={isEye}
          type={onGetType()}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          pattern={pattern}
          {...register}
          placeholder=""
          readOnly={isReadOnly}
          autoComplete={autoComplete}
          maxLength={maxLength}
        />
        <Styles.Label>{placeholder}</Styles.Label>
        <Styles.IconWrapper>
          {isEye && <IconButton size={'sm'} icon={showIcon} onClick={onEyeToggle}/>}
          {stateIconSource && stateIconColor && (
            <Icon icon={stateIconSource} color={stateIconColor}/>
          )}
        </Styles.IconWrapper>
      </Styles.InputBox>
      {isValidate && <Styles.Message>{validationMessage}</Styles.Message>}
    </Styles.Wrapper>
  )
}

export default FloatingInput
