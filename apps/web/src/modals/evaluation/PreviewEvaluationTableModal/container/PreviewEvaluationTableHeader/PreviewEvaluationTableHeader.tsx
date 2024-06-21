import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface PreviewEvaluationTableHeaderProps {
  stepName: string
  length: number
}

const PreviewEvaluationTableHeader = ({ stepName, length }: PreviewEvaluationTableHeaderProps) => {
  const $t = useTranslations('evaluation')
  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('evaluation_table_preview')}</Styles.Title>
      <Styles.DescriptionBox>
        <Styles.Step>{stepName}</Styles.Step>
        <Styles.EvaluationTable>
          {$t('evaluation_items_count', { length: 10, total: length * 10 })}
        </Styles.EvaluationTable>
      </Styles.DescriptionBox>
    </Styles.Wrapper>
  )
}

export default PreviewEvaluationTableHeader
