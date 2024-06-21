import React from 'react'
import * as Styles from './styles'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import DocumentItem from '@/modals/WriteMailModal/components/DocumentItem'

const DocumentList = () => {
  const { documents, handleDocumentDelete } = useRequestDocuments()

  if (!documents) {
    return null
  }

  return (
    <Styles.List>
      {documents?.map((document) => (
        <DocumentItem
          key={document.name}
          name={document.name}
          description={document.value}
          onClick={handleDocumentDelete}
        />
      ))}
    </Styles.List>
  )
}

export default DocumentList
