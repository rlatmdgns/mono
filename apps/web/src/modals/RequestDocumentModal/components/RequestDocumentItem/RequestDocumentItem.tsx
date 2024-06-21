import React from 'react'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { TextInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface RequestDocumentItemProps {
  name: string
  value: string
}

const RequestDocumentItem = ({ name, value }: RequestDocumentItemProps) => {
  const { register } = useFormContext()
  const $t = useTranslations('request_documents')
  return (
    <Styles.Item>
      <Styles.Title>
        {name} {$t('submission_guidelines')}
      </Styles.Title>
      <TextInput
        register={register(name)}
        placeholder={$t('submission_guidelines_placeholder')}
        defaultValue={value}
      />
      <Styles.UploadText>{$t('upload_requirement_information')}</Styles.UploadText>
    </Styles.Item>
  )
}

export default RequestDocumentItem
