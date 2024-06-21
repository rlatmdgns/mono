'use client'

import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { getModalKey } from '@/features/onboarding/lib'
import { titleStyle, wrapper } from '@/features/onboarding/ui/Sequence/styles.css'
import { TaskButton } from '@/features/onboarding/ui/Sequence/TaskButton'
import { HandleAddSequence } from '@/features/onboarding/type'

interface TaskProps {
  scene: any
  sceneIndex: number
  type: 'freshman' | 'manager'
  isPublish?: boolean
  onAdd: HandleAddSequence
  onMoveScene: (d_day: number, sceneIndex: number) => void
  onDeleteScene: (index: number) => void
  onUpdateScene: (index: number, data: any) => void
}

export const Task = ({
  scene,
  sceneIndex,
  type,
  isPublish,
  onAdd,
  onMoveScene,
  onDeleteScene,
  onUpdateScene,
}: TaskProps) => {
  const { openModal, closeModal } = useModal()

  const handleDeleteSceneModal = () => {
    openModal(MODAL.NEW_CONFIRM, {
      title: '작업을 삭제하시겠습니까?',
      state: 'danger',
      onClick: handleDeleteScene,
      onClose: handleCloseDeleteSceneModal,
    })
  }
  const handleDeleteScene = () => {
    onDeleteScene(sceneIndex)
    closeModal(MODAL.NEW_CONFIRM)
    Toast.success('삭제되었습니다.')
  }
  const handleCloseDeleteSceneModal = () => {
    closeModal(MODAL.NEW_CONFIRM)
  }

  const handleSceneDetail = (type: string) => {
    const modalKey = getModalKey(type)

    if (!modalKey) return
    openModal(modalKey, {
      scene,
      onClick: (data: any) => {
        onUpdateScene(sceneIndex, data)
        Toast.success('수정되었습니다.')
        closeModal(modalKey)
      },
      onClose: () => {
        closeModal(modalKey)
      },
    })
  }

  return (
    <div className={wrapper}>
      <button className={titleStyle} onClick={() => handleSceneDetail(scene.type)}>
        {/*<div className="draghandle">*/}
        {/*<Icon icon={'icon/handle-solid'} color={'neutralGray400'} />*/}
        {/*</div>*/}
        {/*<Icon icon={getSceneIcons(scene?.type) as string} />*/}
        <span>{scene?.title}</span>
      </button>
      <TaskButton
        isPublish={isPublish}
        type={type}
        sceneIndex={sceneIndex}
        onAdd={onAdd}
        onMoveScene={onMoveScene}
        onDeleteSceneModal={handleDeleteSceneModal}
      />
    </div>
  )
}
