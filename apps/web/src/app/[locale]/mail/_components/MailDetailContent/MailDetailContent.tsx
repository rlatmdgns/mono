import React from 'react'
import * as Styles from './styles'

interface MailDetailContentProps {
  content?: string
}

const MailDetailContent = ({ content }: MailDetailContentProps) => {
  return (
    <Styles.Content>
      {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
    </Styles.Content>
  )
}

export default MailDetailContent
