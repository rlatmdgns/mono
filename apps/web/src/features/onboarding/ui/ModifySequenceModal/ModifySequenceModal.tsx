'use client'

import { ModalLayout } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { FormProvider, useForm } from 'react-hook-form'
import { wrapper } from '@/features/onboarding/ui/AddSequenceModal/styles.css'
import { ModifySequenceDate } from '@/features/onboarding/ui/ModifySequenceModal/ModifySequenceDate'
import { ModifySequenceFooter } from '@/features/onboarding/ui/ModifySequenceModal/ModifySequenceFooter'
import { ModifySequenceValue, SequenceAuthority } from '@/features/onboarding/type'
import { AddSequenceDate } from '@/features/onboarding/ui/AddSequenceModal/AddSequenceDate'
import { getConvertAppendModalDday } from '@/pageModules/create-scenario/lib'

interface ModifySequenceModalProps {
  authority: SequenceAuthority
  isPublish?: boolean
  onClick: (d_day: number) => void
  onClose: () => void
}

const ModifySequenceModal = ({
  authority,
  isPublish,
  onClick,
  onClose,
}: ModifySequenceModalProps) => {
  const methods = useForm<ModifySequenceValue>({
    mode: 'onChange',
    defaultValues: {
      authority,
      date_type: '',
      join_date: 0,
      modify_d_day_date: '',
    },
  })
  const getTypeAuthorityText = authority === 'manager' ? '온보딩 담당자' : '입사자'

  const originalJoinDate = '2024-05-28'

  const {
    formState: { isValid },
    getValues,
    setValue,
  } = methods

  const handleCancel = () => {
    onClose()
  }

  const handleClick = () => {
    const d_day = isPublish ? getValues().join_date : getConvertAppendModalDday(getValues())
    onClick(d_day)
    onClose()
  }

  return (
    <ModalLayout isDimmed>
      <div>
        <ModalHeader title={`${getTypeAuthorityText} 시퀀스 수정`} onClick={onClose} />
        <div className={wrapper}>
          <FormProvider {...methods}>
            <AddSequenceDate isPublish={isPublish} />
            <ModifySequenceDate originalJoinDate={originalJoinDate} isPublish={isPublish} />
          </FormProvider>
        </div>
        <ModifySequenceFooter isValid={isValid} onClick={handleClick} onCancel={handleCancel} />
      </div>
    </ModalLayout>
  )
}

export default ModifySequenceModal
