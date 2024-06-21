import { Toast } from '@/shared/ui'
import {
  RequestDocument,
  requestDocumentsAtom,
  requestItemsAtom,
  requestViewDocumentsAtom,
} from '@/modals/RequestDocumentModal/recoil/atom'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

const useRequestDocuments = () => {
  const [requestItems, setRequestItems] = useRecoilState(requestItemsAtom)
  const [viewDocuments, setViewDocuments] = useRecoilState(requestViewDocumentsAtom)
  const [documents, setDocuments] = useRecoilState(requestDocumentsAtom)
  const resetRequestItems = useResetRecoilState(requestItemsAtom)
  const resetViewDocuments = useResetRecoilState(requestViewDocumentsAtom)
  const $t = useTranslations()

  const getIncluded = (item: string) => {
    return viewDocuments.some((document) => document.name === item)
  }

  const handleItemAdd = (item: string) => {
    const isIncluded = requestItems.some((requestItem) => requestItem.value === item)
    if (isIncluded) {
      return Toast.error($t('messages.already_item'))
    }
    setRequestItems([
      ...requestItems,
      {
        type: 'directInput',
        value: item,
      },
    ])
  }

  const handleItemDelete = (item: string) => {
    const filteredItems = requestItems.filter((requestItem) => requestItem.value !== item)
    setRequestItems(filteredItems)
    handleDocumentDelete(item)
  }

  const handleDocumentAdd = (item: string) => {
    const isIncluded = viewDocuments.some((document) => document.name === item)
    if (isIncluded) return
    setViewDocuments([...viewDocuments, { name: item, value: '' }])
  }

  const handleDocumentDelete = (item: string) => {
    const filteredViewDocuments = viewDocuments.filter((viewDocument) => viewDocument.name !== item)
    const filteredDocuments = documents.filter((document) => document.name !== item)
    setViewDocuments(filteredViewDocuments)
    setDocuments(filteredDocuments)
  }

  const reset = () => {
    resetRequestItems()
    resetViewDocuments()
    setDocuments([])
  }

  const initDocuments = (documents: RequestDocument[]) => {
    setDocuments(documents)
    setViewDocuments(documents)
  }

  const initViewDocuments = () => {
    setViewDocuments(documents)
  }

  const initRequestItem = () => {
    setRequestItems([
      {
        type: 'default',
        value: $t('request_documents.resume'),
      },
      {
        type: 'default',
        value: $t('request_documents.portfolio'),
      },
      {
        type: 'default',
        value: $t('request_documents.final_education_certificate'),
      },
      {
        type: 'default',
        value: $t('request_documents.transcript'),
      },
      {
        type: 'default',
        value: $t('request_documents.certificate_of_qualification'),
      },
      {
        type: 'default',
        value: $t('request_documents.resident_registration'),
      },
    ])
  }

  useEffect(() => {
    initRequestItem()
  }, [])

  return {
    requestItems,
    documents,
    viewDocuments,
    handleItemAdd,
    handleItemDelete,
    handleDocumentAdd,
    handleDocumentDelete,
    getIncluded,
    reset,
    initDocuments,
    initViewDocuments,
  }
}

export default useRequestDocuments
