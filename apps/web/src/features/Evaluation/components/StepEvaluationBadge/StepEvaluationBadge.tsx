import * as Styles from './styles'
import DividerDot from '@/features/Evaluation/components/DividerDot'
import { getNumberToFixed } from '@/shared/lib/utils'
import { Icon } from '@repo/ui'
import { useLocale, useTranslations } from 'next-intl'
import { useStepEvaluationBadge } from '@/features/Evaluation/components/StepEvaluationBadge/hooks/useStepEvaluationbadge'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'

interface StepEvaluationBadgeProps {
  evaluationStatus: string
  tableScore?: number
  tableTotalScore?: number
  access: boolean
}

const StepEvaluationBadge = ({
  evaluationStatus,
  tableScore = 0,
  tableTotalScore = 0,
  access,
}: StepEvaluationBadgeProps) => {
  const $t = useTranslations('evaluation')
  const { getStepEvaluationStatus } = useStepEvaluationBadge()
  const { EVALUATION_CLOSE } = useEvaluationConstants()
  const currentLocale = useLocale()
  const { icon, iconColor, status } = getStepEvaluationStatus(access, evaluationStatus)
  const percentage = getNumberToFixed((tableScore / tableTotalScore) * 100) || 0
  const isClosed = status === EVALUATION_CLOSE

  return (
    <Styles.Wrapper>
      <Icon icon={icon} color={iconColor} />
      <Styles.Status $status={status}>{status}</Styles.Status>
      {isClosed && (
        <Styles.ScoreBox>
          <DividerDot />
          <Styles.TotalScore>
            {tableScore}
            {currentLocale === 'ko' ? '점' : ''}{' '}
          </Styles.TotalScore>
          <Styles.PercentageBox>
            ({$t('converted_score')}
            <Styles.PercentageScore>
              {` ${percentage}`}
              {currentLocale === 'ko' ? '점' : ''}
            </Styles.PercentageScore>
            )
          </Styles.PercentageBox>
        </Styles.ScoreBox>
      )}
    </Styles.Wrapper>
  )
}

export default StepEvaluationBadge
