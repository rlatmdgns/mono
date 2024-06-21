import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import EvaluationTableClosingStatusHeader from '@/modals/evaluation/EvaluationTableClosingStatusModal/container/EvaluationTableClosingStatusHeader'
import EvaluationTableClosingStatusBody from '@/modals/evaluation/EvaluationTableClosingStatusModal/container/EvaluationTableClosingStatusBody'
import EvaluationTableClosingStatusFooter from '@/modals/evaluation/EvaluationTableClosingStatusModal/container/EvaluationTableClosingStatusFooter'
import useGetEvaluationTableApplicantStatus from '@/modals/evaluation/EvaluationTableClosingStatusModal/hooks/useGetEvaluationTableApplicantStatus'
import useCloseEvaluationTables from '@/features/Evaluation/hooks/useCloseEvaluationTables'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'

interface EvaluationTableClosingStatusModalProps {
  onClose: () => void
  tableTitle: string
  tableId: number
  evaluationId: number
}

const EvaluationTableClosingStatusModal = ({
  tableTitle,
  onClose,
  tableId,
  evaluationId,
}: EvaluationTableClosingStatusModalProps) => {
  const { data } = useGetEvaluationTableApplicantStatus(`${evaluationId}`, `${tableId}`)
  const { closeEvaluationTableMutate } = useCloseEvaluationTables()
  const methods = useForm({
    defaultValues: {
      applicant_ids: [],
    },
  })
  const { handleSubmit } = methods

  const handleFormSubmit = (form: FieldValues) => {
    const data = {
      evaluation_id: `${evaluationId}`,
      table_id: `${tableId}`,
      data: {
        applicant_ids: form.applicant_ids,
      },
    }
    closeEvaluationTableMutate(data)
    onClose()
  }

  if (!data) return null

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <EvaluationTableClosingStatusHeader tableTitle={tableTitle} applicants={data} />
          <EvaluationTableClosingStatusBody applicants={data} />
          <EvaluationTableClosingStatusFooter onClose={onClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default EvaluationTableClosingStatusModal
