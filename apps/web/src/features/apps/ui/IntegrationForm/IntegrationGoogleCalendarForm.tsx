import React, { useEffect } from 'react'
import * as Styles from './styles'
import { Button, CheckBox, RadioIconButton, Tooltip } from '@/shared/ui'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useUnConnectGoogleCalendar } from '@/features/apps/hooks/useUnConnectGoogleCalendar'
import { GoogleCalendars } from '@/entities/apps/types/calendar'
import { useUpdateGoogleCalendars } from '@/entities/apps/hooks/useUpdateGoogleCalendars'
import { getOutboundCalendarName, outboundCalendarsMap } from '@/features/apps/model'
import { Icon } from '@repo/ui'

interface IntegrationGoogleCalendarFormProps {
  isOpen?: boolean
  onClose: () => void
  googleCalendars?: GoogleCalendars
}

export const IntegrationGoogleCalendarForm = ({
  isOpen,
  onClose,
  googleCalendars,
}: IntegrationGoogleCalendarFormProps) => {
  const { openModal, closeModal } = useModal()
  const method = useForm({
    defaultValues: {
      inbound_calendars: googleCalendars?.inbound_calendars,
      outbound_calendars: googleCalendars?.outbound_calendars,
      outbound_calendar: getOutboundCalendarName(googleCalendars?.outbound_calendars),
    },
  })

  const { control, formState, handleSubmit } = method
  const { isDirty } = formState

  const { unConnectGoogleMutate } = useUnConnectGoogleCalendar()
  const { updateCalendarMutate } = useUpdateGoogleCalendars()
  const handleUnConnect = () => {
    openModal(MODAL.CONFIRM, {
      title: 'Google Calendar 연동을 해제하시겠습니까?',
      onClick: () => {
        unConnectGoogleMutate()
        closeModal(MODAL.CONFIRM)
        onClose()
      },
      textConfirm: '해제하기',
    })
  }

  const handleSave = async (values: FieldValues) => {
    const payload = {
      inbound_calendars: values.inbound_calendars,
      outbound_calendars: outboundCalendarsMap(values.outbound_calendars, values.outbound_calendar),
    }
    updateCalendarMutate(payload)
  }

  useEffect(() => {
    method.reset({
      ...googleCalendars,
      outbound_calendar: getOutboundCalendarName(googleCalendars?.outbound_calendars),
    })
  }, [googleCalendars])

  if (!isOpen) return null

  return (
    <Styles.Form onSubmit={handleSubmit(handleSave)}>
      <Styles.Content>
        <Styles.Title>
          가져올 일정
          <Tooltip
            text="관리자, 채용 담당자가 선택한 캘린더의 일정을 보고 면접 요청 일정을 선택할 수 있습니다."
            direction="right"
          >
            <Icon icon="icon/info-line" color="neutralGray400" />
          </Tooltip>
        </Styles.Title>
        {googleCalendars?.inbound_calendars?.map((calendar, index) => (
          <Controller
            key={`inbound_calendars.${calendar.id}`}
            render={({ field }) => (
              <Styles.InputBox>
                <CheckBox isChecked={field.value} onChange={field.onChange} />
                <Icon icon="icon/calendar-line" color="neutralGray800" />
                {calendar?.calendar_name}
              </Styles.InputBox>
            )}
            control={control}
            name={`inbound_calendars.${index}.is_inbound`}
          />
        ))}
      </Styles.Content>
      <Styles.Content>
        <Styles.Title>
          내보낼 일정
          <Tooltip text="확정된 면접 일정을 선택한 캘린더에 등록합니다." direction="right">
            <Icon icon="icon/info-line" color="neutralGray400" />
          </Tooltip>
        </Styles.Title>
        {googleCalendars?.outbound_calendars?.map((calendar) => (
          <Controller
            key={`outbound_calendars.${calendar.id}`}
            render={({ field }) => (
              <Styles.InputBox>
                <RadioIconButton
                  state="positive"
                  checked={field.value === calendar?.calendar_name}
                  name={'outbound_calendar'}
                  onChange={() => field.onChange(calendar?.calendar_name)}
                />
                <Icon icon="icon/calendar-line" color="neutralGray800" />
                {calendar?.calendar_name}
              </Styles.InputBox>
            )}
            control={control}
            name={`outbound_calendar`}
          />
        ))}
      </Styles.Content>
      <Styles.FormButtonBox>
        <Button
          text="연동 해제"
          state="warning"
          style="mono"
          width="68px"
          size="xs"
          onClick={handleUnConnect}
        />
        <Button
          type="submit"
          text="저장"
          state="primary"
          width="68px"
          style="fill-strong"
          size="xs"
          disabled={!isDirty}
        />
      </Styles.FormButtonBox>
    </Styles.Form>
  )
}
