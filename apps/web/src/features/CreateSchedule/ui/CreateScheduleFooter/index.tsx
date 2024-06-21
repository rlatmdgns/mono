import { Button } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface CreateScheduleFooterProps {
  isValid: boolean
}

export const CreateScheduleFooter = ({ isValid }: CreateScheduleFooterProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Footer>
      <Button type="submit" text={$t('add')} width="80px" disabled={!isValid} />
    </Styles.Footer>
  )
}
