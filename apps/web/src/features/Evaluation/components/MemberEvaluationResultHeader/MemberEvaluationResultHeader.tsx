import * as Styles from './styles'

import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'

import ScoreBadge from '@/features/Evaluation/components/ScoreBadge'
import EvaluationHeader from '@/features/Evaluation/components/EvaluationHeader'
import DeleteMyEvaluationButton from '@/features/Evaluation/components/DeleteMyEvaluationButton'

import { EvaluationViewState } from '@/features/Evaluation/Evaluation.interface'

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

interface MemberEvaluationResultHeaderProps {
  evaluationId: string
  applicantId: string
  tableId: string
  isCanUpdate: boolean
  tableTitle: string
  backTo: EvaluationViewState
  isMe: boolean
  onUpdateMyForm: () => void
  currentScore: number
}

const MemberEvaluationResultHeader = ({
  evaluationId,
  applicantId,
  tableId,
  isCanUpdate,
  tableTitle,
  backTo,
  isMe,
  onUpdateMyForm,
  currentScore,
}: MemberEvaluationResultHeaderProps) => {
  const currentLocale = useLocale()
  const $t = useTranslations('evaluation')

  if (!isMe || (isMe && !isCanUpdate)) {
    return (
      <EvaluationHeader content={tableTitle} backTo={backTo}>
        <ScoreBadge score={`${currentScore} ${currentLocale === 'ko' ? '점' : ''}`} />
      </EvaluationHeader>
    )
  }
  return (
    <EvaluationHeader
      content={
        <Styles.Content>
          <Styles.TableTitle>{tableTitle}</Styles.TableTitle>
          <ScoreBadge score={`${currentScore}${currentLocale === 'ko' ? '점' : ''}`} />
        </Styles.Content>
      }
      backTo={backTo}
    >
      <Dropdown isNotPortal button={<IconButton icon="icon/more-solid" />}>
        <Dropdown.Item onClick={onUpdateMyForm}>
          <Icon icon="icon/edit-solid" color="neutralGray500" />
          {$t('edit_evaluation')}
        </Dropdown.Item>
        <DeleteMyEvaluationButton
          evaluationId={evaluationId}
          applicantId={applicantId}
          tableId={tableId}
        />
      </Dropdown>
    </EvaluationHeader>
  )
}

export default MemberEvaluationResultHeader
