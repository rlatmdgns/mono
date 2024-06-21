import getServerPostings from '@/services/posting/getPostings/getServerPostings'
import getServerSchedules from '@/app/[locale]/calendar/api/getServerSchedules'
import getServerScheduleOncoming from '@/app/[locale]/calendar/api/getServerScheduleOncoming'
import { CalendarContainer } from '@/app/[locale]/calendar/ui/CalendarContainer'
import getGoogleSchedulesSearch from '@/services/interview/getGoogleSchedulesSearch/getGoogleSchedulesSearch'
import dayjs from 'dayjs'

interface CalendarPageProp {
  searchParams: {
    schedule_id: string
  }
}

export default async function CalendarPage({ searchParams }: CalendarPageProp) {
  const result = await Promise.all([
    getServerPostings(),
    getServerSchedules(),
    getServerScheduleOncoming(),
  ])
  const initialFolder = result[0]
  const initialSchedule = result[1]
  const initialOnComingSchedule = result[2]

  return (
    <CalendarContainer
      initialFolder={initialFolder}
      initialSchedule={initialSchedule}
      initialOnComingSchedule={initialOnComingSchedule}
      scheduleId={searchParams.schedule_id}
    />
  )
}
