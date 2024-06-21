import { TextInput } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import React from 'react'

interface ApplicantFormLabelInputProps {
  placeholder: string
  isTitle: boolean
  title: string
}

export const ApplicantFormLabelInput = ({
  placeholder,
  isTitle,
  title,
}: ApplicantFormLabelInputProps) => {
  const onInputChange = (value: string) => {}
  if (!isTitle) return

  return (
    <Styles.Placeholder $title={title}>
      <TextInput
        placeholder={placeholder}
        value={title}
        onChange={(event) => onInputChange(event.target.value)}
      />
      {!title && <Icon icon="icon/edit-line" color="neutralGray400" />}
    </Styles.Placeholder>
  )
}
