import { Controller, useFormContext } from 'react-hook-form'
import { sectionWrapper, wrapper } from '@/features/onboarding/ui/MoveSceneForm/styles.css'
import { required, sectionTitle } from '@/features/onboarding/ui/AddSequenceModal/styles.css'
import { Select } from '@/shared/ui'
import { Button } from '@repo/ui'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { SequenceInterface } from '@/entities/onboarding/types'
import { getConvertOptions } from '@/features/onboarding/lib'
import { AddSequenceValue } from '@/features/onboarding/type'

interface MoveSceneFormProps {
  type: 'freshman' | 'manager'
  d_day: number
  sequenceWithType: SequenceInterface[]
  onAdd: (data: AddSequenceValue) => void
  onUpdateSequences: () => void
}

export const MoveSceneForm = ({
  type,
  d_day,
  sequenceWithType,
  onAdd,
  onUpdateSequences,
}: MoveSceneFormProps) => {
  const { control, getValues } = useFormContext()
  const { openModal, closeModal } = useModal()

  const { defaultOptions, sequenceOptions } = getConvertOptions(
    sequenceWithType,
    <Button
      text={'시퀀스 추가'}
      style={'mono'}
      leadingIcon={'icon/plus-line'}
      leadingIconColor={'blue500'}
    />,
    d_day,
  )

  const handleAddSequenceModal = () => {
    openModal(MODAL.ADD_SEQUENCE, {
      type,
      isPublish: true,
      onClose: () => {
        closeModal(MODAL.ADD_SEQUENCE)
      },
      onClick: (data: AddSequenceValue) => {
        onAdd(data)
        onUpdateSequences()
      },
    })
  }

  return (
    <div className={wrapper}>
      <div className={sectionWrapper}>
        <p className={sectionTitle}>시나리오</p>
        <Select options={[]} disabled placeholder={'현재 시나리오'} />
      </div>
      <div className={sectionWrapper}>
        <p className={sectionTitle}>
          도착 시퀀스 선택
          <span className={required}>*</span>
        </p>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Select
              options={sequenceOptions}
              defaultValue={defaultOptions}
              onChange={(options) => {
                if (options.value === 'add_sequence') {
                  return handleAddSequenceModal()
                }
                onChange(options)
              }}
              value={value}
            />
          )}
          name={'move_sequence'}
        />
      </div>
    </div>
  )
}
