'use client'

import React from 'react'
import * as Style from './styles'
import { Icon } from '@repo/ui'
import { IconNames } from "@repo/ui/src/components/Icon";

interface MailMenuItemProps {
  readonly title: string
  readonly link: string
  readonly count: number
  readonly isActive?: boolean
  readonly icon: IconNames
}

const MailMenuItem = ({icon, title, link, count, isActive}: MailMenuItemProps) => {
  return (
    <Style.Item $isActive={isActive}>
      <Style.StyledLink href={link}>
        <Style.Title>
          <Icon icon={icon} color="neutralGray800"/>
          {title}
        </Style.Title>
        {count}
      </Style.StyledLink>
    </Style.Item>
  )
}

export default MailMenuItem
