'use client'

import { Button } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

const EditPostingFooter = ({}) => {
  const router = useRouter()
  const $t = useTranslations('common')

  const handleCancel = () => router.back()

  return (
    <Styles.Footer>
      <Button
        text={$t('cancel')}
        width="98px"
        state="standard"
        style="mono"
        onClick={handleCancel}
      />
      <Button type="submit" text={$t('modify')} width="98px" state="primary" style="fill-strong" />
    </Styles.Footer>
  )
}

export default EditPostingFooter
