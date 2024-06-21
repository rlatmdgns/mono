import React from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface WarningProps {
  title: string
  description?: string
  subDescription?: string
}

export const Warning = ({ title, description, subDescription }: WarningProps) => {
  return (
    <Styles.Content>
      <Icon icon="icon/warning-solid" color="orange500" size={64} />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>
        {description}
        <br />
        {subDescription}
      </Styles.Description>
    </Styles.Content>
  )
}
