'use client'

import React from 'react'
import * as Styles from './styles'
import { GetConnectGoogleCalendarResponse } from '@/entities/apps/types/calendar'
import { GetConnectSlackResponse } from '@/entities/apps/types/slack'
import { GoogleCalendar, IntegrationSlack } from '@/widgets/apps'

interface AppsPageProps {
  initialGoogleCalendarData: GetConnectGoogleCalendarResponse
  initialSlackData: GetConnectSlackResponse
}

export const AppsPage = ({ initialGoogleCalendarData, initialSlackData }: AppsPageProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>서비스 연동</Styles.Title>
      <Styles.Content>
        <Styles.Item>
          <Styles.AppTitle>구글 연동</Styles.AppTitle>
          <GoogleCalendar initialData={initialGoogleCalendarData} />
        </Styles.Item>
        <Styles.Item>
          <Styles.AppTitle>슬랙 연동</Styles.AppTitle>
          <IntegrationSlack initialData={initialSlackData} />
        </Styles.Item>
      </Styles.Content>
    </Styles.Wrapper>
  )
}
