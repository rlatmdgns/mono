'use client'

import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface MultipleItemHandlerProps {
  index: number
  isDeletable: boolean
  onMoveUp: (index: number) => void
  onMoveDown: (index: number) => void
  onDelete: (index: number) => void
  isSelected: boolean
  length: number
}

export const MultipleItemHandler = ({
  index,
  isDeletable,
  onMoveUp,
  onMoveDown,
  onDelete,
  isSelected,
  length,
}: MultipleItemHandlerProps) => {
  const isUpNavigable = !!index
  const isDownNavigable = length > 1 && index !== length - 1

  if (!isSelected) return null
  return (
    <Styles.Wrapper>
      <Styles.Button onClick={() => onMoveUp(index)} disabled={!isUpNavigable} type="button">
        <Icon icon="icon/up-solid" color="neutralGray500" />
      </Styles.Button>
      <Styles.Button onClick={() => onMoveDown(index)} disabled={!isDownNavigable} type="button">
        <Icon icon="icon/down-solid" color="neutralGray500" />
      </Styles.Button>
      <Styles.Button onClick={() => onDelete(index)} disabled={!isDeletable} type="button">
        <Icon icon="icon/delete-line" color="neutralGray500" />
      </Styles.Button>
    </Styles.Wrapper>
  )
}
