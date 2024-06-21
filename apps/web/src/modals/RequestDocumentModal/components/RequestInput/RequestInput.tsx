import React from 'react'
import * as Styles from './styles'
import { IconButton } from '@/shared/ui'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import { useTranslations } from 'next-intl'

interface RequestDocumentItemProps {
  isDirectInput: boolean
  onClick: () => void
  onReset: () => void
}

const RequestInput = ({ isDirectInput, onClick, onReset }: RequestDocumentItemProps) => {
  const $t = useTranslations('common')
  const { handleItemAdd, handleDocumentAdd } = useRequestDocuments()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formElements = event.currentTarget.elements[0] as HTMLInputElement
    const value = formElements.value

    handleItemAdd(value)
    handleDocumentAdd(value)
    onReset()
    formElements.value = ''
  }

  if (isDirectInput) {
    return (
      <Styles.Item>
        <form onSubmit={handleSubmit}>
          <Styles.Input maxLength={20} type="text" autoFocus />
        </form>
        <IconButton icon="icon/cancle-line1" size="xs" onClick={onReset} />
      </Styles.Item>
    )
  }
  return <Styles.Item onClick={onClick}>+ {$t('enter_manually')}</Styles.Item>
}

export default RequestInput
