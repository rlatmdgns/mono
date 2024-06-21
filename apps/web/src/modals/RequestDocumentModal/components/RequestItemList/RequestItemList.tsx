import RequestInput from '@/modals/RequestDocumentModal/components/RequestInput'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import { RequestItemType } from '@/modals/RequestDocumentModal/recoil/atom'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import RequestItem from '@/modals/RequestDocumentModal/components/RequestItem'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const RequestItemList = () => {
  const { requestItems, handleDocumentAdd, handleItemDelete, handleDocumentDelete, getIncluded } =
    useRequestDocuments()

  const { unregister } = useFormContext()

  const $t = useTranslations('common')

  const handleClick = (item: RequestItemType) => {
    if (getIncluded(item.value)) {
      unregister(item.value)
      handleDocumentDelete(item.value)
      return
    }
    return handleDocumentAdd(item.value)
  }

  const [isDirectInput, setIsDirectInput] = useState(false)

  const handleDirectInput = () => setIsDirectInput(true)
  const handleDirectInputReset = () => setIsDirectInput(false)

  return (
    <>
      <Styles.Title>{$t('request_items')}</Styles.Title>
      <Styles.List>
        {requestItems?.map((item) => {
          const isIncluded = getIncluded(item.value)
          return (
            <RequestItem
              key={item.value}
              item={item}
              isIncluded={isIncluded}
              onClick={handleClick}
              onDelete={handleItemDelete}
            />
          )
        })}
        <RequestInput
          isDirectInput={isDirectInput}
          onClick={handleDirectInput}
          onReset={handleDirectInputReset}
        />
      </Styles.List>
    </>
  )
}

export default RequestItemList
