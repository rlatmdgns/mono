import React from 'react'
import { Icon } from '@repo/ui'
import { useResetStreamDocs } from '@/features/streamdocs/hooks/useResetStreamDocs'
import { Dropdown } from '@/shared/ui'

interface MaskingButtonProps {
  readonly isEvaluator: boolean
  readonly isMasking?: boolean
  readonly activeFileId: number
}

export const ResetMaskingButton = ({
  isEvaluator,
  isMasking,
  activeFileId,
}: MaskingButtonProps) => {
  const { resetStreamDocsMutate } = useResetStreamDocs(activeFileId)
  if (!isMasking) return null
  if (isEvaluator) return null

  const handleReset = async () => {
    if (!isMasking || !activeFileId) return
    resetStreamDocsMutate(activeFileId)
  }

  return (
    <Dropdown.Item onClick={handleReset}>
      <Icon icon="icon/refresh-solid" /> 편집 초기화
    </Dropdown.Item>
  )
}
