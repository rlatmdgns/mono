import { Button } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface CreateScheduleFooterProps {
  isValid: boolean
}

const ModifyScheduleFooter = ({ isValid }: CreateScheduleFooterProps) => {
  const $t = useTranslations('common')

  return (
    <Styles.Footer>
      <Button type="submit" text={$t('save')} width="80px" disabled={!isValid} />
    </Styles.Footer>
  )
}

export default ModifyScheduleFooter
