import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { useRecoilValue } from 'recoil'
import { stepAtom } from '@/modals/evaluation/EvaluationSettingModal/recoil/atom'
import React from 'react'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

interface EvaluationTableCardProps {
  tableTitle: string
  tableId: number
  evaluationId: number
}

const EvaluationTableCard = ({ tableId, tableTitle, evaluationId }: EvaluationTableCardProps) => {
  const step = useRecoilValue(stepAtom)
  const { openModal } = useModal()
  const $t = useTranslations('evaluation')

  const handlePreviewOpen = (event: React.MouseEvent<HTMLElement>) => {
    const isInsideButtonClick = event.target !== event.currentTarget
    if (isInsideButtonClick) return
    openModal(MODAL.PREVIEW_EVALUATION_TABLE, {
      title: tableTitle,
      stepName: step?.step_name,
      tableId,
      evaluationId,
    })
  }

  const handleClosingStatusOpen = () => {
    openModal(MODAL.EVALUATION_TABLE_CLOSING_STATUS, {
      tableTitle,
      evaluationId,
      tableId,
    })
  }

  return (
    <Styles.Wrapper onClick={handlePreviewOpen}>
      <Styles.IconBox>
        <Icon icon="icon/assessment-solid" color="neutralGray500" />
      </Styles.IconBox>
      <Styles.Content>
        <Styles.Title>{tableTitle}</Styles.Title>
        <Styles.Button type="button" onClick={handleClosingStatusOpen}>
          {$t('evaluation_table_deadline_status')}
          <Icon icon="icon/right-line" color="neutralGray300" />
        </Styles.Button>
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default EvaluationTableCard
