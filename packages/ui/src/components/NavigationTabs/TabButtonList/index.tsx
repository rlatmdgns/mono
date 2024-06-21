import { TabButtonType } from '../NavigationTabs.interface'
import { tabButtonListStyle } from '../styles.css'
import { TabButton } from './TabButton'

interface TabButtonListProps {
  size?: 'md' | 'lg'
  buttons: TabButtonType[]
  selectedTab: number
  onClick: (index: number) => void
}

export const TabButtonList = ({
  size = 'md',
  buttons,
  selectedTab,
  onClick,
}: TabButtonListProps) => {
  return (
    <ul className={tabButtonListStyle}>
      {buttons.map((button, index) => (
        <TabButton
          key={`tab_button_${index}`}
          index={index}
          size={size}
          isActive={selectedTab === index}
          selectedTab={selectedTab}
          onClick={onClick}
          {...button}
        />
      ))}
    </ul>
  )
}
