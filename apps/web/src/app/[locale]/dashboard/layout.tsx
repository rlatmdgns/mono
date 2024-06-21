import React from 'react'
import SidebarLayout from '@/widgets/SidebarLayout'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout>{children}</SidebarLayout>
}
