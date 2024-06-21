import * as Styles from './styles'
import React from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { Icon } from '@repo/ui'

interface ErrorMessageProps {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any> | any>
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null

  return (
    <Styles.Wrapper>
      <Icon icon="icon/info-solid" color="red500" size={14} />
      {error?.message as string}
    </Styles.Wrapper>
  )
}
