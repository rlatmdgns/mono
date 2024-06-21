import { content, descriptionInput, titleInput, wrapper } from './styles.css'

import { ModalLayout } from '@/shared/ui'
import { Button, ModalFooter } from '@repo/ui'
import React from 'react'
import { useForm } from 'react-hook-form'

interface SaveScenarioModalProps {
  title?: string
  description?: string
  emptySequences?: string[]
  onClick: (data: any) => void
  onClose: () => void
}

const SaveScenarioModal = ({
  title,
  description,
  emptySequences,
  onClick,
  onClose,
}: SaveScenarioModalProps) => {
  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      title,
      description,
    },
  })
  const handleScenarioTitleTransfer = () => {
    onClick(getValues())
  }

  return (
    <ModalLayout isDimmed>
      <div className={wrapper}>
        <div className={content}>
          <input
            className={titleInput}
            {...register('title', {
              required: true,
            })}
            defaultValue={title}
            placeholder="시나리오 제목을 입력해주세요."
          />
          <input
            className={descriptionInput}
            {...register('description', {
              required: true,
            })}
            defaultValue={description}
            placeholder="구분하기 위한 설명을 입력해주세요."
          />
        </div>
        <ModalFooter>
          <Button onClick={onClose} text="취소" state="secondary" style="mono" />
          <Button disabled={!isValid} onClick={handleScenarioTitleTransfer} text="만들기" />
        </ModalFooter>
      </div>
    </ModalLayout>
  )
}

export default SaveScenarioModal
