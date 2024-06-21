'use client'

import { sidebarWidthAtom } from '@/features/Sidebar/recoil'
import React from 'react'
import { useRecoilValue } from 'recoil'

interface SidebarLayoutContentProps {
  children: React.ReactNode
}

const SidebarLayoutContent = ({ children }: SidebarLayoutContentProps) => {
  const width = useRecoilValue(sidebarWidthAtom)

  return (
    <div
      style={{
        position: 'relative',
        flex: 1,
        maxWidth: `calc(100vw - ${width}px)`,
        boxShadow: '0 4px 17px 0 rgba(209, 221, 242, 0.43)',
      }}
    >
      {children}
    </div>
  )
}

export default SidebarLayoutContent
