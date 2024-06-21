import * as Styles from './styles'
import { UseFormRegisterReturn } from 'react-hook-form'
import { IconBoxButton } from '@/shared/ui'
import React from 'react'
import { useTranslations } from 'next-intl'

interface InputContentProps {
  file?: File
  register?: UseFormRegisterReturn
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
  placeholder?: string
  isReadOnly?: boolean
}

export const InputContent = ({
  file,
  register,
  onChange,
  accept = '.pdf',
  placeholder,
  isReadOnly,
}: InputContentProps) => {
  const $t = useTranslations('messages')
  if (file) return null
  const filePlaceholder = !placeholder ? $t('file_upload_15mb_placeholder') : placeholder

  if (onChange) {
    return (
      <Styles.Wrapper $isReadOnly={isReadOnly}>
        <Styles.Input type="file" accept={accept} onChange={onChange} />
        <Styles.Placeholder>{filePlaceholder}</Styles.Placeholder>
        <IconBoxButton size="xs" icon="icon/upload-solid" state="standard" style="fill-weak" />
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper $isReadOnly={isReadOnly}>
      <Styles.Input type="file" accept={accept} {...register} />
      <Styles.Placeholder>{filePlaceholder}</Styles.Placeholder>
      <IconBoxButton size="xs" icon="icon/upload-solid" state="standard" style="fill-weak" />
    </Styles.Wrapper>
  )
}
