import React from 'react'
import * as Styles from './styles'
import { RequestItemType } from '@/modals/RequestDocumentModal/recoil/atom'
import { IconButton } from '@/shared/ui'

interface RequestDocumentItemProps {
  item: RequestItemType
  isIncluded?: boolean
  onClick: (item: RequestItemType) => void
  onDelete: (value: string) => void
}

const RequestItem = ({ item, isIncluded, onClick, onDelete }: RequestDocumentItemProps) => {
  const isCustom = item.type === 'directInput'
  return (
    <Styles.Item $isIncluded={isIncluded} onClick={() => onClick(item)}>
      {item.value}
      {isCustom && (
        <IconButton icon="icon/cancle-line1" size="xs" onClick={() => onDelete(item.value)} />
      )}
    </Styles.Item>
  )
}

export default RequestItem
