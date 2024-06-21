import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Icon } from '@repo/ui'
import React from 'react'
import { useTranslations } from 'next-intl'

interface CreateEvaluationTableButtonProps {
  evaluationId: number
}

const CreateEvaluationTableButton = ({ evaluationId }: CreateEvaluationTableButtonProps) => {
  const $t = useTranslations('evaluation')
  const { openModal } = useModal()

  const handleClick = () => {
    openModal(MODAL.CREATE_EVALUATION_TABLE, { evaluationId })
  }

  return (
    <Styles.Wrapper onClick={handleClick} type="button">
      {$t('generate_evaluation_table')}
      <Icon icon="icon/add-solid" color="blue500" />
    </Styles.Wrapper>
  )
}

export default CreateEvaluationTableButton
