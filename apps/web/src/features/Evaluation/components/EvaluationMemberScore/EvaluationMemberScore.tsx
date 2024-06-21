import * as Styles from './styles'
import {
  evaluationMemberResultAtom,
  evaluationViewStateAtom,
} from '@/features/Evaluation/recoil/atom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { IconBoxButton } from '@/shared/ui'

interface EvaluationMemberScoreProps {
  score: number
  identification: string
}

const EvaluationMemberScore = ({ score, identification }: EvaluationMemberScoreProps) => {
  const setEvaluationViewState = useSetRecoilState(evaluationViewStateAtom)
  const [evaluationMemberResult, setEvaluationMemberResult] = useRecoilState(
    evaluationMemberResultAtom,
  )

  const handleResultOpen = () => {
    setEvaluationViewState('member_result')
    setEvaluationMemberResult({
      ...evaluationMemberResult,
      selectedIdentification: identification,
    })
  }

  return (
    <>
      <Styles.Score>{score}점</Styles.Score>
      <IconBoxButton onClick={handleResultOpen} icon="icon/right-line" style="mono" size="xs" />
    </>
  )
}

export default EvaluationMemberScore
