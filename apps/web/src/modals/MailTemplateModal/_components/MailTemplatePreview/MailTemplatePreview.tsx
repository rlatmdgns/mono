import React from 'react'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'

const MailTemplatePreview = () => {
  const { watch } = useFormContext()
  return (
    <Styles.Wrapper>
      <Styles.Title>
        {watch('mail_subject') && (
          <div dangerouslySetInnerHTML={{ __html: watch('mail_subject') }}></div>
        )}
      </Styles.Title>

      <Styles.Content>
        {watch('mail_contents') && (
          <div dangerouslySetInnerHTML={{ __html: watch('mail_contents') }}></div>
        )}
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default MailTemplatePreview
