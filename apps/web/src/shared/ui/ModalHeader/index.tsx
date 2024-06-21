import React from 'react'
import * as Styles from './styles'
import { IconButton, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'

interface ModalHeaderProps {
  title: string
  subTitle?: string
  info?: string
  onClick?: () => void
}

export const ModalHeader = ({ title, subTitle, info, onClick }: ModalHeaderProps) => {
  if (!title) return null

  return (
    <Styles.Header>
      <Styles.Inner>
        <Styles.Title>
          {title}
          <Tooltip text={info} disabled={!info} direction="right">
            <Icon icon="icon/info-line" color="neutralGray400" />
          </Tooltip>
        </Styles.Title>
        {subTitle && <Styles.SubTitle>{subTitle}</Styles.SubTitle>}
      </Styles.Inner>
      {onClick && (
        <IconButton icon="icon/cancle-line1" onClick={onClick} size="sm" color="neutralGray800" />
      )}
    </Styles.Header>
  )
}
