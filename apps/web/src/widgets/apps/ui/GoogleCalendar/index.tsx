import { GetConnectGoogleCalendarResponse } from '@/entities/apps/types/calendar'
import { useGoogleCalendarConnect, useGoogleCalendars } from '@/entities/apps/hooks'
import React from 'react'
import { IMAGES, MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { IntegrationItem } from '@/features/apps'
import { IntegrationGoogleCalendarForm } from '@/features/apps/ui/IntegrationForm/IntegrationGoogleCalendarForm'
import { useOpen } from '@/features/apps/hooks/useOpen'

interface GoogleCalendarProps {
  initialData: GetConnectGoogleCalendarResponse
}

export const GoogleCalendar = ({ initialData }: GoogleCalendarProps) => {
  const { openModal, closeModal } = useModal()
  const { isOpen, handleOpen, handleClose } = useOpen()
  const { data } = useGoogleCalendarConnect(initialData)

  const isConnected = !!data?.google?.google_email
  const { data: googleCalendars } = useGoogleCalendars(isConnected)

  const handleClick = () => {
    openModal(MODAL.INTEGRATION_GOOGLE_CALENDAR, {
      onClose: () => closeModal(MODAL.INTEGRATION_GOOGLE_CALENDAR),
    })
  }

  return (
    <>
      <IntegrationItem
        name="Google Calendar"
        description="구글 캘린더를 연동해 면접 조율이 가능한 일정을 확인할 수 있습니다."
        image={IMAGES.GOOGLE_CALENDAR}
        isConnected={isConnected}
        isOpen={isOpen}
        onOpen={handleOpen}
        onClick={handleClick}
      >
        <IntegrationGoogleCalendarForm
          googleCalendars={googleCalendars}
          isOpen={isOpen}
          onClose={handleClose}
        />
      </IntegrationItem>
    </>
  )
}
