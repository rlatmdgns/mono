import { Icon } from '../../Icon'
import { Label } from '../../Label'
import { TabButtonType } from '../NavigationTabs.interface'
import { tabButtonStyle } from '../styles.css'

interface TabButtonProps extends TabButtonType {
  index: number
  isActive: boolean
  selectedTab: number
  onClick: (index: number) => void
}

export const TabButton = ({
  index,
  size,
  icon,
  checkbox,
  radio,
  label,
  isActive,
  selectedTab,
  onClick,
}: TabButtonProps) => {
  const iconColor = isActive ? 'neutralGray800' : 'neutralGray500'

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    event.preventDefault()

    const currentButton = event.target
    const futureButton = findNextButton(event.key, currentButton)

    if (!futureButton) return

    futureButton.focus()
  }

  const findNextButton = (key: string, currentButton: any) => {
    if (key === 'ArrowRight' && selectedTab < 2) {
      onClick(selectedTab + 1)
    }

    if (key === 'ArrowLeft' && selectedTab > 0) {
      onClick(selectedTab - 1)
    }

    const direction = key === 'ArrowRight' ? 'ArrowRight' : 'ArrowLeft'

    let futureButton = currentButton[direction]

    while (futureButton && futureButton.hasAttribute('disabled')) {
      futureButton = futureButton[direction]
    }

    return futureButton
  }

  return (
    <li
      className={tabButtonStyle({ size, isActive })}
      onKeyDown={handleKeyDown}
      onClick={() => onClick(index)}
      tabIndex={0}
    >
      {icon && <Icon icon={icon} color={iconColor} />}
      {checkbox && checkbox}
      {radio && radio}
      <Label label={label} size={size} isActive={isActive} />
    </li>
  )
}
