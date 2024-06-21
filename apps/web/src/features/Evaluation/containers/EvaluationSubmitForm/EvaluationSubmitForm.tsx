import * as Styles from './styles'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import EvaluationHeader from '@/features/Evaluation/components/EvaluationHeader'
import EvaluationSectionList from '@/features/Evaluation/components/EvaluationSectionList/EvaluationSectionList'
import { getDefaultFormValues } from '@/features/Evaluation/containers/EvaluationSubmitForm/EvaluationSubmitForm.functions'
import EvaluationSubmitFormFooter from '@/features/Evaluation/components/EvaluationSubmitFormFooter'
import { useRecoilState, useRecoilValue } from 'recoil'
import { evaluationIdsAtom, evaluationViewStateAtom } from '@/features/Evaluation/recoil/atom'
import useGetEvaluationTable from '@/features/Evaluation/hooks/useGetEvaluationTable'
import useSubmitEvaluation from '@/features/Evaluation/hooks/useSubmitEvaluation'
import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'
import { useEffect } from 'react'

interface EvaluationSubmitFormProps {
  applicantId: string
}

const EvaluationSubmitForm = ({ applicantId }: EvaluationSubmitFormProps) => {
  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const [evaluationViewState, setEvaluationViewState] = useRecoilState(evaluationViewStateAtom)
  const evaluationIds = useRecoilValue(evaluationIdsAtom)

  const { data } = useGetEvaluationTable(evaluationIds.evaluationId, evaluationIds.tableId)
  const { submitEvaluationMutate } = useSubmitEvaluation(
    `${evaluationIds.evaluationId}`,
    applicantId,
    `${evaluationIds.tableId}`,
    () => setEvaluationViewState(isEvaluation ? 'main' : 'member_result_list'),
  )

  const methods = useForm()
  const { handleSubmit, reset } = methods

  const handleFormSubmit = (form: FieldValues) => {
    const { evaluation_data } = form

    const data = {
      evaluation_id: `${evaluationIds.evaluationId}`,
      table_id: `${evaluationIds.tableId}`,
      applicant_id: applicantId,
      data: { evaluation_data },
    }
    submitEvaluationMutate(data)
  }

  const initData = () => {
    if (!data) return
    reset({
      evaluation_data: {
        evaluation_sections: getDefaultFormValues(data?.evaluation_sections),
      },
    })
  }

  useEffect(() => {
    initData()
  }, [data])

  if (evaluationViewState !== 'submitForm' || !data) return null
  return (
    <FormProvider {...methods}>
      <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <EvaluationHeader onClick={reset} content={data.table_title} backTo="main" />
        <EvaluationSectionList evaluation_sections={data?.evaluation_sections} />
        <EvaluationSubmitFormFooter />
      </Styles.Form>
    </FormProvider>
  )
}

export default EvaluationSubmitForm
