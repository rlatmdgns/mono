import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import PreviewEvaluationTableHeader from '@/modals/evaluation/PreviewEvaluationTableModal/container/PreviewEvaluationTableHeader'
import PreviewEvaluationTableBody from '@/modals/evaluation/PreviewEvaluationTableModal/container/PreviewEvaluationTableBody'
import PreviewEvaluationTableFooter from '@/modals/evaluation/PreviewEvaluationTableModal/container/PreviewEvaluationTableFooter'
import { FormProvider, useForm } from 'react-hook-form'
import { getEvaluationArticleLength } from '@/modals/evaluation/evaluation.factory'
import useGetEvaluationTable from '@/features/Evaluation/hooks/useGetEvaluationTable'

interface PreviewEvaluationTableModalProps {
  onClose: () => void
  title: string
  stepName: string
  tableId: number
  evaluationId: number
}

const PreviewEvaluationTableModal = ({
  onClose,
  title,
  stepName,
  tableId,
  evaluationId,
}: PreviewEvaluationTableModalProps) => {
  const { data } = useGetEvaluationTable(`${evaluationId}`, `${tableId}`)
  const methods = useForm()

  if (!data) return null

  const length = getEvaluationArticleLength(data.evaluation_sections)

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Wrapper>
          <PreviewEvaluationTableHeader stepName={stepName} length={length} />
          <PreviewEvaluationTableBody
            title={title}
            evaluation_sections={data.evaluation_sections}
          />
          <PreviewEvaluationTableFooter onClose={onClose} />
        </Styles.Wrapper>
      </FormProvider>
    </ModalLayout>
  )
}

export default PreviewEvaluationTableModal
