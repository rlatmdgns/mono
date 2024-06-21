import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { useEvaluationConstants } from '@/features/Evaluation/hooks/useEvaluationConstants'

interface EvaluationTableProgressInfoProps {
  tableTitle: string
  evaluationTableStatus: string
  membersCount: number
  submittedCount: number
}

const EvaluationTableInfo = ({
  tableTitle,
  evaluationTableStatus,
  membersCount,
  submittedCount,
}: EvaluationTableProgressInfoProps) => {
  const { getStatusText } = useEvaluationConstants()
  const status = getStatusText(evaluationTableStatus)
  const $t = useTranslations('evaluation')

  return (
    <Styles.TextBox>
      <Styles.Title>{tableTitle}</Styles.Title>
      <Styles.Desc>
        <Styles.Status>{status}</Styles.Status>
        <Styles.StatusCount>
          {submittedCount}/{membersCount} {$t('submission_complete')}
        </Styles.StatusCount>
      </Styles.Desc>
    </Styles.TextBox>
  )
}

export default EvaluationTableInfo
