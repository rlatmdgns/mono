import * as Styles from './styles'
import React from 'react'
import { IconButton } from '@/shared/ui'
import { useSetRecoilState } from 'recoil'
import { evaluationViewStateAtom } from '@/features/Evaluation/recoil/atom'
import { EvaluationViewState } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationHeaderProps {
  content: React.ReactNode
  backTo: EvaluationViewState
  onClick?: () => void
  children?: React.ReactNode
}

const EvaluationHeader = ({ content, backTo, onClick, children }: EvaluationHeaderProps) => {
  const setEvaluationViewState = useSetRecoilState(evaluationViewStateAtom)
  const handleBack = () => {
    setEvaluationViewState(backTo)
    onClick && onClick()
  }

  return (
    <Styles.Wrapper>
      <IconButton onClick={handleBack} icon="icon/left-line" size="lg" />
      <Styles.Content>{content}</Styles.Content>
      {children}
    </Styles.Wrapper>
  )
}

export default EvaluationHeader
