import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import EvaluationTableFormHeader from '@/modals/evaluation/container/EvaluationTableFormHeader'
import EvaluationTableFormBody from '@/modals/evaluation/container/EvaluationTableFormBody'
import EvaluationTableFormFooter from '@/modals/evaluation/container/EvaluationTableFormFooter'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  selectedTableIdAtom,
  stepAtom,
} from '@/modals/evaluation/EvaluationSettingModal/recoil/atom'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import useCreateEvaluationTable from '@/modals/evaluation/CreateEvaluationTableModal/hooks/useCreateEvaluationTable'
import React, { useEffect, useState } from 'react'
import { getEvaluationArticleLength } from '@/modals/evaluation/evaluation.factory'
import { EvaluationTableSection } from '@/features/Evaluation/Evaluation.interface'
import { useTemplateContent } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface CreateEvaluationTableModalProps {
  evaluationId: number
  onClose: () => void
}

const CreateEvaluationTableModal = ({ evaluationId, onClose }: CreateEvaluationTableModalProps) => {
  const [templateId, setTemplateId] = useState<number | string>('')
  const { data } = useTemplateContent(templateId)
  const step = useRecoilValue(stepAtom)
  const setActiveTableId = useSetRecoilState(selectedTableIdAtom)
  const { createEvaluationTableMutate } = useCreateEvaluationTable(setActiveTableId)
  const $t = useTranslations()

  const methods = useForm({
    defaultValues: {
      table_title: $t('evaluation.new_evaluation_table'),
      is_save_template: false,
      evaluation_sections: [
        {
          section_title: $t('common.section_name'),
          section_description: '',
          evaluation_items: [
            {
              item_title: '',
              item_type: 'choice',
            },
          ],
        },
      ],
    },
  })
  const { handleSubmit, watch, setValue } = methods
  const length = getEvaluationArticleLength(
    watch('evaluation_sections') as EvaluationTableSection[],
  )

  const handleFormSubmit = (form: FieldValues) => {
    const { is_save_template, table_title, evaluation_sections } = form
    const data = {
      is_save_template: is_save_template,
      evaluation_data: {
        table_title: table_title,
        evaluation_sections: evaluation_sections,
      },
    }
    createEvaluationTableMutate({
      evaluation_id: `${evaluationId}`,
      data: data,
    })
    onClose()
  }

  const setTemplateValue = () => {
    if (!data) return
    const { table_title, evaluation_sections } = data.template_contents
    setValue('table_title', table_title)
    setValue('evaluation_sections', evaluation_sections)
  }

  useEffect(() => {
    setTemplateValue()
  }, [data])

  if (!step) return null
  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <EvaluationTableFormHeader
            title={$t('evaluation.create_evaluation_table')}
            stepName={step.step_name}
            length={length}
          />
          <EvaluationTableFormBody isSaveTemplate />
          <EvaluationTableFormFooter
            onClose={onClose}
            onTemplateSelect={setTemplateId}
            isTemplate
          />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default CreateEvaluationTableModal
