import * as Styles from './styles'
import React from 'react'

interface EvaluationBodyProps {
  size?: 'md' | 'lg'
  hasFooter?: boolean
  children: React.ReactNode
}

const EvaluationBody = ({ children, hasFooter, size = 'md' }: EvaluationBodyProps) => {
  return (
    <Styles.Wrapper $size={size} $hasFooter={hasFooter}>
      {children}
    </Styles.Wrapper>
  )
}

export default EvaluationBody
