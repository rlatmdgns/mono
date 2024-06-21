import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import SelectTemplateHeader from '@/modals/SelectTemplateModal/container/SelectTemplateHeader'
import SelectTemplateBody from '@/modals/SelectTemplateModal/container/SelectTemplateBody'
import SelectTemplateFooter from '@/modals/SelectTemplateModal/container/SelectTemplateFooter'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Template } from '@/interface/template'

interface SelectTemplateModalProps {
  onClose: () => void
  templates: Template[]
  onSubmit: (template_id: number) => void
}

const SelectTemplateModal = ({ onClose, templates, onSubmit }: SelectTemplateModalProps) => {
  const methods = useForm()
  const { handleSubmit } = methods

  const handleFormSubmit = (form: FieldValues) => {
    const { template_id } = form
    onSubmit(template_id)
    onClose()
  }

  return (
    <ModalLayout onClick={onClose} isDimmed zIndex={50}>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <SelectTemplateHeader />
          <SelectTemplateBody templates={templates} />
          <SelectTemplateFooter onClose={onClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default SelectTemplateModal
