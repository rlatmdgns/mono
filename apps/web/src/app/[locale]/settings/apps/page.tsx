import React from 'react'
import { getServerConnectGoogle } from '@/entities/apps/api/getServerConnectGoogle'
import { getServerConnectSlack } from '@/entities/apps/api/getServerConnectSlack'
import { AppsPage } from '@/pageModules/apps'

const Apps = async () => {
  const initialGoogleCalendarData = await getServerConnectGoogle()
  // const initialGoogleCalendars = await getServerGoogleCalendars()
  const initialSlackData = await getServerConnectSlack()

  // console.log(initialGoogleCalendarData, 'initialGoogleCalendarData')
  return (
    <AppsPage
      initialGoogleCalendarData={initialGoogleCalendarData}
      // initialGoogleCalendars={initialGoogleCalendars}
      initialSlackData={initialSlackData}
    />
  )
}

export default Apps
