'use client'

import { ModalLayout } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { AddAlarmModalFooter } from './AddAlarmModalFooter'
import { AddAlarmModalBody } from '@/widgets/onboarding/ui/AddAlarmModal/AddAlarmModalBody'
import { useEffect } from 'react'
import { ALARM_PERIODS } from '@/widgets/onboarding/constants'

interface AddAlarmModalProps {
  isFreshman?: boolean
  scene?: any
  onClick: (value: any) => void
  onClose: () => void
}

const AddAlarmModal = ({ isFreshman, scene, onClick, onClose }: AddAlarmModalProps) => {
  const methods = useForm<any>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      contents: '',
      time: ALARM_PERIODS[0].value,
      receivers: [],
    },
  })

  const { control, reset, getValues, setValue } = methods

  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: 'receivers',
  })

  const handleClose = () => {
    onClose()
  }

  const handleClick = () => {
    const getValuesData = { ...getValues() }
    const receivers = getValuesData.receivers.map((receiver: any) => {
      return {
        id: receiver.id,
        type: receiver.type,
        email: receiver.email,
      }
    })

    const data = {
      type: 'alarm',
      ...getValuesData,
      receivers: receivers,
    }
    onClick(data)
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
      time: scene.time,
      receivers: scene.receivers,
    })
  }

  useEffect(() => {
    getDefaultValues()
  }, [])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <div>
          <ModalHeader
            title={'알림'}
            subtitle={'알림은 이메일로 전송됩니다.'}
            onClick={handleClose}
          />
          <AddAlarmModalBody />
          <AddAlarmModalFooter
            isFreshman={isFreshman}
            onAppendReceiver={handleAppendReceiver}
            onRemoveReceiver={handleRemoveReceiver}
            onClose={handleClose}
            onAdd={handleClick}
            scene={scene}
          />
        </div>
      </FormProvider>
    </ModalLayout>
  )
}

export default AddAlarmModal
