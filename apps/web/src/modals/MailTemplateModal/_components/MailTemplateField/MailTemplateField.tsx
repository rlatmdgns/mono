import React, { useEffect, useState } from 'react'
import * as Styles from './styles'

import { useFormContext } from 'react-hook-form'
import { InnerEditor, MailEditor } from '@/features/Editor'
import { TextInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface MailTemplateFieldProps {
  template?: any
}

const MailTemplateField = ({ template }: MailTemplateFieldProps) => {
  const method = useFormContext()
  const [quillTitleText, setQuillTitleText] = useState('')
  const [quillContentText, setQuillContentText] = useState('')
  const $t = useTranslations()

  const handleTitleChange = (value: string) => {
    setQuillTitleText(value)
    method.setValue('mail_subject', value)
  }

  const handleChange = (value: string) => {
    setQuillContentText(value)
    method.setValue('mail_contents', value)
  }

  useEffect(() => {
    setQuillTitleText(template?.mail_subject)
    setQuillContentText(template?.mail_contents)
  }, [template])

  return (
    <Styles.Fieldset>
      <Styles.Column>
        <Styles.Label $isRequired>{$t('common.template_name')}</Styles.Label>
        <Styles.Item>
          <TextInput
            placeholder={$t('validation.template_input_placeholder')}
            register={method.register('template_title')}
          />
        </Styles.Item>
      </Styles.Column>
      <Styles.Column>
        <Styles.Label $isRequired>{$t('common.title')}</Styles.Label>
        <Styles.Item>
          <InnerEditor
            value={quillTitleText}
            onChange={(value) => handleTitleChange(value)}
            placeholder={$t('common.title')}
          />
        </Styles.Item>
      </Styles.Column>
      <Styles.EditorWrapper>
        <MailEditor
          value={quillContentText}
          onChange={(value) => handleChange(value)}
          placeholder={$t('mail.mail_content_placeholder')}
        />
      </Styles.EditorWrapper>
    </Styles.Fieldset>
  )
}

export default MailTemplateField
