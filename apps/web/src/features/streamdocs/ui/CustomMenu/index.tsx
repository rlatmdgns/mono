import React from 'react'
import { wrapper } from '@/features/streamdocs/ui/CustomMenu/styles.css'
import { Button } from '@repo/ui'
import { Dropdown } from '@/shared/ui'
import { MaskingButton } from '@/features/streamdocs/ui/MaskingButton'
import { ResetMaskingButton } from '@/features/streamdocs/ui/ResetMaskingButton'
import { ViewerSwitch } from '@/features/streamdocs/ui/ViewerSwitch'

interface CustomMenuProps {
  isEvaluator: boolean
  isOriginalView: boolean
  isMasking?: boolean
  onRedaction: () => void
  onViewChange: () => void
  activeFileId: number
}

export const CustomMenu = ({
  isEvaluator,
  isMasking,
  onRedaction,
  onViewChange,
  isOriginalView,
  activeFileId,
}: CustomMenuProps) => {
  const isNoneFile = activeFileId === 0
  if (isEvaluator) return null
  if (isNoneFile) return null

  return (
    <div className={wrapper}>
      <Dropdown
        button={
          <Button leadingIcon="icon/more-solid" state="secondary" style="fill-weak" size="sm" />
        }
        isNotPortal
        direction="right"
      >
        <MaskingButton
          isOriginalView={isOriginalView}
          isEvaluator={isEvaluator}
          onClick={onRedaction}
        />
        <ResetMaskingButton
          isEvaluator={isEvaluator}
          isMasking={isMasking}
          activeFileId={activeFileId}
        />
        <ViewerSwitch isEvaluator={isEvaluator} isMasking={isMasking} onChange={onViewChange} />
      </Dropdown>
    </div>
  )
}
