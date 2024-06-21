import React from 'react'
import * as Styles from './styles'

interface SettingTitleProps {
  title: string
}

const SettingTitle = ({ title }: SettingTitleProps) => {
  return <Styles.Title>{title}</Styles.Title>
}

export default SettingTitle
