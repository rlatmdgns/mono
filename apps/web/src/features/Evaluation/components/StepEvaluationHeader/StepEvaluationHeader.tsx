import * as Styles from './styles'
import { getStepEvaluationTotalStatus } from '@/features/Evaluation/components/StepEvaluationHeader/StepEvaluationHeader.factory'
import { ApplicantStepEvaluation } from '@/services/evaluation/getApplicantEvaluation/getApplicantEvaluation.interface'
import { Icon } from '@repo/ui'
import React from 'react'
import { useLocale } from 'next-intl'

interface EvaluationClosingHeaderForTotalProps {
  applicantEvaluation: ApplicantStepEvaluation[]
}

const StepEvaluationHeader = ({ applicantEvaluation }: EvaluationClosingHeaderForTotalProps) => {
  const currentLocale = useLocale()
  const { totalScoreSum, percentageSum } = getStepEvaluationTotalStatus(applicantEvaluation)

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Icon icon="icon/assessment-solid" color="blue500" />
        <Styles.Score>
          {totalScoreSum}
          {currentLocale === 'ko' ? '점' : ''}
        </Styles.Score>
        <Styles.PercentageBox>
          <Styles.PercentageScore>{percentageSum}</Styles.PercentageScore>/100
          {currentLocale === 'ko' ? '점' : ''}
        </Styles.PercentageBox>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default StepEvaluationHeader
