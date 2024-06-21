'use client'

import { getContentSize, getTooltipDirection } from '@/shared/ui/Tooltip/Tooltip.function'
import React, { ReactNode, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import * as Styles from './styles'

interface TooltipProps {
  children: ReactNode
  icon?: ReactNode
  text?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  disabled?: boolean
  isOverflow?: boolean
  isLineThrough?: boolean
}

/**
 * 툴팁 컴포넌트
 * isOverflow : isOverflow : true일 경우, TooltipWrapper가 display:flex, width:95%로 설정됩니다. 이 때 tooltip이 정상적으로 동작하지 않을 경우, Tooltip의 부모 요소가 overflow:hidden이 있어야 합니다.
 */
export const Tooltip = ({
  children,
  icon,
  text,
  disabled,
  direction = 'top',
  isOverflow = false,
  isLineThrough = false,
}: TooltipProps) => {
  let tooltipDocument
  if (typeof document !== 'undefined') {
    tooltipDocument = document
  }

  const element = tooltipDocument?.getElementById('tooltip') as HTMLElement
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  if (!text) {
    return null
  }

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleOverflowMouseEnter = () => {
    if (!containerRef.current) return null

    if (containerRef.current.parentElement) {
      setIsVisible(
        containerRef.current.clientWidth >= containerRef.current.parentElement?.clientWidth,
      )
    }
  }

  const handleMouseLeave = () => setIsVisible(false)

  const renderTooltip = () => {
    if (disabled) return null
    if (!isVisible) return null

    const size = getContentSize(text)
    const position = getTooltipDirection(containerRef.current, size, direction)

    const tooltipElement = (
      <Styles.Tooltip
        className="tooltip"
        ref={tooltipRef}
        $left={position.left}
        $top={position.top}
        $direction={direction}
        $isLineThrough={isLineThrough}
      >
        {icon && <Styles.Icon>{icon}</Styles.Icon>}
        {text}
      </Styles.Tooltip>
    )
    return createPortal(tooltipElement, element)
  }

  return (
    <Styles.TooltipWrapper $isOverflow={isOverflow}>
      <div
        style={{
          display: 'flex',
          overflow: isOverflow ? 'hidden' : 'visible',
          whiteSpace: isOverflow ? 'nowrap' : 'normal',
          textOverflow: isOverflow ? 'ellipsis' : 'initial',
        }}
        ref={containerRef}
        onMouseEnter={isOverflow ? handleOverflowMouseEnter : handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {renderTooltip()}
      </div>
    </Styles.TooltipWrapper>
  )
}
