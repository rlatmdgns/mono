import * as Styles from './styles'

import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { withAuth } from '@/shared/lib'
import { useScheduleModify } from '@/features/InterviewSchedule'

import React from 'react'
import { useTranslations } from 'next-intl'

interface ScheduleModifyProps {
  interviewState: string
  handleCloseModal: () => void
}

const ScheduleModifyContent = ({ interviewState, handleCloseModal }: ScheduleModifyProps) => {
  const { handleDelete, handleCancel, handleScheduleModify } = useScheduleModify()
  const $t = useTranslations()

  const isScheduled = interviewState !== 'scheduled'

  return (
    <Styles.MoreWrap>
      <Styles.MoreButton>
        <Dropdown
          button={<IconButton size="lg" icon="icon/more-solid" color="neutralGray300" />}
          isNotPortal
          isAutoClose
        >
          <Dropdown.Item onClick={handleScheduleModify} disabled={isScheduled}>
            <Icon icon="icon/edit-solid" color="neutralGray500" />
            {$t('interview.modify')}
          </Dropdown.Item>
          <Dropdown.Item onClick={handleDelete} isWarning>
            <Icon icon="icon/delete-solid" color="red500" />
            {$t('schedule.delete')}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleCancel()} disabled={isScheduled} isWarning>
            <Icon icon="icon/cancle-solid" color="red500" />
            {$t('interview.cancel')}
          </Dropdown.Item>
        </Dropdown>
        <IconButton
          icon="icon/cancle-line1"
          onClick={handleCloseModal}
          ariaLabel={$t('common.close')}
          size="sm"
          color="neutralGray300"
        />
      </Styles.MoreButton>
    </Styles.MoreWrap>
  )
}

const ScheduleModify = withAuth(ScheduleModifyContent)

export { ScheduleModify }
