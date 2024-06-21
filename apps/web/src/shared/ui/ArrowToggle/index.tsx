import React from 'react'
import { Icon } from '@repo/ui'
import { colorType, IconNames } from "@repo/ui/src/components/Icon";

interface ArrowToggleProps {
  icon: IconNames
  color?: colorType
  expanded?: boolean
  onClick?: () => void
  size?: number
}

export const ArrowToggle = ({icon, color, expanded, size = 16, onClick}: ArrowToggleProps) => {
  return (
    <Icon
      icon={icon}
      color={color}
      size={size}
      style={{transform: expanded ? 'rotate(180deg)' : 'rotate(0)'}}
      onClick={onClick}
    />
  )
}
