'use client'

import { OnboardingSidebarFreshmanList } from '@/widgets/onboarding/entities'
import { ScenarioList } from '@/features/onboarding/ui/ScenarioSidebarItem/ScenarioList'
import { FreshmanName } from '@/features/onboarding/ui/ScenarioSidebarItem/FreshmanName'
import { useState } from 'react'

interface ScenarioSidebarItemProps {
  item: OnboardingSidebarFreshmanList
}
export const ScenarioSidebarItem = ({ item }: ScenarioSidebarItemProps) => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <>
      <FreshmanName item={item} isToggle={isToggle} onToggle={handleToggle} />
      <ScenarioList item={item} isToggle={isToggle} />
    </>
  )
}
