import React from 'react'
import { Icon } from '@repo/ui'
import { useRecoilValue } from 'recoil'
import { isRedactionAtom } from '@/widgets/streamdocs/recoil/atom'
import { Dropdown } from '@/shared/ui'

interface MaskingButtonProps {
  readonly isOriginalView: boolean
  readonly isEvaluator: boolean
  readonly onClick: () => void
}

export const MaskingButton = ({ isOriginalView, isEvaluator, onClick }: MaskingButtonProps) => {
  const isRedaction = useRecoilValue(isRedactionAtom)

  if (isOriginalView) return null
  if (isEvaluator) return null

  if (isRedaction) {
    return (
      <Dropdown.Item onClick={onClick}>
        <Icon icon="icon/edit-line" /> 편집 취소
      </Dropdown.Item>
    )
  }
  return (
    <Dropdown.Item onClick={onClick}>
      <Icon icon="icon/edit-line" /> 민감 정보 편집
    </Dropdown.Item>
  )
}
