import {
  dot,
  dotInformation,
  dotWrapper,
  listStyle,
} from '@/widgets/onboarding/ui/Sequences/styles.css'
import { Sequence } from '@/features/onboarding/ui'
import { getDdayText } from '@/features/onboarding/lib'
import React from 'react'
import {
  HandleAddSequence,
  HandleDeleteSequence,
  HandleUpdateSequence,
} from '@/features/onboarding/type'

interface SequenceRowProps {
  index: number
  managerSequence: any
  freshmanSequence: any
  isPublish: boolean
  onAdd: HandleAddSequence
  onUpdate: HandleUpdateSequence
  onRemove: HandleDeleteSequence
}

export const SequenceRow = ({
  index,
  managerSequence,
  freshmanSequence,
  isPublish,
  onAdd,
  onUpdate,
  onRemove,
}: SequenceRowProps) => {
  const handleDeleteSequence = (index: number, type: 'manager' | 'freshman') => {
    onRemove(index, type)
  }

  const handleUpdateSequence = (index: number, type: 'manager' | 'freshman', d_day: number) => {
    onUpdate(index, type, d_day)
  }

  const isDots = freshmanSequence?.isAppend || managerSequence?.isAppend

  const isNotVisible = !freshmanSequence?.isAppend && !managerSequence?.isAppend
  if (isNotVisible) return null
  return (
    <li className={listStyle}>
      <Sequence
        index={index}
        d_day={freshmanSequence?.d_day}
        sequence={freshmanSequence}
        type={'freshman'}
        charger={'신규 입사자'}
        isPublish={isPublish}
        onAdd={onAdd}
        onUpdate={handleUpdateSequence}
        onRemove={handleDeleteSequence}
      />
      {isDots && (
        <div className={dotWrapper}>
          <div className={dot}></div>
          <p className={dotInformation}>{getDdayText(managerSequence?.d_day)}</p>
        </div>
      )}
      <Sequence
        index={index}
        d_day={managerSequence?.d_day}
        sequence={managerSequence}
        type={'manager'}
        charger={'온보딩 담당자'}
        isPublish={isPublish}
        onAdd={onAdd}
        onUpdate={handleUpdateSequence}
        onRemove={handleDeleteSequence}
      />
    </li>
  )
}
