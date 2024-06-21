import * as Styles from './styles'
import React from 'react'
import { Icon } from '@repo/ui'
import { IconNames } from "@repo/ui/src/components/Icon";

interface EmptyProps {
  title: string
  description?: string
  iconSource?: IconNames
  children?: React.ReactNode
}

export const Empty = ({title, description, iconSource, children}: EmptyProps) => {
  return (
    <Styles.Wrapper>
      {iconSource && <Icon icon={iconSource} size={40} color="neutralGray300"/>}
      <Styles.Title>{title}</Styles.Title>
      {description && <Styles.Description>{description}</Styles.Description>}
      {children}
    </Styles.Wrapper>
  )
}
