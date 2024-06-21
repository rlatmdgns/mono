import useMailDeleteState from '@/app/[locale]/mail/_hooks/useMailDeleteState'
import useMailHardDelete from '@/app/[locale]/mail/_hooks/useMailHardDelete'
import useMailIds from '@/app/[locale]/mail/_hooks/useMailIds'
import useMailRestore from '@/app/[locale]/mail/_hooks/useMailRestore'
import { Button } from '@/shared/ui'
import React, { useEffect } from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const MailHardDeleteButton = () => {
  const { hardDeleteMutate } = useMailHardDelete()
  const { restoreMutate } = useMailRestore()
  const { reset, disabled, mailIds } = useMailIds()
  const { handleDeleteChange, handleDeleteStateReset } = useMailDeleteState()

  const $t = useTranslations('common')
  const handleRestore = () => {
    restoreMutate(mailIds)
  }

  const handleHardDelete = () => {
    hardDeleteMutate(mailIds)
    reset()
  }

  useEffect(() => {
    handleDeleteChange()
    return () => {
      handleDeleteStateReset(reset)
    }
  }, [])

  return (
    <Styles.Wrapper>
      <Button
        state="standard"
        width="50px"
        text={$t('restore')}
        onClick={handleRestore}
        disabled={disabled}
      />
      <Button
        text={$t('delete')}
        state="warning"
        style="fill-weak"
        width="50px"
        onClick={handleHardDelete}
        disabled={disabled}
      />
    </Styles.Wrapper>
  )
}

export default MailHardDeleteButton
