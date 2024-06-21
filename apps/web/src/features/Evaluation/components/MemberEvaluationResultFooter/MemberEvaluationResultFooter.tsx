import * as Styles from './styles'
import React from 'react'
import { AUTHORITY } from '@/shared/constants'
import EvaluationFooter from '@/features/Evaluation/components/EvaluationFooter'
import { Avatar, Button, IconButton } from '@/shared/ui'
import { getMemberEvaluationResult } from '@/features/Evaluation/components/MemberEvaluationResultFooter/MemberEvaluationResultFooter.factory'
import { useRecoilState } from 'recoil'
import { evaluationMemberResultAtom } from '@/features/Evaluation/recoil/atom'
import { useAuthority } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface MemberEvaluationResultFooterProps {
  isClosed: boolean
  userName: string
  userProfile: string
  isMe: boolean
  onEvaluationTableClose: () => void
}

const MemberEvaluationResultFooter = ({
  isClosed,
  userName,
  userProfile,
  isMe,
  onEvaluationTableClose,
}: MemberEvaluationResultFooterProps) => {
  const $t = useTranslations('evaluation')
  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const [evaluationMemberResult, setEvaluationMemberResult] = useRecoilState(
    evaluationMemberResultAtom,
  )
  const handleSelectedIdChange = (id: string) => {
    setEvaluationMemberResult({
      ...evaluationMemberResult,
      selectedIdentification: id,
    })
  }
  const { isArrowDisabled, handlePrev, handleNext } = getMemberEvaluationResult(
    evaluationMemberResult,
    handleSelectedIdChange,
  )

  return (
    <EvaluationFooter>
      <Styles.Container>
        <IconButton onClick={handlePrev} disabled={isArrowDisabled} icon="icon/left-line" />
        <Styles.Content>
          <Avatar size="sm" alt={userName} src={userProfile} />
          <Styles.Name>{userName}</Styles.Name>
          {isMe && <Styles.Myself>MY</Styles.Myself>}
        </Styles.Content>
        <IconButton onClick={handleNext} disabled={isArrowDisabled} icon="icon/right-line" />
      </Styles.Container>
      {!isEvaluation && (
        <Button
          onClick={onEvaluationTableClose}
          text={isClosed ? $t('cancel_evaluation_deadline') : $t('evaluation_deadline_active')}
        />
      )}
    </EvaluationFooter>
  )
}

export default MemberEvaluationResultFooter
