import { Button } from '@repo/ui'
import { Dropdown } from '@/shared/ui'
import React from 'react'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useFormContext } from 'react-hook-form'
import { AddSequenceValue, HandleAddSequence } from '@/features/onboarding/type'

interface TaskButtonProps {
  isPublish?: boolean
  type: 'freshman' | 'manager'
  sceneIndex: number
  onAdd: HandleAddSequence
  onMoveScene: (move_d_day: number, sceneIndex: number) => void
  onDeleteSceneModal: () => void
}

export const TaskButton = ({
  isPublish,
  type,
  sceneIndex,
  onAdd,
  onMoveScene,
  onDeleteSceneModal,
}: TaskButtonProps) => {
  const { getValues } = useFormContext()
  const { openModal, closeModal } = useModal()
  const sequenceWithType = getValues(type)

  const handleMoveSceneModal = () => {
    openModal(MODAL.MOVE_SCENE, {
      d_day: sequenceWithType[sceneIndex].d_day,
      isPublish,
      type,
      onGetSequences: () => getValues(type),
      onClick: (d_day: number) => {
        onMoveScene(d_day, sceneIndex)
      },
      onAdd: (data: AddSequenceValue) => onAdd(data),
      onClose: () => {
        closeModal(MODAL.MOVE_SCENE)
      },
    })
  }

  if (isPublish) {
    return (
      <Dropdown
        button={
          <Button
            state={'secondary'}
            style={'mono'}
            leadingIcon={'icon/more-solid'}
            leadingIconColor={'neutralGray400'}
            size={'xs'}
          />
        }
        direction="left"
        zIndex={25}
        isAutoClose={true}
      >
        <Button
          text={'작업 이동'}
          state={'secondary'}
          style={'mono'}
          leadingIcon={'icon/edit-line'}
          leadingIconColor={'neutralGray700'}
          onClick={handleMoveSceneModal}
        />
        <Button
          text={'삭제'}
          state={'danger'}
          style={'mono'}
          leadingIcon={'icon/delete-solid'}
          leadingIconColor={'red500'}
          onClick={onDeleteSceneModal}
        />
      </Dropdown>
    )
  }

  return (
    <Button
      size={'xs'}
      state={'secondary'}
      style={'mono'}
      leadingIcon={'icon/cancle-solid'}
      leadingIconColor={'neutralGray300'}
      onClick={onDeleteSceneModal}
    />
  )
}
