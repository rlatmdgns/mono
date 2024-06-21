'use client'

import { ModalLayout } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { FormProvider, useForm } from 'react-hook-form'
import { wrapper } from '@/features/onboarding/ui/AddSequenceModal/styles.css'
import { AddSequenceType } from '@/features/onboarding/ui/AddSequenceModal/AddSequenceType'
import { AddSequenceDate } from '@/features/onboarding/ui/AddSequenceModal/AddSequenceDate'
import { AddSequenceFooter } from '@/features/onboarding/ui/AddSequenceModal/AddSequenceFooter'
import { ModifySequenceDate } from '@/features/onboarding/ui/ModifySequenceModal/ModifySequenceDate'
import { useEffect } from 'react'
import { getConvertAppendModalDday } from '@/pageModules/create-scenario/lib'

interface AddSequenceModalProps {
  type?: 'freshman' | 'manager'
  isPublish?: boolean
  onClick: (value: any) => void
  onClose: () => void
}

const AddSequenceModal = ({ type, isPublish, onClick, onClose }: AddSequenceModalProps) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      authority: type || 'all',
      join_date: 0,
      date_type: '',
    },
  })

  const {
    formState: { isValid },
    getValues,
    setValue,
  } = methods

  const originalJoinDate = '2024-05-28'
  const authorityText = type === 'manager' ? '온보딩 매니저' : '입사자'

  const handleCancel = () => {
    onClose()
  }

  const handleClick = () => {
    const data = getValues()
    const postData = {
      authority: data.authority,
      d_day: getConvertAppendModalDday(data),
    }
    onClick(postData)
    onClose()
  }

  useEffect(() => {
    // TODO : 추후 API에서 입사일 시점을 등록해야 함.
    if (isPublish) {
      setValue('join_date', 0)
    }
  }, [])

  return (
    <ModalLayout isDimmed>
      <div>
        <ModalHeader
          title={`${authorityText} 시퀀스 추가`}
          subtitle={'입사일 기준으로 시퀀스를 설정해주세요.'}
          onClick={onClose}
        />
        <div className={wrapper}>
          <FormProvider {...methods}>
            <AddSequenceType type={type} isPublish={isPublish} />
            <AddSequenceDate isPublish={isPublish} />
            <ModifySequenceDate isPublish={isPublish} originalJoinDate={originalJoinDate} />
          </FormProvider>
        </div>
        <AddSequenceFooter isValid={isValid} onClick={handleClick} onCancel={handleCancel} />
      </div>
    </ModalLayout>
  )
}

export default AddSequenceModal
