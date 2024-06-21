import { EvaluationHeader } from '@/features/onboarding/ui'
import EvaluationTableFormBody from '@/modals/evaluation/container/EvaluationTableFormBody'
import { ModalLayout } from '@/shared/ui'
import { EVALUATION_DEFAULT_VALUES } from '@/widgets/onboarding/constants'
import { ModalHeader } from '@repo/ui'
import { useEffect } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { AddEvaluationModalFooter } from './AddEvaluationModalFooter'

interface AddEvaluationModalProps {
  isFreshman?: boolean
  scene?: any
  onClick: (value: any) => void
  onClose: () => void
}

export const AddEvaluationModal = ({
  isFreshman,
  scene,
  onClick,
  onClose,
}: AddEvaluationModalProps) => {
  const methods = useForm<any>({
    mode: 'onChange',
    defaultValues: EVALUATION_DEFAULT_VALUES,
  })
  const { control, setValue, reset } = methods
  const { append, remove, replace } = useFieldArray({
    control,
    name: 'receivers',
  })

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
      ['title']: scene.title,
      ['description']: scene.description,
      ['receivers']: scene.receivers,
      ['evaluation_sections']: scene.evaluation_sections,
    })
  }

  useEffect(() => {
    getDefaultValues()
  }, [])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <div>
          <ModalHeader title="평가표" onClick={onClose} />
          <EvaluationTableFormBody isOms>
            <EvaluationHeader />
          </EvaluationTableFormBody>
          <AddEvaluationModalFooter
            isFreshman={isFreshman}
            onAppendReceiver={handleAppendReceiver}
            onRemoveReceiver={handleRemoveReceiver}
            onClick={onClick}
            onClose={onClose}
          />
        </div>
      </FormProvider>
    </ModalLayout>
  )
}

export default AddEvaluationModal
