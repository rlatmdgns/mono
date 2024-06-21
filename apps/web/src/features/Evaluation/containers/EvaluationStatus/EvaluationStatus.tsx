import EvaluationHeader from '@/features/Evaluation/components/EvaluationHeader'
import EvaluationBody from '@/features/Evaluation/components/EvaluationBody'
import useGetEvaluationMembersResult from '@/features/Evaluation/hooks/useGetEvaluationMembersResult'
import EvaluationStatusFooter from '@/features/Evaluation/components/EvaluationStatusFooter'
import EvaluationResultViewSelect from '@/features/Evaluation/components/EvaluationResultViewSelect'
import EvaluationSummaryList from '@/features/Evaluation/containers/EvaluationSummaryList'
import EvaluationMemberList from '@/features/Evaluation/components/EvaluationMemberList'
import {
  evaluationIdsAtom,
  evaluationMemberAccessAtom,
  evaluationMemberResultAtom,
  evaluationViewStateAtom,
} from '@/features/Evaluation/recoil/atom'
import { EvaluationTableCloseHandler } from '@/features/Evaluation/Evaluation.interface'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'

interface EvaluationMemberListProps {
  applicantId: string
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const EvaluationStatus = ({ applicantId, onEvaluationTableClose }: EvaluationMemberListProps) => {
  const evaluationViewState = useRecoilValue(evaluationViewStateAtom)
  const [evaluationIds, setEvaluationIds] = useRecoilState(evaluationIdsAtom)
  const { evaluationId, tableId } = evaluationIds
  const [evaluationMemberResult, setEvaluationMemberResult] = useRecoilState(
    evaluationMemberResultAtom,
  )
  const resetEvaluationMemberResult = useResetRecoilState(evaluationMemberResultAtom)
  const { EVALUATION_RESULT_VIEW_TYPES } = useEvaluationConstants()

  const evaluationMemberAccess = useRecoilValue(evaluationMemberAccessAtom)

  const { data } = useGetEvaluationMembersResult(
    evaluationId,
    applicantId,
    tableId,
    evaluationMemberAccess,
  )

  const [resultView, setResultView] = useState(EVALUATION_RESULT_VIEW_TYPES[1])
  const isSummary = resultView.value === 'summary'
  const isClosed = data?.evaluation_table_status === 'closed'

  const resetDefaultEvaluationMemberResult = () => {
    if (!isClosed) {
      setResultView(EVALUATION_RESULT_VIEW_TYPES[1])
    }
    if (!data) return
    const summitedMembers = data.individual.filter(
      (member) => member.is_member_evaluation_submitted,
    )
    setEvaluationMemberResult({
      ...evaluationMemberResult,
      identifications: summitedMembers.map((item) => item.identification),
    })
  }

  const handleEvaluationTableClose = () => onEvaluationTableClose(isClosed)

  const resetTableStatus = () => {
    resetEvaluationMemberResult()
    setEvaluationIds({ ...evaluationIds, tableId: '' })
    setResultView(EVALUATION_RESULT_VIEW_TYPES[1])
  }

  useEffect(() => {
    resetDefaultEvaluationMemberResult()
  }, [data])

  if (evaluationViewState !== 'member_result_list' || !data || !evaluationMemberAccess) return null
  return (
    <>
      <EvaluationHeader content={data.table_title} backTo="main" onClick={resetTableStatus}>
        {isClosed && (
          <EvaluationResultViewSelect resultView={resultView} setResultView={setResultView} />
        )}
      </EvaluationHeader>
      <EvaluationBody hasFooter>
        <EvaluationSummaryList isSummary={isSummary} summary={data.summary} />
        <EvaluationMemberList
          isSummary={isSummary}
          isClosed={isClosed}
          membersResult={data.individual}
        />
      </EvaluationBody>
      <EvaluationStatusFooter
        membersResult={data.individual}
        isClosed={isClosed}
        onEvaluationTableClose={handleEvaluationTableClose}
      />
    </>
  )
}

export default EvaluationStatus
