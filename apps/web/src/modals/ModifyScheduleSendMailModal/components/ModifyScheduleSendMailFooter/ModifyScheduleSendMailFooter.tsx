import * as Styles from './styles'
import React from 'react'
import useModifySchedule from '@/modals/ModifyScheduleModal/hooks/useModifySchedule'
import { Button } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { SendAlarmAtom } from '@/modals/ModifyScheduleSendMailModal/recoil/atom'
import { useTranslations } from 'next-intl'

interface ModifyScheduleSendMailFooterProps {
  postData: any
  scheduleId: string
  onClose: () => void
  modifyScheduleClose: () => void
}

const ModifyScheduleSendMailFooter = ({
  postData,
  scheduleId,
  onClose,
  modifyScheduleClose,
}: ModifyScheduleSendMailFooterProps) => {
  const sendAlarm = useRecoilValue(SendAlarmAtom)
  const { getValues, watch } = useFormContext()
  const isValidate = !sendAlarm
    ? true
    : watch('send_applicants')?.length > 0 || watch('send_interviewers')?.length > 0

  const $t = useTranslations('common')
  const handleModalClose = () => {
    onClose()
    modifyScheduleClose()
  }

  const { modifyScheduleMutate } = useModifySchedule(scheduleId, handleModalClose)

  const handleSubmit = () => {
    const modifyData = {
      send_alarm: sendAlarm,
      ...getValues(),
      ...postData,
    }
    modifyScheduleMutate(modifyData)
  }

  return (
    <Styles.Footer>
      <Button text={$t('close')} style="fill-weak" state="standard" size="md" onClick={onClose} />
      <Button
        disabled={!isValidate}
        type="submit"
        text={$t('confirm')}
        size="md"
        onClick={handleSubmit}
      />
    </Styles.Footer>
  )
}

export default ModifyScheduleSendMailFooter
