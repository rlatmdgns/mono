import { OutboundCalendar } from '@/entities/apps/types/calendar'

export const outboundCalendarsMap = (calendars: OutboundCalendar[], name: string) => {
  return calendars?.map((calendar) => {
    if (calendar?.calendar_name === name) {
      return {
        ...calendar,
        is_outbound: true,
      }
    }
    return {
      ...calendar,
      is_outbound: false,
    }
  })
}

export const getOutboundCalendarName = (calendars?: OutboundCalendar[]) => {
  if (!calendars) return ''
  return calendars?.filter((calendar) => calendar.is_outbound)[0]?.calendar_name
}
