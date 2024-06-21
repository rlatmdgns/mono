'use client'

import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Button } from '@repo/ui'
import { AddSequenceValue } from 'features/onboarding/type'
import { wrapper } from '@/features/onboarding/ui/AddSequenceButton/styles.css'
import { useResetRecoilState } from 'recoil'
import { CurrentAddSceneAtom } from '@/features/onboarding/recoil/atom'

interface AddSequenceButtonProps {
  onAppend: (value: AddSequenceValue) => void
}

export const AddSequenceButton = ({ onAppend }: AddSequenceButtonProps) => {
  const resetCurrentAddScene = useResetRecoilState(CurrentAddSceneAtom)

  const { openModal, closeModal } = useModal()

  const handleSequenceAdd = () => {
    resetCurrentAddScene()
    openModal(MODAL.ADD_SEQUENCE, {
      onClose: () => {
        closeModal(MODAL.ADD_SEQUENCE)
      },
      onClick: (value: AddSequenceValue) => {
        onAppend(value)
      },
    })
  }

  return (
    <div className={wrapper}>
      <Button text={'시퀀스 생성'} leadingIcon={'icon/add-solid'} onClick={handleSequenceAdd} />
    </div>
  )
}
