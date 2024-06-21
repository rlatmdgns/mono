import { Header } from '@/shared/ui'
import SidebarLayout from '@/widgets/SidebarLayout'
import React from 'react'
import { CalendarTitle } from '@/app/[locale]/calendar/ui/CalendarTitle'

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      <div style={{ background: '#F9FAFB' }}>
        <Header title={<CalendarTitle />} />
        {children}
      </div>
    </SidebarLayout>
  )
}
