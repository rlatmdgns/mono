import * as Styles from './styles'
import React from 'react'

interface EvaluationFooterProps {
  children: React.ReactNode
}

const EvaluationFooter = ({ children }: EvaluationFooterProps) => {
  return <Styles.Wrapper>{children}</Styles.Wrapper>
}

export default EvaluationFooter
