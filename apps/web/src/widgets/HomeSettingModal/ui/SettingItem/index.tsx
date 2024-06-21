import * as Styles from './styles'
import { LinkButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import React from 'react'
import { IconNames } from "@repo/ui/src/components/Icon";

interface SettingItemProps {
  href?: string
  icon: IconNames
  text: string | React.ReactNode
  state?: 'standard' | 'primary' | 'warning'
  onClick?: () => void
}

export const SettingItem = ({
                              href,
                              icon,
                              text,
                              state = 'standard',
                              onClick,
                            }: SettingItemProps) => {
  const color = state === 'warning' ? 'red500' : 'neutralGray500'

  if (!href) {
    return (
      <Styles.Item>
        <Styles.Button type="button" onClick={onClick}>
          <Icon icon={icon} color={color} size={16}/>
          {text}
        </Styles.Button>
      </Styles.Item>
    )
  }

  return (
    <Styles.Item>
      <LinkButton href={href} iconSource={icon} state={state} text={text} size="sm" width="168px"/>
    </Styles.Item>
  )
}
