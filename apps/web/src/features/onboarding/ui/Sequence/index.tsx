'use client'
import {
  sequenceCharge,
  sequenceDummy,
  sequenceHeader,
  sequenceStyle,
  sequenceTitle,
  sequenceWrapper,
  tasks,
} from '@/features/onboarding/ui/Sequence/styles.css'
import { Button } from '@repo/ui'
import { Task } from '@/features/onboarding/ui'
import { useModal } from '@/shared/hooks'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { CurrentAddSceneAtom } from '@/features/onboarding/recoil/atom'
import { getDdayText, getModalKey } from 'features/onboarding/lib'
import { AddScenes } from '@/features/onboarding/ui/Sequence/AddScenes'
import { Dropdown, Toast } from '@/shared/ui'
import React from 'react'
import {
  HandleAddSequence,
  HandleDeleteSequence,
  HandleUpdateSequence,
} from '@/features/onboarding/type'
import { MODAL } from '@/shared/constants'
import { SequenceInterface } from '@/entities/onboarding/types'
import { moveScene } from '@/pageModules/create-scenario/model/updateScene'

interface Scene {
  type: string
  title: string
  contents: string
}

interface SequenceProps {
  type: 'manager' | 'freshman'
  index: number
  d_day: number
  charger: string
  sequence: SequenceInterface
  isPublish?: boolean
  onAdd: HandleAddSequence
  onRemove: HandleDeleteSequence
  onUpdate: HandleUpdateSequence
}

export const Sequence = ({
  type,
  index,
  d_day,
  charger,
  sequence,
  onAdd,
  onRemove,
  onUpdate,
  isPublish,
}: SequenceProps) => {
  const { control, getValues, watch, setValue } = useFormContext()
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: `[${type}][${index}].scenes`,
  })

  const scenesFields = watch(`[${type}][${index}].scenes`)

  const [currentAddScene, setCurrentAddScene] = useRecoilState(CurrentAddSceneAtom)
  const resetCurrentAddScene = useResetRecoilState(CurrentAddSceneAtom)

  const isCurrentAddScene =
    currentAddScene.status && currentAddScene.index === index && currentAddScene.type === type

  const { openModal, closeModal } = useModal()

  const handleResetCurrentAddScene = () => {
    resetCurrentAddScene()
  }

  const handleAddSceneOpen = () => {
    if (type === currentAddScene.type) {
      return setCurrentAddScene({
        status: !currentAddScene.status,
        index,
        type,
      })
    }

    resetCurrentAddScene()
    setCurrentAddScene({
      status: true,
      index,
      type,
    })
  }

  const handleModifySequence = (index: number, type: 'freshman' | 'manager') => {
    openModal(MODAL.MODIFY_SEQUENCE, {
      isPublish,
      authority: type,
      onClick: (d_day: number) => {
        onUpdate(index, type, d_day)
      },
      onClose: () => closeModal(MODAL.MODIFY_SEQUENCE),
    })
  }

  const handleDeleteSequence = (index: number, type: 'freshman' | 'manager') => {
    onRemove(index, type)
  }

  const handleSceneAdd = (key: string) => {
    const modalKey = getModalKey(key)

    if (!modalKey) return

    openModal(modalKey, {
      isFreshman: type === 'freshman',
      onClick: (data: any) => {
        append(data)
        Toast.success('씬이 추가되었습니다.')
        closeModal(modalKey)
      },
      onClose: () => {
        closeModal(modalKey)
      },
    })
    handleResetCurrentAddScene()
  }

  const handleMoveScene = (move_d_day: number, sceneIndex: number) => {
    moveScene(type, sceneIndex, d_day, move_d_day, getValues, setValue, closeModal)
  }

  const handleDeleteScene = (index: number) => {
    remove(index)
  }

  const handleUpdateScene = (index: number, data: any) => {
    update(index, data)
  }

  if (!sequence?.isAppend) return <section className={sequenceDummy}></section>

  return (
    <div className={sequenceWrapper}>
      <section
        className={sequenceStyle({
          type,
        })}
      >
        <div className={sequenceHeader}>
          <h3 className={sequenceTitle}>{getDdayText(d_day)}</h3>
          <div className={'handle'}>
            <Dropdown
              button={
                <Button
                  state={'secondary'}
                  style={'mono'}
                  leadingIcon={'icon/more-solid'}
                  leadingIconColor={'neutralGray400'}
                  size={'xs'}
                  onClick={handleResetCurrentAddScene}
                />
              }
              direction="left"
              zIndex={25}
              isAutoClose={true}
            >
              <Button
                text={'수정'}
                state={'secondary'}
                style={'mono'}
                leadingIcon={'icon/edit-line'}
                leadingIconColor={'neutralGray700'}
                onClick={() => handleModifySequence(index, type)}
              />
              <Button
                text={'삭제'}
                state={'danger'}
                style={'mono'}
                leadingIcon={'icon/delete-solid'}
                leadingIconColor={'red500'}
                onClick={() => handleDeleteSequence(index, type)}
              />
            </Dropdown>
          </div>
        </div>
        <article className={tasks}>
          {scenesFields.map((scene: any, sceneIndex: number) => {
            return (
              <Task
                key={`${type}_${scene.id}`}
                scene={scene}
                sceneIndex={sceneIndex}
                type={type}
                isPublish={isPublish}
                onMoveScene={handleMoveScene}
                onAdd={onAdd}
                onDeleteScene={handleDeleteScene}
                onUpdateScene={handleUpdateScene}
              />
            )
          })}
        </article>
        <Button
          text={'추가'}
          width={'214'}
          state={'secondary'}
          style={'mono'}
          size={'sm'}
          leadingIcon={'icon/plus-line'}
          onClick={handleAddSceneOpen}
        />
        <p className={sequenceCharge}>{charger}</p>
      </section>
      {isCurrentAddScene && (
        <AddScenes onClose={handleResetCurrentAddScene} onAddScene={handleSceneAdd} />
      )}
    </div>
  )
}
