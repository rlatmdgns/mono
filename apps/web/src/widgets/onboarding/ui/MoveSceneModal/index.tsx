import { FormProvider, useForm } from 'react-hook-form'
import { Button, ModalFooter, ModalHeader } from '@repo/ui'
import { ModalLayout } from '@/shared/ui'
import { MoveSceneForm } from '@/features/onboarding/ui'
import { SequenceInterface } from '@/entities/onboarding/types'
import { AddSequenceValue } from '@/features/onboarding/type'
import { useEffect, useState } from 'react'

interface MoveSceneModalProps {
  type: 'freshman' | 'manager'
  d_day: number
  onClick: (d_day: number) => void
  onAdd: (data: AddSequenceValue) => void
  onGetSequences: () => SequenceInterface[]
  onClose: () => void
}

const MoveSceneModal = ({
  type,
  d_day,
  onGetSequences,
  onClick,
  onAdd,
  onClose,
}: MoveSceneModalProps) => {
  const [sequenceWithType, setSequenceWithType] = useState<SequenceInterface[]>([])
  const methods = useForm()
  const handleMoveScene = () => {
    const d_day = methods.getValues('move_sequence')?.value
    onClick(d_day)
  }

  const handleSequenceWithTypeUpdate = () => {
    setSequenceWithType(onGetSequences())
  }

  useEffect(() => {
    handleSequenceWithTypeUpdate()
  }, [])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <div>
          <ModalHeader title="작업 이동" onClick={onClose} />
          <MoveSceneForm
            type={type}
            d_day={d_day}
            onAdd={onAdd}
            sequenceWithType={sequenceWithType}
            onUpdateSequences={handleSequenceWithTypeUpdate}
          />
          <ModalFooter>
            <Button
              text="취소"
              state="secondary"
              style="mono"
              size="md"
              width="58px"
              onClick={onClose}
            />
            <Button text="이동" size="md" width="58px" onClick={handleMoveScene} />
          </ModalFooter>
        </div>
      </FormProvider>
    </ModalLayout>
  )
}

export default MoveSceneModal
