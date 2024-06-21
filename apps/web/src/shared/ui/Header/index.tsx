'use client'

import React from 'react'
import * as Styles from './styles'

interface HeaderProps {
  title: string | React.ReactNode
  description?: string
  children?: React.ReactNode
}

export const Header = ({ title, description, children }: HeaderProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>
        {title}
        {description && <Styles.Description>{description}</Styles.Description>}
      </Styles.Title>
      <Styles.Right>{children}</Styles.Right>
    </Styles.Wrapper>
  )
}
