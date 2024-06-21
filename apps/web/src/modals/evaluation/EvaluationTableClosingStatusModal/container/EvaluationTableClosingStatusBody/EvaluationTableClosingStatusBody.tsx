import * as Styles from './styles'
import ApplicantCardList from '@/modals/evaluation/EvaluationTableClosingStatusModal/components/ApplicantCardList'
import { EvaluationTableApplicantStatus } from '@/services/evaluation/getEvaluationTableApplicantStatus/getEvaluationTableApplicantStatus.interface'
import { SearchInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface EvaluationTableClosingStatusBodyProps {
  applicants: EvaluationTableApplicantStatus[]
}

const EvaluationTableClosingStatusBody = ({
  applicants,
}: EvaluationTableClosingStatusBodyProps) => {
  const $t = useTranslations('common')
  return (
    <Styles.Wrapper>
      <Styles.SearchBox>
        <SearchInput placeholder={$t('applicant_name_search')} />
      </Styles.SearchBox>
      <ApplicantCardList applicants={applicants} />
    </Styles.Wrapper>
  )
}

export default EvaluationTableClosingStatusBody
