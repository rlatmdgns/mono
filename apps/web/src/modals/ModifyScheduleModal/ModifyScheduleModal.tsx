import { ModalLayout } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import ModifyScheduleHeader from '@/modals/ModifyScheduleModal/components/ModifyScheduleHeader'
import ModifyScheduleForm from '@/modals/ModifyScheduleModal/components/ModifyScheduleForm'
import { useRecoilValue } from 'recoil'
import { useScheduleRequirement } from '@/shared/hooks'
import { ScheduleDetailAtom } from '@/features/InterviewSchedule'

interface CreateScheduleModalProps {
  posting_id: string
  onClose: () => void
}

const ModifyScheduleModal = ({ posting_id, onClose }: CreateScheduleModalProps) => {
  const scheduleDetail = useRecoilValue(ScheduleDetailAtom)
  const { attendantOptions } = useScheduleRequirement(posting_id)

  if (!scheduleDetail || attendantOptions.length < 1) return
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <ModifyScheduleHeader onClick={onClose} />
        <ModifyScheduleForm
          onClick={onClose}
          scheduleDetail={scheduleDetail}
          attendantOptions={attendantOptions}
        />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default ModifyScheduleModal
