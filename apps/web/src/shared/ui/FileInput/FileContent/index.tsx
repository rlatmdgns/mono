import * as Styles from './styles'
import { IconBoxButton } from '@/shared/ui'
import React from 'react'
import { Icon } from '@repo/ui'

interface FileContentProps {
  file?: File
  onClick?: () => void
}

export const FileContent = ({ file, onClick }: FileContentProps) => {
  if (!file) return null
  return (
    <Styles.Wrapper>
      <Icon icon="icon/document-solid" color="blue500" />
      <Styles.FileName>{file?.name}</Styles.FileName>
      {onClick && (
        <IconBoxButton
          onClick={onClick}
          size="xs"
          state="standard"
          style="mono"
          icon="icon/cancle-line1"
        />
      )}
    </Styles.Wrapper>
  )
}
