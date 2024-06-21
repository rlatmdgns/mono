import { cookies } from 'next/headers'

import SidebarLayoutContent from '@/widgets/SidebarLayout/SidebarLayoutContent'
import getServerUser from '@/entities/user/api/getServerUser'
import getServerEnterpriseInformation from '@/entities/enterprise/api/getServerEnterpriseInformation'
import getServerSidebar from '@/sidebar/getServerSidebar'
import React from 'react'

const Sidebar = React.lazy(() => import('@/features/Sidebar'))

interface SidebarLayoutProps {
  children: React.ReactNode
}

const SidebarLayout = async ({ children }: SidebarLayoutProps) => {
  const initialSidebar = await getServerSidebar()
  const result = await Promise.all([getServerUser(), getServerEnterpriseInformation()])
  const initialUser = result[0]
  const initialEnterpriseInformation = result[1]
  const width = cookies().get('sidebarWidth')?.value || '260'

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        initialSidebar={initialSidebar}
        initialUser={initialUser}
        initialEnterpriseInformation={initialEnterpriseInformation}
        sidebarWidth={width}
      />
      <SidebarLayoutContent>{children}</SidebarLayoutContent>
    </div>
  )
}

export default SidebarLayout
