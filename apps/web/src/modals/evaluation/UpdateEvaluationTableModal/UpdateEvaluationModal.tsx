import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import EvaluationTableFormHeader from '@/modals/evaluation/container/EvaluationTableFormHeader/EvaluationTableFormHeader'
import EvaluationTableFormFooter from '@/modals/evaluation/container/EvaluationTableFormFooter'
import EvaluationTableFormBody from '@/modals/evaluation/container/EvaluationTableFormBody'
import useGetEvaluationTable from '@/features/Evaluation/hooks/useGetEvaluationTable'
import { stepAtom } from '@/modals/evaluation/EvaluationSettingModal/recoil/atom'
import { useRecoilValue } from 'recoil'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import useUpdateEvaluationTable from '@/modals/evaluation/UpdateEvaluationTableModal/hooks/useUpdateEvaluationTable'
import { UpdateEvaluationTableRequest } from '@/services/evaluation/updateEvaluationTable/updateEvaluationTable.interface'
import { getEvaluationArticleLength } from '@/modals/evaluation/evaluation.factory'
import { useTranslations } from 'next-intl'

interface UpdateEvaluationTableModalProps {
  evaluationId: number
  tableId: number
  onClose: () => void
}

const UpdateEvaluationTableModal = ({
  evaluationId,
  tableId,
  onClose,
}: UpdateEvaluationTableModalProps) => {
  const step = useRecoilValue(stepAtom)
  const { data } = useGetEvaluationTable(`${evaluationId}`, `${tableId}`)
  const { updateEvaluationTableMutate } = useUpdateEvaluationTable()

  const methods = useForm()
  const { handleSubmit, reset, watch } = methods
  const length = getEvaluationArticleLength(watch('evaluation_sections'))
  const $t = useTranslations('evaluation')

  const handleFormSubmit = (form: FieldValues) => {
    const data = {
      evaluation_id: `${evaluationId}`,
      table_id: `${tableId}`,
      evaluation_data: form,
    } as UpdateEvaluationTableRequest
    updateEvaluationTableMutate(data)
    onClose()
  }

  const resetForm = () => {
    if (!data) return
    reset({
      table_title: data?.table_title,
      evaluation_sections: data?.evaluation_sections,
    })
  }

  useEffect(() => {
    resetForm()
  }, [data])

  if (!step || !data) return null
  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <EvaluationTableFormHeader
            title={$t('modify_evaluation_table')}
            length={length}
            stepName={step.step_name}
          />
          <EvaluationTableFormBody />
          <EvaluationTableFormFooter onClose={onClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default UpdateEvaluationTableModal
