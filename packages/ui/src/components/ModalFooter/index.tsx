import React from 'react'
import { selectWrapper, wrapper } from './styles.css'

interface ModalFooterProps {
  children: React.ReactNode
  hasSelect?: boolean
  width?: string
}

export const ModalFooter = ({ children, hasSelect = false, width = '100%' }: ModalFooterProps) => {
  const components = React.Children.toArray(children)
  const leftButton = components[0]
  const rightButton = components[components.length - 1]
  const select = components[1]

  return (
    <div className={wrapper({ hasSelect })} style={{ width }}>
      {leftButton}
      {hasSelect && <div className={selectWrapper}>{select}</div>}
      {rightButton}
    </div>
  )
}
