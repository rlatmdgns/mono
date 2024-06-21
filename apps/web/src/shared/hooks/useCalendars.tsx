import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks/index'

export const useCalendars = () => {
  const { openModal } = useModal()

  const handleCalendarSelect = (currentIdx: number, scheduleIds: string[]) => {
    openModal(MODAL.SCHEDULE_DETAIL, {
      currentIdx: currentIdx,
      scheduleIds: scheduleIds,
    })
  }
  return {
    handleCalendarSelect,
  }
}
