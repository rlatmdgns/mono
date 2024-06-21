import { useRecoilValue } from 'recoil'

import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import {
  SCHEDULE_CANCEL_OPTIONS,
  ScheduleDetailAtom,
  useCancelSchedule,
  useDeleteSchedule,
} from '@/features/InterviewSchedule'
import { useTranslations } from 'next-intl'

export const useScheduleModify = () => {
  const scheduleDetail = useRecoilValue(ScheduleDetailAtom)
  const posting_id = String(scheduleDetail?.posting_id)
  const schedule_id = String(scheduleDetail?.schedule_id)
  const $t = useTranslations()
  const { openModal, closeModal } = useModal()

  const { cancelMutate } = useCancelSchedule(schedule_id)
  const { deleteMutate } = useDeleteSchedule(schedule_id)

  const getScheduleCancelOptions = () => {
    return SCHEDULE_CANCEL_OPTIONS.map((option) => {
      return {
        ...option,
        label: $t(`schedule.cancel_options.${option.translateKey}`),
      }
    })
  }

  const handleDelete = () => {
    openModal(MODAL.CONFIRM, {
      iconSource: 'icon/delete-solid',
      textCancel: $t('common.cancel'),
      textConfirm: $t('common.delete'),
      title: $t('messages.delete_interview'),
      subtitle: $t('messages.delete_interview_description'),
      onClick: handleScheduleDelete,
    })
  }
  const handleCancel = () => {
    openModal(MODAL.CONFIRM_RADIO, {
      title: $t('messages.cancel_interview'),
      subtitle: $t('messages.cancel_interview_description'),
      iconSource: 'icon/interview-cancle-solid',
      options: getScheduleCancelOptions(),
      textConfirm: $t('interview.cancel'),
      onSubmit: (value: string) => {
        cancelMutate({ canceled_reason: value })
        closeModal(MODAL.CONFIRM_RADIO)
        closeModal(MODAL.SCHEDULE_DETAIL)
      },
    })
  }

  const handleScheduleModify = () => {
    openModal(MODAL.MODIFY_SCHEDULE, { posting_id })
  }

  const handleScheduleDelete = async () => {
    deleteMutate()
    closeModal(MODAL.CONFIRM)
    closeModal(MODAL.SCHEDULE_DETAIL)
  }

  return {
    handleDelete,
    handleCancel,
    handleScheduleModify,
  }
}
