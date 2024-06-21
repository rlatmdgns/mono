import React, { useEffect } from 'react'
import * as Styles from './styles'
import { Button, IconBoxButton } from '@/shared/ui'
import useMailIds from '@/app/[locale]/mail/_hooks/useMailIds'
import useMailDeleteState from '@/app/[locale]/mail/_hooks/useMailDeleteState'
import useMailDelete from '@/app/[locale]/mail/_hooks/useMailDelete'
import { useTranslations } from 'next-intl'

const MailDeleteButton = () => {
  const $t = useTranslations('common')
  const { deleteMutate } = useMailDelete()
  const { reset, disabled, mailIds } = useMailIds()
  const { isDelete, handleDeleteChange, handleDeleteStateReset } = useMailDeleteState()

  const handleDelete = () => {
    deleteMutate(mailIds)
    handleDeleteStateReset(reset)
  }

  useEffect(() => {
    return () => {
      handleDeleteStateReset(reset)
    }
  }, [])

  if (!isDelete) {
    return <IconBoxButton icon="icon/delete-solid" state="standard" onClick={handleDeleteChange} />
  }
  return (
    <Styles.Wrapper>
      <Button
        text={$t('cancel')}
        state="standard"
        style="mono"
        width="50px"
        onClick={() => handleDeleteStateReset(reset)}
      />
      <Button
        text={$t('delete')}
        state="warning"
        style="fill-weak"
        width="50px"
        disabled={disabled}
        onClick={handleDelete}
      />
    </Styles.Wrapper>
  )
}

export default MailDeleteButton
