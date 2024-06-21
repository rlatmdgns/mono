'use client'

import { MailTemplateContent } from '@/interface/template'
import React from 'react'
import * as Styles from './styles'

interface MailTemplatePreviewProps {
  template?: MailTemplateContent
}

const MailTemplatePreview = ({ template }: MailTemplatePreviewProps) => {
  if (!template) return null
  return (
    <Styles.Wrapper>
      <Styles.Subject
        dangerouslySetInnerHTML={{
          __html: template?.mail_subject,
        }}
      ></Styles.Subject>
      <Styles.Content
        dangerouslySetInnerHTML={{
          __html: template?.mail_contents,
        }}
      ></Styles.Content>
    </Styles.Wrapper>
  )
}

export default MailTemplatePreview
