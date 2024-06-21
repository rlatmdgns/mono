interface Google {
  google_calendar_name: string | null
  google_email: string | null
  is_used: boolean
}

export interface GetConnectGoogleCalendarResponse {
  google: Google
  success: boolean
}

export interface GoogleCalendars {
  inbound_calendars: InboundCalendar[]
  outbound_calendars: OutboundCalendar[]
  success?: boolean
}

export interface OutboundCalendar extends GoogleCalendar {
  is_outbound: boolean
}

interface InboundCalendar extends GoogleCalendar {
  is_inbound: boolean
}

export interface GoogleCalendar {
  id: number
  calendar_name?: string
}
