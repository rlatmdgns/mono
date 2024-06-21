import React from 'react'

import * as Styles from './styles'
import SidebarItem from '../SidebarItem'
import {
  SIDEBAR_EVALUATOR_MENUS,
  SIDEBAR_FNB_MENUS,
} from '@/features/Sidebar/components/SidebarFNB/SidebarFNB.constants'

interface SidebarFNBProps {
  pathname: string
  isEvaluationMember: boolean
}

const SidebarFNB = ({ pathname, isEvaluationMember }: SidebarFNBProps) => {
  const menus = isEvaluationMember ? SIDEBAR_EVALUATOR_MENUS : SIDEBAR_FNB_MENUS

  return (
    <Styles.List>
      {menus.map((menu, index) => (
        <SidebarItem key={`sidebar_item_${index}`} menu={menu} pathname={pathname} />
      ))}
    </Styles.List>
  )
}

export default SidebarFNB
