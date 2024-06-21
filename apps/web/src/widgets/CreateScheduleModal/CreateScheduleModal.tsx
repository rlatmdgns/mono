import * as Styles from './styles'
import React from 'react'

import { ModalLayout } from '@/shared/ui'
import { CreateScheduleForm, CreateScheduleHeader } from '@/features/CreateSchedule'

interface CreateScheduleModalProps {
  onClose: () => void
}

const CreateScheduleModal = ({ onClose }: CreateScheduleModalProps) => {
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <CreateScheduleHeader onClick={onClose} />
        <CreateScheduleForm onClick={onClose} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default CreateScheduleModal
