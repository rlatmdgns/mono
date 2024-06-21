import * as Styles from './styles'
import TileInput from '@/modals/evaluation/components/TitleInput'
import EvaluationList from '@/modals/evaluation/components/EvaluationList/EvaluationList'
import React from 'react'
import SaveTemplateCheckbox from '@/modals/evaluation/CreateEvaluationTableModal/components/SaveTemplateCheckbox'

interface EvaluationTableFormBodyProps {
  children?: React.ReactNode
  isOms?: boolean
  isSaveTemplate?: boolean
}

const EvaluationTableFormBody = ({
  children,
  isOms,
  isSaveTemplate,
}: EvaluationTableFormBodyProps) => {
  return (
    <Styles.Wrapper>
      {children}
      <Styles.Content $isOms={isOms}>
        <TileInput isOms={isOms} />
        <EvaluationList />
        {isSaveTemplate && <SaveTemplateCheckbox />}
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default EvaluationTableFormBody
