import RequestDocumentItem from '@/modals/RequestDocumentModal/components/RequestDocumentItem'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import React from 'react'
import * as Styles from './styles'

const RequestDocumentList = () => {
  const { viewDocuments } = useRequestDocuments()

  return (
    <Styles.Wrapper>
      {viewDocuments.map((viewDocument) => {
        return (
          <RequestDocumentItem
            key={viewDocument.name}
            name={viewDocument.name}
            value={viewDocument.value}
          />
        )
      })}
    </Styles.Wrapper>
  )
}

export default RequestDocumentList
