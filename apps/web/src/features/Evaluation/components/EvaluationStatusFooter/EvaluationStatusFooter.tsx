import * as Styles from './styles'
import EvaluationFooter from '@/features/Evaluation/components/EvaluationFooter'
import { Button } from '@/shared/ui'
import ScoreBadge from '@/features/Evaluation/components/ScoreBadge'
import MemberCountBadge from '@/features/Evaluation/components/MemberCountBadge'
import { getEvaluationProgressStatus } from '@/features/Evaluation/components/EvaluationStatusFooter/EvaluationStatusFooter.factory'
import React from 'react'
import { IndividualResult } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'
import { useTranslations } from 'next-intl'

interface EvaluationStatusFooterProps {
  membersResult: IndividualResult[]
  isClosed: boolean
  onEvaluationTableClose: () => void
}

const EvaluationStatusFooter = ({
  membersResult,
  isClosed,
  onEvaluationTableClose,
}: EvaluationStatusFooterProps) => {
  const $t = useTranslations('evaluation')
  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const { score, totalScore, percentage, summitedLength, memberLength } =
    getEvaluationProgressStatus(membersResult)

  return (
    <EvaluationFooter>
      <Styles.Container>
        <Styles.Text>{$t('evaluation_status')}</Styles.Text>
        <Styles.Content>
          <MemberCountBadge>
            {$t('member_count', { submit_length: summitedLength, member_length: memberLength })}
          </MemberCountBadge>
          <ScoreBadge
            score={$t('total_score', { score, totalScore })}
            percentage={`${percentage}`}
          />
        </Styles.Content>
      </Styles.Container>
      {!isEvaluation && (
        <Button
          onClick={onEvaluationTableClose}
          text={isClosed ? $t('close_cancel') : $t('close')}
        />
      )}
    </EvaluationFooter>
  )
}

export default EvaluationStatusFooter
