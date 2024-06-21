import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  evaluationIdsAtom,
  evaluationViewStateAtom,
  myEvaluationResultAtom,
} from '@/features/Evaluation/recoil/atom'
import useGetMyEvaluation from '@/features/Evaluation/hooks/useGetMyEvaluation'
import MemberEvaluationResultHeader from '@/features/Evaluation/components/MemberEvaluationResultHeader'
import EvaluationBody from '@/features/Evaluation/components/EvaluationBody'
import EvaluationResultSectionList from '@/features/Evaluation/components/EvaluationResultSectionList'

interface MyEvaluationResultProps {
  applicantId: string
}

const MyEvaluationResult = ({ applicantId }: MyEvaluationResultProps) => {
  const [evaluationViewState, setEvaluationViewState] = useRecoilState(evaluationViewStateAtom)
  const evaluationIds = useRecoilValue(evaluationIdsAtom)
  const setMyEvaluationResult = useSetRecoilState(myEvaluationResultAtom)

  const { evaluationId, tableId } = evaluationIds

  const isMyEvaluationResult = evaluationViewState === 'my_result'
  const { data } = useGetMyEvaluation(
    `${evaluationId}`,
    applicantId,
    `${tableId}`,
    isMyEvaluationResult,
  )

  const handleUpdateMyForm = () => {
    if (!data) return
    setMyEvaluationResult(data)
    setEvaluationViewState('updateMyForm')
  }

  if (!isMyEvaluationResult || !data) return null
  return (
    <>
      <MemberEvaluationResultHeader
        evaluationId={evaluationId}
        applicantId={applicantId}
        tableId={tableId}
        isCanUpdate={data.can_edit}
        currentScore={data?.current_score}
        backTo={'main'}
        tableTitle={data.table_title}
        onUpdateMyForm={handleUpdateMyForm}
        isMe
      />
      <EvaluationBody>
        <EvaluationResultSectionList evaluationSections={data.evaluation_sections} />
      </EvaluationBody>
    </>
  )
}

export default MyEvaluationResult
