import React from 'react'
import { ModalLayout } from '@/shared/ui'
import * as Styles from './styles'
import RequestDocumentHeader from '@/modals/RequestDocumentModal/components/RequestDocumentHeader'
import RequestDocumentFooter from '@/modals/RequestDocumentModal/components/RequestDocumentFooter'
import RequestDocumentContent from '@/modals/RequestDocumentModal/components/RequestDocumentContent'
import { FormProvider, useForm } from 'react-hook-form'

interface RequestDocumentModalProps {
  onClose: () => void
}

const RequestDocumentModal = ({ onClose }: RequestDocumentModalProps) => {
  const method = useForm()

  return (
    <ModalLayout isDimmed onClick={onClose}>
      <Styles.Wrapper>
        <RequestDocumentHeader />
        <FormProvider {...method}>
          <RequestDocumentContent />
          <RequestDocumentFooter onClose={onClose} />
        </FormProvider>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default RequestDocumentModal
