import React from 'react'
import { tabContentStyle } from '../styles.css'

interface TabContentProps {
  isActive: boolean
  content: React.ReactNode
}

export const TabContent = ({ content, isActive }: TabContentProps) => {
  if (!isActive) return null

  return <div className={tabContentStyle}>{content}</div>
}
