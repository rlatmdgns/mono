import * as Styles from './styles'

import { EvaluationStatus } from '@/interface/evaluation'
import { EvaluationIdentification } from '@/interface/applicants'
import EvaluationStateList from '@/app/[locale]/postings/_components/EvaluationStateList'

import { Dropdown } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface EvaluationStateProps {
  isFail: boolean
  evaluationState: EvaluationStatus
  isEvaluationMember: boolean
  isInaccessible: boolean
  evaluationIdentificationList: EvaluationIdentification[]
}

const EvaluationState = ({
  isFail,
  evaluationState,
  isEvaluationMember,
  isInaccessible,
  evaluationIdentificationList,
}: EvaluationStateProps) => {
  const hasEvaluation = evaluationState !== 'none'
  const isClosed = evaluationState === 'closed'
  const $t = useTranslations('announcement_detail')

  const evaluationCount = evaluationIdentificationList.length
  const evaluationCompleteCount = evaluationIdentificationList.filter(
    (user) => user.is_submitted,
  ).length

  if (isFail || isInaccessible || !isEvaluationMember || !hasEvaluation) return null

  if (isClosed) {
    return (
      <Styles.Wrapper>
        <Icon icon="icon/check-solid" color="neutralGray400" />
        <Styles.Text $isClosed>{$t('evaluation_closed')}</Styles.Text>
      </Styles.Wrapper>
    )
  }

  return (
    <Dropdown
      button={
        <Styles.Box>
          <Styles.Text>
            {$t('evaluation_status')} ({evaluationCompleteCount}/{evaluationCount})
          </Styles.Text>
          <Icon icon="icon/right-line" color="blue500" />
        </Styles.Box>
      }
      direction="left"
    >
      <EvaluationStateList evaluationIdentificationList={evaluationIdentificationList} />
    </Dropdown>
  )
}

export default EvaluationState
