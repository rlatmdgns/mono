import MemberEvaluationResultHeader from '@/features/Evaluation/components/MemberEvaluationResultHeader'
import EvaluationBody from '@/features/Evaluation/components/EvaluationBody'
import EvaluationResultSectionList from '@/features/Evaluation/components/EvaluationResultSectionList'
import MemberEvaluationResultFooter from '@/features/Evaluation/components/MemberEvaluationResultFooter'
import useGetEvaluationMemberResult from '@/features/Evaluation/hooks/useGetEvaluationMemberResult'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  evaluationIdsAtom,
  evaluationMemberResultAtom,
  evaluationViewStateAtom,
  myEvaluationResultAtom,
} from '@/features/Evaluation/recoil/atom'
import { EvaluationTableCloseHandler } from '@/features/Evaluation/Evaluation.interface'

interface MemberEvaluationResultProps {
  applicantId: string
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const MemberEvaluationResult = ({
  applicantId,
  onEvaluationTableClose,
}: MemberEvaluationResultProps) => {
  const [evaluationViewState, setEvaluationViewState] = useRecoilState(evaluationViewStateAtom)
  const evaluationIds = useRecoilValue(evaluationIdsAtom)
  const evaluationMemberResult = useRecoilValue(evaluationMemberResultAtom)
  const setMyEvaluationResult = useSetRecoilState(myEvaluationResultAtom)

  const { evaluationId, tableId } = evaluationIds

  const { data } = useGetEvaluationMemberResult(
    evaluationId,
    applicantId,
    tableId,
    evaluationMemberResult.selectedIdentification,
  )

  const isClosed = data?.evaluation_table_status === 'closed'

  const handleUpdateMyForm = () => {
    if (!data) return
    setMyEvaluationResult(data)
    setEvaluationViewState('updateMyForm')
  }

  const handleEvaluationTableClose = () => onEvaluationTableClose(isClosed)

  if (evaluationViewState !== 'member_result' || !data) return null

  return (
    <>
      <MemberEvaluationResultHeader
        evaluationId={evaluationId}
        applicantId={applicantId}
        tableId={tableId}
        isCanUpdate={!isClosed}
        currentScore={data?.current_score}
        backTo={'member_result_list'}
        tableTitle={data.table_title}
        isMe={data.is_me}
        onUpdateMyForm={handleUpdateMyForm}
      />
      <EvaluationBody hasFooter>
        <EvaluationResultSectionList evaluationSections={data.evaluation_sections} />
      </EvaluationBody>
      <MemberEvaluationResultFooter
        isClosed={isClosed}
        onEvaluationTableClose={handleEvaluationTableClose}
        userName={data.user_name}
        userProfile={data.user_profile}
        isMe={data.is_me}
      />
    </>
  )
}

export default MemberEvaluationResult
