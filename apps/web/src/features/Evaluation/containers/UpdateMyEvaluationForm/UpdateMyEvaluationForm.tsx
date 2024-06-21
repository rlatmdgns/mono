import * as Styles from './styles'
import EvaluationHeader from '@/features/Evaluation/components/EvaluationHeader'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  evaluationIdsAtom,
  evaluationViewStateAtom,
  myEvaluationResultAtom,
} from '@/features/Evaluation/recoil/atom'
import EvaluationSubmitFormFooter from '@/features/Evaluation/components/EvaluationSubmitFormFooter'
import { useEffect } from 'react'
import EvaluationSectionList from '@/features/Evaluation/components/EvaluationSectionList/EvaluationSectionList'
import { convertToEvaluationUpdateFormValues } from '@/features/Evaluation/containers/UpdateMyEvaluationForm/UpdateMyEvaluationForm.factory'
import useUpdateMyEvaluation from '@/features/Evaluation/hooks/useUpdateMyEvaluation'
import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'

interface UpdateMyEvaluationFormProps {
  applicantId: string
}

const UpdateMyEvaluationForm = ({ applicantId }: UpdateMyEvaluationFormProps) => {
  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const [evaluationViewState, setEvaluationViewState] = useRecoilState(evaluationViewStateAtom)
  const evaluationIds = useRecoilValue(evaluationIdsAtom)

  const [myEvaluationResult, setMyEvaluationResult] = useRecoilState(myEvaluationResultAtom)
  const { updateMyEvaluationMutate } = useUpdateMyEvaluation(
    `${evaluationIds.evaluationId}`,
    applicantId,
    `${evaluationIds.tableId}`,
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
    updateMyEvaluationMutate(data)
    setEvaluationViewState(isEvaluation ? 'main' : 'member_result_list')
    setMyEvaluationResult(null)
  }

  const resetFormDefaultValues = () => {
    if (!myEvaluationResult) return
    reset({
      evaluation_data: {
        evaluation_sections: convertToEvaluationUpdateFormValues(
          myEvaluationResult.evaluation_sections,
        ),
      },
    })
  }

  useEffect(() => {
    resetFormDefaultValues()
  }, [myEvaluationResult])

  if (evaluationViewState !== 'updateMyForm' || !myEvaluationResult) return null
  return (
    <FormProvider {...methods}>
      <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <EvaluationHeader
          content={myEvaluationResult.table_title}
          backTo={isEvaluation ? 'my_result' : 'member_result'}
          onClick={resetFormDefaultValues}
        />
        <EvaluationSectionList evaluation_sections={myEvaluationResult.evaluation_sections} />
        <EvaluationSubmitFormFooter />
      </Styles.Form>
    </FormProvider>
  )
}

export default UpdateMyEvaluationForm
