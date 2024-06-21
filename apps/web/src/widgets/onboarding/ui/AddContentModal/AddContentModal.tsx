'use client'

import { ModalLayout } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { AddContentModalFooter } from './AddContentModalFooter'
import { AddContentModalBody } from '@/widgets/onboarding/ui/AddContentModal/AddContentModalBody'
import { useEffect } from 'react'
import { ALARM_PERIODS } from '@/widgets/onboarding/constants'

interface AddContentModalProps {
  isFreshman?: boolean
  scene?: any
  onClick: (value: any) => void
  onClose: () => void
}

const AddContentModal = ({ isFreshman, onClick, scene, onClose }: AddContentModalProps) => {
  const method = useForm<any>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      contents: '',
      time: ALARM_PERIODS[0],
      receivers: [],
    },
  })
  const { control, getValues, reset, setValue } = method

  const { append, remove } = useFieldArray({
    control,
    name: 'receivers',
  })

  const handleClose = () => {
    onClose()
  }

  const handleAdd = () => {
    const data = {
      type: 'content',
      ...getValues(),
    }
    onClick(data)
    onClose()
  }

  const handleAppendReceiver = (
    type: 'ATS' | 'OMS',
    email: string,
    id?: string | number,
    name?: string,
    profile?: string,
  ) => {
    append({
      id: id,
      type: type,
      name: name,
      profile: profile,
      email: email,
    })
  }

  const handleRemoveReceiver = (index: number) => {
    remove(index)
  }

  const getDefaultValues = () => {
    if (!scene) return
    reset({
      title: scene.title,
      contents: scene.contents,
      receivers: scene.receivers,
      time: scene.time,
    })
  }

  useEffect(() => {
    getDefaultValues()
  }, [])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...method}>
        <div>
          <ModalHeader title={'컨텐츠'} onClick={handleClose} />
          <AddContentModalBody />
          <AddContentModalFooter
            isFreshman={isFreshman}
            onAppendReceiver={handleAppendReceiver}
            onRemoveReceiver={handleRemoveReceiver}
            onClose={handleClose}
            onAdd={handleAdd}
          />
        </div>
      </FormProvider>
    </ModalLayout>
  )
}

export default AddContentModal
