import React from 'react'
import { Icon, Switch } from '@repo/ui'
import { useRecoilValue } from 'recoil'
import { isOriginalViewAtom } from '@/widgets/streamdocs/recoil/atom'
import { Dropdown } from '@/shared/ui'
import { originalView, originalViewText } from '@/features/streamdocs/ui/CustomMenu/styles.css'

interface ViewerSwitchProps {
  readonly isEvaluator: boolean
  readonly onChange: () => void
  readonly isMasking?: boolean
}

export const ViewerSwitch = ({ isEvaluator, isMasking, onChange }: ViewerSwitchProps) => {
  const isOriginalView = useRecoilValue(isOriginalViewAtom)

  if (!isMasking) return null
  if (isEvaluator) return null

  return (
    <Dropdown.Item>
      <div className={originalView}>
        <div className={originalViewText}>
          <Icon icon="icon/show-line" /> 원본 보기
        </div>
        <Switch onChange={onChange} isChecked={isOriginalView} size="xs" />
      </div>
    </Dropdown.Item>
  )
}
