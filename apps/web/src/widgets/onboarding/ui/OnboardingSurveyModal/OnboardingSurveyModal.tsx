'use client'

import { SurveyHeader, SurveyList } from '@/features/onboarding'
import { SURVEY_TYPES } from '@/features/onboarding/constants'
import { ModalLayout } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { DEFAULT_SURVEY } from 'widgets/onboarding/entities'
import { OnboardingSurveyModalFooter } from './OnboardingSurveyModalFooter'
import { innerWrapper, modalWrapper } from './styles.css'
import { useEffect } from 'react'

interface OnboardingSurveyModalProps {
  isFreshman?: boolean
  scene?: any
  onClose: () => void
  onClick: (data: any) => void
}

const OnboardingSurveyModal = ({
  isFreshman,
  scene,
  onClick,
  onClose,
}: OnboardingSurveyModalProps) => {
  const methods = useForm<any>({
    defaultValues: DEFAULT_SURVEY,
  })

  const { control, reset, watch, setValue } = methods

  const { fields, append, move, remove, replace } = useFieldArray({
    control,
    name: 'questions',
  })

  const {
    fields: receiversFields,
    append: receiversAppend,
    remove: receiverRemove,
  } = useFieldArray({
    control,
    name: 'receivers',
  })

  const handleSurveyAdd = () => {
    append({
      type: SURVEY_TYPES[0],
      title: '',
      file: '',
      is_required: false,
      items: [
        {
          title: '',
        },
      ],
    })
  }

  const handleSurveyMove = (from: number, to: number) => {
    move(from, to)
  }

  const handleAppendReceiver = (
    type: 'ATS' | 'OMS',
    email: string,
    id?: number | string,
    name?: string,
    profile?: string,
  ) => {
    receiversAppend({
      id: id,
      type: type,
      name: name,
      profile: profile,
      email: email,
    })
  }

  const handleRemoveReceiver = (index: number) => {
    receiverRemove(index)
  }

  const handleSurveyRemove = (index: number) => {
    remove(index)
  }

  const handleSurveyCopy = (index: number) => {
    const copySurvey = { ...fields[index] }
    append(copySurvey)
  }

  const handleClose = () => {
    onClose()
  }

  const getDefaultValues = () => {
    if (!scene) return
    reset({
      title: scene.title,
      description: scene.description,
      questions: scene.questions,
      receivers: scene.receivers,
    })
  }

  useEffect(() => {
    getDefaultValues()
  }, [])

  return (
    <ModalLayout isDimmed onClick={onClose}>
      <FormProvider {...methods}>
        <div className={modalWrapper}>
          <ModalHeader title="설문지" onClick={handleClose} />
          <div className={innerWrapper}>
            <SurveyHeader />
            <SurveyList
              survives={fields}
              onSurveyAdd={handleSurveyAdd}
              onMove={handleSurveyMove}
              onRemove={handleSurveyRemove}
              onCopy={handleSurveyCopy}
            />
          </div>
          <OnboardingSurveyModalFooter
            isFreshman={isFreshman}
            onAppendReceiver={handleAppendReceiver}
            onRemoveReceiver={handleRemoveReceiver}
            onClick={onClick}
            onClose={onClose}
            scene={scene}
          />
        </div>
      </FormProvider>
    </ModalLayout>
  )
}

export default OnboardingSurveyModal
