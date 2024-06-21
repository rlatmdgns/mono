import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { EvaluationTableApplicantStatus } from '@/services/evaluation/getEvaluationTableApplicantStatus/getEvaluationTableApplicantStatus.interface'
import { useTranslations } from 'next-intl'

interface EvaluationTableClosingStatusHeaderProps {
  tableTitle: string
  applicants: EvaluationTableApplicantStatus[]
}

const EvaluationTableClosingStatusHeader = ({
  tableTitle,
  applicants,
}: EvaluationTableClosingStatusHeaderProps) => {
  const { watch } = useFormContext()

  const closeApplicantCount = applicants.filter(
    (applicant) => applicant.table_applicant_status === 'TA_CLOSED',
  ).length
  const closeStatusCount = closeApplicantCount - watch('applicant_ids').length
  const $t = useTranslations('evaluation')

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Title>{$t('evaluation_table_deadline_status')}</Styles.Title>
        <Styles.CountBox>
          <Styles.SelectCount>{closeStatusCount}</Styles.SelectCount>/{applicants.length}
        </Styles.CountBox>
      </Styles.Container>
      <Styles.TableName>{tableTitle}</Styles.TableName>
    </Styles.Wrapper>
  )
}

export default EvaluationTableClosingStatusHeader
