import React from 'react'
import * as Styles from './styles'
import RequestItemList from '@/modals/RequestDocumentModal/components/RequestItemList'
import RequestDocumentList from '@/modals/RequestDocumentModal/components/RequestDocumentList'

const RequestDocumentContent = () => {
  return (
    <Styles.Content>
      <RequestItemList />
      <RequestDocumentList />
    </Styles.Content>
  )
}

export default RequestDocumentContent
