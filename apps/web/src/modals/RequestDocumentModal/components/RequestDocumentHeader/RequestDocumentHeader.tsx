import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const RequestDocumentHeader = () => {
  const $t = useTranslations('common')
  return <Styles.Header>{$t('request_document')}</Styles.Header>
}

export default RequestDocumentHeader
