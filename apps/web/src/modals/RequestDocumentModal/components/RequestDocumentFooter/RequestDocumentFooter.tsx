import { Button } from '@/shared/ui'
import { FieldValues, useFormContext } from 'react-hook-form'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface RequestDocumentFooterProps {
  onClose: () => void
}

const RequestDocumentFooter = ({ onClose }: RequestDocumentFooterProps) => {
  const { initDocuments, initViewDocuments } = useRequestDocuments()
  const { handleSubmit } = useFormContext()
  const $t = useTranslations('common')

  const handleCancel = () => {
    initViewDocuments()
    onClose()
  }

  const handleClick = (values: FieldValues) => {
    const outputArray = Object.entries(values).map(([name, value]) => ({
      name,
      value,
    }))

    initDocuments(outputArray)
    onClose()
  }

  return (
    <Styles.Footer>
      <Button
        text={$t('cancel')}
        width="96px"
        style="mono"
        state="standard"
        onClick={handleCancel}
      />
      <Button text={$t('add_action')} width="96px" onClick={handleSubmit(handleClick)} />
    </Styles.Footer>
  )
}

export default RequestDocumentFooter
