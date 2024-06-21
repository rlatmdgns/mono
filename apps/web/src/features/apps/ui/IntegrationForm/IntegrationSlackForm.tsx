import React from 'react'
import * as Styles from './styles'
import { Button, CheckBox } from '@/shared/ui'
import { SlackAlertValues } from '@/entities/apps/types/slack'
import { Controller, useForm } from 'react-hook-form'
import { useUnConnectSlack } from '@/features/apps/hooks/useUnConnectSlack'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useUpdateSlackNotification } from '@/features/apps/hooks/useUpdateSlackNotification'

interface IntegrationSlackFormProps {
  isOpen?: boolean
  values: SlackAlertValues
  onClose: () => void
}

export const IntegrationSlackForm = ({ isOpen, values, onClose }: IntegrationSlackFormProps) => {
  const { openModal, closeModal } = useModal()
  const method = useForm({
    defaultValues: values,
  })
  const { control, formState, handleSubmit } = method
  const { isDirty } = formState

  const { unConnectSlackMutate } = useUnConnectSlack()
  const { updateSlackMutate } = useUpdateSlackNotification()
  const handleUnConnect = () => {
    openModal(MODAL.CONFIRM, {
      title: 'Slack 연동을 해제하시겠습니까?',
      onClick: () => {
        unConnectSlackMutate()
        closeModal(MODAL.CONFIRM)
        onClose()
      },
      textConfirm: '해제하기',
    })
  }

  const handleSave = async (values: SlackAlertValues) => {
    updateSlackMutate(values)
  }
  if (!isOpen) return null

  return (
    <Styles.Form onSubmit={handleSubmit(handleSave)}>
      <Styles.Content>
        <Styles.Title>Slack으로 받을 알림</Styles.Title>
        <Controller
          control={control}
          render={({ field }) => {
            return (
              <CheckBox
                isChecked={field.value}
                onChange={field.onChange}
                text="새로운 지원자 알림"
              />
            )
          }}
          name={'can_alert_new_applicants'}
        />
        <Controller
          control={control}
          render={({ field }) => {
            return (
              <CheckBox
                isChecked={field.value}
                onChange={field.onChange}
                text="면접 일정 리마인드 알림"
              />
            )
          }}
          name={'can_alert_interview_reminders'}
        />
        <Controller
          control={control}
          render={({ field }) => {
            return (
              <CheckBox isChecked={field.value} onChange={field.onChange} text="면접 확정 알림" />
            )
          }}
          name={'can_alert_interview_fixed'}
        />
        <Controller
          control={control}
          render={({ field }) => {
            return (
              <CheckBox isChecked={field.value} onChange={field.onChange} text="지원자 답장 알림" />
            )
          }}
          name={'can_alert_applicant_responses'}
        />
      </Styles.Content>
      <Styles.FormButtonBox>
        <Button
          text="연동 해제"
          state="warning"
          style="mono"
          width="68px"
          size="xs"
          onClick={handleUnConnect}
        />
        <Button
          type="submit"
          text="저장"
          state="primary"
          width="68px"
          style="fill-strong"
          size="xs"
          disabled={!isDirty}
        />
      </Styles.FormButtonBox>
    </Styles.Form>
  )
}
