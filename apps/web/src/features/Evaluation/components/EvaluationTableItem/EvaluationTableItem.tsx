import * as Styles from './styles'
import EvaluationTableStatusIcon from '../EvaluationTableStatusIcon'
import EvaluationTableInfo from '../EvaluationTableInfo/EvaluationTableInfo'
import EvaluationTableAvatar from '../EvaluationTableAvatar'
import EvaluationTableButtonBox from '../EvaluationTableButtonBox'
import EvaluationTableResultButton from '../EvaluationTableResultButton/EvaluationTableResultButton'
import { ApplicantEvaluationTableMember } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'
import { useSetRecoilState } from 'recoil'
import {
  evaluationIdsAtom,
  evaluationMemberAccessAtom,
  evaluationViewStateAtom,
} from '@/features/Evaluation/recoil/atom'
import {
  EvaluationTableCloseHandler,
  EvaluationViewState,
} from '@/features/Evaluation/Evaluation.interface'

interface EvaluationTableItemProps {
  evaluationId: string
  isAccess: boolean
  userAuthority: string
  tableId: string
  tableTitle: string
  evaluationTableStatus: string
  members: ApplicantEvaluationTableMember[]
  membersCount: number
  submittedCount: number
  isMyEvaluationSubmitted: boolean
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const EvaluationTableItem = ({
  evaluationId,
  isAccess,
  userAuthority,
  tableId,
  tableTitle,
  evaluationTableStatus,
  members,
  membersCount,
  submittedCount,
  isMyEvaluationSubmitted,
  onEvaluationTableClose,
}: EvaluationTableItemProps) => {
  const setEvaluationViewState = useSetRecoilState(evaluationViewStateAtom)
  const setEvaluationIds = useSetRecoilState(evaluationIdsAtom)
  const setEvaluationMemberAccess = useSetRecoilState(evaluationMemberAccessAtom)

  const handleStateChange = (state?: EvaluationViewState) => {
    if (!state) return
    setEvaluationViewState(state)
    setEvaluationIds({ evaluationId, tableId })
    setEvaluationMemberAccess(Boolean(isAccess))
  }

  return (
    <Styles.Item>
      <Styles.Container>
        <Styles.Contents>
          <Styles.Left>
            <EvaluationTableStatusIcon evaluationTableStatus={evaluationTableStatus} />
            <EvaluationTableInfo
              tableTitle={tableTitle}
              evaluationTableStatus={evaluationTableStatus}
              membersCount={membersCount}
              submittedCount={submittedCount}
            />
          </Styles.Left>
          <Styles.Right>
            <EvaluationTableAvatar
              evaluationTableStatus={evaluationTableStatus}
              members={members}
              isAccess={isAccess}
            />
            <EvaluationTableResultButton
              evaluationTableStatus={evaluationTableStatus}
              isMyEvaluationSubmitted={isMyEvaluationSubmitted}
              isAccess={isAccess}
              onStateChange={handleStateChange}
            />
          </Styles.Right>
        </Styles.Contents>
        <EvaluationTableButtonBox
          evaluationId={evaluationId}
          tableId={tableId}
          isMyEvaluationSubmitted={isMyEvaluationSubmitted}
          evaluationTableStatus={evaluationTableStatus}
          userAuthority={userAuthority}
          onStateChange={handleStateChange}
          onEvaluationTableClose={onEvaluationTableClose}
        />
      </Styles.Container>
    </Styles.Item>
  )
}

export default EvaluationTableItem
