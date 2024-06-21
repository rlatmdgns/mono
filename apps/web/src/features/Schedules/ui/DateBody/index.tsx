import * as Styles from '@/features/Schedules/styles'
import { Icon } from '@repo/ui'
import React from 'react'
import { useTranslations } from 'next-intl'

interface DateBodyProps {
  data: any
  handleScheduleDelete: (id: string) => void
}

export const DateBody = ({ data, handleScheduleDelete }: DateBodyProps) => {
  const $t = useTranslations()
  const { event } = data

  const onDelete = () => {
    handleScheduleDelete(event.id)
  }
  return (
    <Styles.ScheduleRemoveButton
      data-id={event.id}
      aria-label={$t('common.delete')}
      onClick={onDelete}
    >
      <Icon icon="icon/cancle-line1" color="white" size={12} />
    </Styles.ScheduleRemoveButton>
  )
}
