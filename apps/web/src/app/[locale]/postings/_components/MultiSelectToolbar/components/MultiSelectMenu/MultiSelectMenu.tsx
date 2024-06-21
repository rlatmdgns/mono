import useApplicantFail from '@/app/[locale]/postings/_hooks/useApplicantFail'
import { useModal } from '@/shared/hooks'
import { Button, Toast } from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import { SelectApplicant } from '@/interface/applicants'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MultiSelectMenuProps {
  postingId: string
  applicants: SelectApplicant[]
  selectReset: () => void
}

const MultiSelectMenu = ({ postingId, applicants, selectReset }: MultiSelectMenuProps) => {
  const { openModal, closeModal } = useModal()
  const { failApplicantMutate } = useApplicantFail(postingId)

  const FAIL_NUMBER = 2

  const ids = applicants.map((applicant) => String(applicant.applicant_id))

  const isSameStep = applicants.every((applicant) => applicant.step_id === applicants[0].step_id)

  const hasFailApplicant = applicants.some(
    (applicant) => applicant.applicant_state === FAIL_NUMBER || applicant.is_fail === 'true',
  )

  const $t = useTranslations()
  const requestFail = (message: string) => {
    Toast.error(message)
    closeModal(MODAL.CONFIRM)
  }

  const fail = () => {
    if (!isSameStep) {
      return requestFail($t('messages.same_step_applicant_fail_error'))
    }
    failApplicantMutate({ applicant_id: ids, fail: true })
    closeModal(MODAL.CONFIRM)
    selectReset()
  }

  const handleFail = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('messages.select_applicant_fail_confirm'),
      iconSource: 'icon/cancle-solid',
      textConfirm: $t('common.confirm'),
      onClick: () => fail(),
    })
  }

  const handleMailWrite = () => {
    openModal(MODAL.WRITE_MAIL, {
      id: postingId,
    })
  }

  const handleRequestInterview = () => {
    if (hasFailApplicant) {
      return Toast.error($t('messages.fail_applicant_not_request_interview'))
    }
    if (!isSameStep) {
      return requestFail($t('messages.same_step_applicant_request_interview_error'))
    }
    openModal(MODAL.REQUEST_INTERVIEW, {
      id: postingId,
      title: $t('interview.request_interview'),
      onclick: () => {
        closeModal(MODAL.REQUEST_INTERVIEW)
      },
    })
  }

  return (
    <Styles.MultiSelectMenu>
      <Styles.Item>
        <Button
          state="standard"
          style="mono"
          iconSource="icon/mail-solid"
          text={$t('mail.write_mail')}
          onClick={handleMailWrite}
        />
      </Styles.Item>
      <Styles.Item>
        <Button
          state="standard"
          style="mono"
          iconSource="icon/calendar-solid"
          text={$t('interview.request_interview')}
          onClick={handleRequestInterview}
        />
      </Styles.Item>
      <Styles.Item>
        <Button
          state="warning"
          style="mono"
          iconSource="icon/cancle-solid"
          text={$t('common.fail')}
          onClick={handleFail}
        />
      </Styles.Item>
    </Styles.MultiSelectMenu>
  )
}

export default MultiSelectMenu
