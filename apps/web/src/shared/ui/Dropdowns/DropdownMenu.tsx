import * as Styles from './styles'
import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface DropdownProps {
  isOpen: boolean
  onClose: () => void
  targetRect: DOMRect | null
  content: React.ReactNode
  direction?: 'left' | 'right'
  zIndex?: number
  disabled?: boolean
  isNotPortal?: boolean
  isAutoClose?: boolean
}

const DropdownMenu = ({
  isOpen,
  onClose,
  targetRect,
  content,
  direction,
  zIndex,
  disabled,
  isNotPortal,
  isAutoClose,
}: DropdownProps) => {
  let location: Document | null = null
  if (typeof document !== 'undefined') {
    location = document
  }
  const element = location?.getElementById('dropdown') as HTMLElement
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({
    opacity: '0',
  })

  const handleOutSideClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    if (dropdownRef.current?.contains(event.target as Node)) return
    onClose()
  }

  const handleButtonClick = () => {
    if (!isAutoClose) return
    onClose()
  }

  const setPosition = () => {
    if (!isOpen || !dropdownRef.current || !targetRect) return

    const windowHeight = window.innerHeight

    const dropdownWidth = dropdownRef.current.clientWidth
    const dropdownHeight = dropdownRef.current.clientHeight

    const GAP = 8

    const {
      top: containerOffsetTop,
      bottom: containerOffsetBottom,
      x: containerOffsetLeft,
      width: containerWidth,
      height: containerHeight,
    } = targetRect

    const isDropdownBelowOverflow =
      containerOffsetBottom + containerHeight + dropdownHeight > windowHeight
    const isPositionLeft = direction === 'left'

    const positionRightValue = containerOffsetLeft + containerWidth - dropdownWidth
    const topValue = isDropdownBelowOverflow ? 'auto' : containerOffsetTop + containerHeight + GAP
    const leftValue = isPositionLeft ? containerOffsetLeft : positionRightValue
    const bottomValue = isDropdownBelowOverflow
      ? windowHeight - containerOffsetBottom + containerHeight + GAP
      : 'auto'

    return setPositionStyle({
      top: topValue,
      left: leftValue,
      bottom: bottomValue,
    })
  }

  useEffect(() => {
    setPosition()
  }, [isOpen, targetRect])

  if (!isOpen || disabled) return null

  const dropdownElement = (
    <Styles.DropdownMenu onClick={handleOutSideClick} $isNotPortal={isNotPortal} $zIndex={zIndex}>
      <Styles.DropdownMenuContainer
        ref={dropdownRef}
        style={{
          ...positionStyle,
        }}
        onClick={handleButtonClick}
      >
        {content}
      </Styles.DropdownMenuContainer>
    </Styles.DropdownMenu>
  )

  return isNotPortal ? dropdownElement : createPortal(dropdownElement, element)
}

export default DropdownMenu
