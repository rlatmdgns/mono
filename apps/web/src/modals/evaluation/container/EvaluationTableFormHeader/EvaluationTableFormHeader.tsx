import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

interface CreateEvaluationTableHeaderProps {
  title: string
  stepName?: string
  length?: number
  isPreview?: boolean
}

const EvaluationTableFormHeader = ({
  title,
  stepName,
  isPreview,
  length = 0,
}: CreateEvaluationTableHeaderProps) => {
  const $t = useTranslations('evaluation')
  return (
    <Styles.Wrapper>
      <Styles.TitleBox>
        <Styles.Title>{title}</Styles.Title>
        {!isPreview && (
          <Tooltip text={$t('high_max_score_tooltip_text')} direction="right">
            <Icon icon="icon/info-solid" color="neutralGray300" />
          </Tooltip>
        )}
      </Styles.TitleBox>
      <Styles.DescriptionBox>
        {stepName && <Styles.Step>{stepName}</Styles.Step>}
        <Styles.EvaluationTable>
          {$t('evaluation_items_count', { length: 10, total: length * 10 })}
        </Styles.EvaluationTable>
      </Styles.DescriptionBox>
    </Styles.Wrapper>
  )
}

export default EvaluationTableFormHeader
