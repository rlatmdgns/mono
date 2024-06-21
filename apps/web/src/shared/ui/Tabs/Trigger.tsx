import { TriggerStates } from './Tabs.interface'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { selectedTabState } from './atom'
import { TRIGGER_STYLES } from './Tabs.constants'
import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { IconNames } from "@repo/ui/src/components/Icon";

interface TriggerProps {
  state: TriggerStates
  index: number
  title?: string
  icon?: IconNames
  disabled?: boolean
}

const Trigger = ({state, index, title, icon, disabled = false}: TriggerProps) => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState)

  const isActive = selectedTab === index
  const stylePreset = TRIGGER_STYLES[state]

  const handleTabChange = (index: number) => {
    setSelectedTab(index)
  }

  const handlePressArrow = (event: React.KeyboardEvent<HTMLLIElement>) => {
    event.preventDefault()

    const currentTrigger = event.target
    const futureTrigger = findFutureTrigger(event.key, currentTrigger)

    if (!futureTrigger) return

    futureTrigger.focus()
    setSelectedTab(futureTrigger.dataset['triggerValue'])
  }

  const findFutureTrigger = (key: string, currentTrigger: any) => {
    if (key === 'ArrowRight' && selectedTab < 2) {
      setSelectedTab(selectedTab + 1)
    }

    if (key === 'ArrowLeft' && selectedTab > 0) {
      setSelectedTab(selectedTab - 1)
    }

    const direction = key === 'ArrowRight' ? 'ArrowRight' : 'ArrowLeft'

    let futureTrigger = currentTrigger[direction]

    while (futureTrigger && futureTrigger.hasAttribute('disabled')) {
      futureTrigger = futureTrigger[direction]
    }

    return futureTrigger
  }

  useEffect(() => {
    return () => {
      setSelectedTab(0)
    }
  }, [])

  return (
    <Styles.Trigger
      tabIndex={0}
      $isActive={isActive}
      onClick={() => handleTabChange(index)}
      onKeyDown={handlePressArrow}
      disabled={disabled}
      $color={stylePreset.color}
      $state={state}
      $backgroundColor={stylePreset.backgroundColor}
      $boxShadow={stylePreset.boxShadow}
      $borderColor={stylePreset.borderColor}
    >
      {icon && <Icon icon={icon} color={isActive ? stylePreset.color : 'neutralGray400'}/>}
      {title && title}
    </Styles.Trigger>
  )
}

export default Trigger
