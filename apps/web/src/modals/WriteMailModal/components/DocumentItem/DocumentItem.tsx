import React from 'react'
import * as Styles from './styles'
import { IconButton } from '@/shared/ui'

interface DocumentItemProps {
  name: string
  description: string
  onClick: (name: string) => void
}

const DocumentItem = ({ name, description, onClick }: DocumentItemProps) => {
  return (
    <Styles.Item>
      <Styles.Text>
        <Styles.Title>{name}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.Text>
      <IconButton icon="icon/cancle-line1" size="xs" onClick={() => onClick(name)} />
    </Styles.Item>
  )
}

export default DocumentItem
