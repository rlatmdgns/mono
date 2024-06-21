import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface EvaluationHeaderProps {
  stepName: string
  applicantCount: number
}

const EvaluationSettingHeader = ({ stepName, applicantCount }: EvaluationHeaderProps) => {
  const $t = useTranslations('announcement_detail')
  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('features.evaluation_setting')}</Styles.Title>
      <Styles.DescriptionBox>
        <Styles.StepName>{stepName}</Styles.StepName>
        <Styles.ApplicantCount>/ {$t('applicant_count', { applicantCount })}</Styles.ApplicantCount>
      </Styles.DescriptionBox>
    </Styles.Wrapper>
  )
}

export default EvaluationSettingHeader
