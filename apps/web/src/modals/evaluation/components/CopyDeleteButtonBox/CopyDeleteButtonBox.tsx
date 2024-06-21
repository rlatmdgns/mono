import * as Styles from './styles'
import { Icon } from '@repo/ui'
import React from 'react'

interface CopyDeleteButtonBoxProps {
  isFocused?: boolean
  onCopy: () => void
  onDelete: () => void
  isDeleteDisabled: boolean
}

const CopyDeleteButtonBox = ({
  isFocused,
  onCopy,
  onDelete,
  isDeleteDisabled,
}: CopyDeleteButtonBoxProps) => {
  if (!isFocused) return null
  return (
    <Styles.Wrapper>
      <Styles.Button onClick={onCopy} type="button">
        <Icon icon="icon/copy-solid" color="neutralGray400" />
      </Styles.Button>
      <Styles.Button onClick={onDelete} disabled={isDeleteDisabled} type="button">
        <Icon icon="icon/delete-solid" color="neutralGray400" />
      </Styles.Button>
    </Styles.Wrapper>
  )
}

export default CopyDeleteButtonBox
