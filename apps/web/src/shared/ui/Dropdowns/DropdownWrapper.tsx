'use client'

import * as Styles from './styles'
import DropdownMenu from './DropdownMenu'
import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@repo/ui'

interface DropdownProps {
  children: React.ReactNode[] | React.ReactNode
  button: React.ReactNode
  direction?: 'left' | 'right'
  zIndex?: number
  disabled?: boolean
  isTypeSelect?: boolean
  isNotPortal?: boolean
  isAutoClose?: boolean
  isParentStatusClosed?: boolean
}

const DropdownWrapper = ({
  children,
  button,
  zIndex,
  isParentStatusClosed,
  direction = 'right',
  isNotPortal = false,
  disabled = false,
  isAutoClose = false,
  isTypeSelect = false,
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [targetRect, setTargetRect] = useState(null)

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsOpen(!isOpen)
    setTargetRect(containerRef?.current?.getBoundingClientRect() as any)
  }

  const handleParentStatusClose = () => {
    if (isParentStatusClosed) return
    setIsOpen(false)
  }

  useEffect(() => {
    handleParentStatusClose()
  }, [isParentStatusClosed])

  return (
    <Styles.DropdownWrapper ref={containerRef}>
      <Styles.DropdownButtonBox onClick={handleToggle}>
        {button}
        {isTypeSelect && (
          <Styles.DropdownButtonIcon $isOpen={isOpen}>
            <Icon icon={'icon/down-solid'} color={'neutralGray600'} />
          </Styles.DropdownButtonIcon>
        )}
      </Styles.DropdownButtonBox>

      <DropdownMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        targetRect={targetRect}
        content={children}
        direction={direction}
        zIndex={zIndex}
        isNotPortal={isNotPortal}
        isAutoClose={isAutoClose}
        disabled={disabled}
      />
    </Styles.DropdownWrapper>
  )
}

export default DropdownWrapper
