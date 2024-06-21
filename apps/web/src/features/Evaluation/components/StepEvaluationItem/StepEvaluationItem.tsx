import * as Styles from './styles'
import { IconBoxButton, Tooltip } from '@/shared/ui'
import EvaluationTableList from '../EvaluationTableList'
import StepEvaluationBadge from '@/features/Evaluation/components/StepEvaluationBadge'
import { useState } from 'react'
import { EvaluationTableCloseHandler } from '@/features/Evaluation/Evaluation.interface'
import useGetApplicantEvaluationTables from '@/features/Evaluation/hooks/useGetApplicantEvaluationTables'
import { useTranslations } from 'next-intl'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'

interface EvaluationProgressItemProps {
  applicantId: string
  stepName: string
  evaluationId: string
  evaluationStatus: string
  userAuthority: string
  access: boolean
  tableScore?: number
  tableTotalScore?: number
  onEvaluationTableClose: EvaluationTableCloseHandler
}

const StepEvaluationItem = ({
  applicantId,
  stepName,
  evaluationId,
  evaluationStatus,
  access,
  userAuthority,
  tableScore = 0,
  tableTotalScore = 0,
  onEvaluationTableClose,
}: EvaluationProgressItemProps) => {
  const $t = useTranslations('messages')
  const { EVALUATION_CLOSE, NO_EVALUATION, getStatusText } = useEvaluationConstants()
  const { data } = useGetApplicantEvaluationTables(evaluationId, applicantId, access)
  const [isOpen, setIsOpen] = useState(false)

  const toggleIcon = isOpen ? 'icon/up-line' : 'icon/down-line'
  const status = getStatusText(evaluationStatus)
  const isClosed = status === EVALUATION_CLOSE
  const isNotTableAccess = status === NO_EVALUATION || !access

  const handleToggle = () => setIsOpen(!isOpen)

  if (!applicantId) return null

  return (
    <Tooltip disabled={access} text={$t('evaluation_member_required')} direction="left">
      <Styles.Wrapper>
        <Styles.Container>
          <Styles.Content>
            <Styles.Step $isClosed={isClosed}>{stepName}</Styles.Step>
            <StepEvaluationBadge
              evaluationStatus={evaluationStatus}
              tableScore={tableScore}
              tableTotalScore={tableTotalScore}
              access={access}
            />
          </Styles.Content>
          {!isNotTableAccess && (
            <IconBoxButton
              icon={toggleIcon}
              onClick={handleToggle}
              state="standard"
              style="mono"
              size="xs"
            />
          )}
        </Styles.Container>
        <EvaluationTableList
          isOpen={isOpen}
          tables={data?.tables}
          evaluationId={evaluationId}
          userAuthority={userAuthority}
          onEvaluationTableClose={onEvaluationTableClose}
        />
      </Styles.Wrapper>
    </Tooltip>
  )
}

export default StepEvaluationItem
