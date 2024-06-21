import { MODAL } from '@/shared/constants'
import { Button, Empty } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { EvaluationTable } from '@/interface/evaluation'
import { useTranslations } from 'next-intl'

interface EmptyEvaluationTableProps {
  evaluationTables: EvaluationTable[]
  evaluationId: number
}

const EmptyEvaluationTable = ({ evaluationId, evaluationTables }: EmptyEvaluationTableProps) => {
  const { openModal } = useModal()
  const $t = useTranslations('evaluation')
  const handleClick = () => {
    openModal(MODAL.CREATE_EVALUATION_TABLE, { evaluationId })
  }

  if (evaluationTables.length > 0) return null

  return (
    <Empty
      iconSource="icon/assessment-solid"
      title={$t('empty_evaluation_table')}
      description={$t('empty_evaluation_table_description')}
    >
      <Button
        onClick={handleClick}
        iconSource="icon/add-solid"
        text={$t('create_evaluation_table')}
        width="fit-content"
        style="mono"
      />
    </Empty>
  )
}

export default EmptyEvaluationTable
