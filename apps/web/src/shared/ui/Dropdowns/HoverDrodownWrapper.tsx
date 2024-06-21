'use client'

import * as Styles from './styles'
import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getDropdownDirection } from '@/shared/ui/Dropdowns/HoverDropdown.function'

interface DropdownProps {
  children: React.ReactNode
  button: React.ReactNode
  direction?: 'left' | 'right'
  isNotPortal?: boolean
  disabled?: boolean
}

const HoverDropdownWrapper = ({
  children,
  button,
  direction = 'right',
  isNotPortal = false,
  disabled = false,
}: DropdownProps) => {
  const element = document.getElementById('dropdown') as HTMLElement
  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => setIsOpen(true)
  const handleMouseLeave = () => setIsOpen(false)

  const renderDropdown = () => {
    if (!isOpen || disabled) return null
    const position = getDropdownDirection(containerRef.current, direction)
    const dropdownElement = (
      <Styles.HoverDropdownMenu
        ref={dropdownRef}
        $direction={direction}
        $top={position.top}
        $left={position.left}
        $containContainerLeft={position.containContainerLeft}
        $isNotPortal={isNotPortal}
      >
        {children}
      </Styles.HoverDropdownMenu>
    )
    return isNotPortal ? dropdownElement : createPortal(dropdownElement, element)
  }

  return (
    <Styles.DropdownWrapper ref={containerRef}>
      <Styles.DropdownButtonBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {button}
      </Styles.DropdownButtonBox>
      {renderDropdown()}
    </Styles.DropdownWrapper>
  )
}

export default HoverDropdownWrapper
