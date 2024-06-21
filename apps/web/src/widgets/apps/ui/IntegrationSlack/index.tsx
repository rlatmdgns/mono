import React from 'react'
import { useSlack } from '@/entities/apps/hooks'
import { IMAGES, MODAL } from '@/shared/constants'
import { GetConnectSlackResponse } from '@/entities/apps/types/slack'
import { IntegrationItem, IntegrationSlackForm } from '@/features/apps'
import { SlackChannelChange } from '@/features/apps/ui/SlackChannelChange'
import { useModal } from '@/shared/hooks'
import { useOpen } from '@/features/apps/hooks/useOpen'

interface IntegrationSlackProps {
  initialData: GetConnectSlackResponse
}

export const IntegrationSlack = ({ initialData }: IntegrationSlackProps) => {
  const { isOpen, handleOpen, handleClose } = useOpen()

  const { data } = useSlack(initialData)
  const isConnected = !!data?.slack?.channel
  const values = {
    can_alert_applicant_responses: data?.slack?.can_alert_applicant_responses,
    can_alert_interview_fixed: data?.slack?.can_alert_interview_fixed,
    can_alert_interview_reminders: data?.slack?.can_alert_interview_reminders,
    can_alert_new_applicants: data?.slack?.can_alert_new_applicants,
  }

  const { openModal, closeModal } = useModal()
  const handleClick = () => {
    openModal(MODAL.INTEGRATION_SLACK, {
      isConnected: false,
      onClose: () => closeModal(MODAL.INTEGRATION_SLACK),
    })
  }

  return (
    <>
      <IntegrationItem
        name="Slack"
        description="Stead의 알림을 Slack을 통해 받습니다."
        image={IMAGES.SLACK}
        isConnected={isConnected}
        onOpen={handleOpen}
        isOpen={isOpen}
        onClick={handleClick}
      >
        <SlackChannelChange isOpen={isOpen} channel={data?.slack?.channel} />
        <IntegrationSlackForm isOpen={isOpen} values={values} onClose={handleClose} />
      </IntegrationItem>
    </>
  )
}
