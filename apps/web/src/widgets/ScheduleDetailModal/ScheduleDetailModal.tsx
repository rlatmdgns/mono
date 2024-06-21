import * as Styles from './styles'

import { useEffect } from 'react'
import { useResetRecoilState, useSetRecoilState } from 'recoil'

import { ModalLayout } from '@/shared/ui'
import { CurrentInterviewPlaceAtom } from '@/shared/ui/LocationSelect/recoil/atom'
import { ScheduleDetailDate } from '@/entities/InterviewSchedule'
import { ScheduleDetailAtom, ScheduleDetailContent } from '@/features/InterviewSchedule'
import { useScheduleDetail } from './model/useScheduleDetail'
import { useScheduleController } from './model/useScheduleController'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface ScheduleDetailModalProps {
  currentIdx: number
  scheduleIds: string[]
  onClose: () => void
}

const ScheduleDetailModal = ({ currentIdx, scheduleIds, onClose }: ScheduleDetailModalProps) => {
  const setCurrentInterviewPlace = useSetRecoilState(CurrentInterviewPlaceAtom)
  const setScheduleDetail = useSetRecoilState(ScheduleDetailAtom)
  const resetScheduleDetail = useResetRecoilState(ScheduleDetailAtom)
  const $t = useTranslations('common')

  const {
    currentScheduleId,
    isPrevDisabledStatus,
    isNextDisabledStatus,
    handlePrevDetail,
    handleNextDetail,
  } = useScheduleController({ currentIdx, scheduleIds })
  const { data } = useScheduleDetail(currentScheduleId)

  const getScheduleDetail = () => {
    if (!data?.success) return
    const schedule_detail = data.data
    setScheduleDetail(schedule_detail)

    const currentInterviewPlace = {
      type: 'contact',
      desc: '',
    }

    if (schedule_detail.schedule_address.indexOf($t('interview')) > -1) {
      currentInterviewPlace.type = 'untact'
    }

    currentInterviewPlace.desc = schedule_detail.schedule_detail_address
      ? schedule_detail.schedule_address + schedule_detail.schedule_detail_address
      : schedule_detail.schedule_address
    setCurrentInterviewPlace(currentInterviewPlace)
  }
  const handleCloseModal = () => {
    resetScheduleDetail()
    onClose()
  }

  useEffect(() => {
    getScheduleDetail()
  }, [data, currentScheduleId])

  return (
    <ModalLayout isDimmed onClick={handleCloseModal}>
      <Styles.Wrapper>
        <Styles.PrevButton onClick={handlePrevDetail} disabled={isPrevDisabledStatus}>
          <Icon icon="icon/left-line" color="neutralGray700" size={20} />
        </Styles.PrevButton>
        <Styles.DetailBody>
          <ScheduleDetailDate />
          <ScheduleDetailContent handleCloseModal={handleCloseModal} />
        </Styles.DetailBody>
        <Styles.NextButton onClick={handleNextDetail} disabled={isNextDisabledStatus}>
          <Icon icon="icon/right-line" color="neutralGray700" size={20} />
        </Styles.NextButton>
      </Styles.Wrapper>
    </ModalLayout>
  )
}
export default ScheduleDetailModal
