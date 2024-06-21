import * as Styles from './styles'
import { LabelInput, ModalLayout } from '@/shared/ui'
import { Controller, FieldValues, FormProvider, useForm } from 'react-hook-form'
import EvaluationTableFormHeader from '@/modals/evaluation/container/EvaluationTableFormHeader'
import { getEvaluationArticleLength } from '@/modals/evaluation/evaluation.factory'
import { EvaluationTableSection } from '@/features/Evaluation/Evaluation.interface'
import EvaluationTableFormBody from '@/modals/evaluation/container/EvaluationTableFormBody'
import EvaluationTableFormFooter from '@/modals/evaluation/container/EvaluationTableFormFooter'
import React, { useEffect } from 'react'
import { useTemplateContent } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface EvaluationTemplateModalProps {
  onClose: () => void
  title: string
  onSubmit: (data: any) => void
  id?: string
}

const EvaluationTemplateModal = ({
  onClose,
  title,
  id = '',
  onSubmit,
}: EvaluationTemplateModalProps) => {
  const $t = useTranslations()
  const { data } = useTemplateContent(id)

  const methods = useForm({
    defaultValues: {
      template_title: '',
      table_title: $t('evaluation.new_evaluation_table'),
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
  const { handleSubmit, watch, control, register, reset } = methods
  const length = getEvaluationArticleLength(
    watch('evaluation_sections') as EvaluationTableSection[],
  )

  const handleFormSubmit = (form: FieldValues) => {
    const { template_title, table_title, evaluation_sections } = form
    const data = {
      template_title: template_title,
      template_contents: {
        table_title: table_title,
        evaluation_sections: evaluation_sections,
      },
    }
    onSubmit(data)
    onClose()
  }

  const setDefaultValue = () => {
    if (!data) return
    const { template_title, template_contents } = data

    reset({
      template_title: template_title || template_contents.table_title,
      table_title: template_contents.table_title,
      evaluation_sections: template_contents.evaluation_sections,
    })
  }

  useEffect(() => {
    setDefaultValue()
  }, [data])

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <EvaluationTableFormHeader title={title} length={length} />
          <EvaluationTableFormBody>
            <Styles.InputBox>
              <Controller
                name={'template_title'}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <LabelInput
                    label={$t('common.template_name')}
                    placeholder={$t('validation.template_input_placeholder')}
                    register={register('template_title')}
                    onChange={(event) => onChange(event.target.value)}
                    isLabelRequired
                  />
                )}
              />
            </Styles.InputBox>
          </EvaluationTableFormBody>
          <EvaluationTableFormFooter onClose={onClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default EvaluationTemplateModal
