'use client'

import React from 'react'
import { descriptionStyle, titleStyle, wrapper } from './styles.css'

interface HeaderProps {
  title: string | React.ReactNode
  description?: string
  children?: React.ReactNode
}

export const Header = ({title, description, children}: HeaderProps) => {
  return (
    <div className={wrapper}>
      <h3 className={titleStyle}>
        {title}
        {description && <p className={descriptionStyle}>{description}</p>}
      </h3>
      <div>{children}</div>
    </div>
  )
}
