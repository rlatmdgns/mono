import React from 'react'
import SidebarItem from '@/features/Sidebar/components/SidebarItem'
import { ONBOARDING_MENUS } from '@/entities/onboarding/constants'
import { Menu } from './styles.css'

interface OnBoardingNavigatorProps {
  pathname: string
}

export const OnBoardingNavigator = ({ pathname }: OnBoardingNavigatorProps) => {
  return (
    <div className={Menu}>
      {ONBOARDING_MENUS.map((menu, index) => (
        <SidebarItem
          key={`sidebar_item_${index}`}
          menu={menu}
          pathname={pathname}
          color="neutralGray800"
        />
      ))}
    </div>
  )
}
