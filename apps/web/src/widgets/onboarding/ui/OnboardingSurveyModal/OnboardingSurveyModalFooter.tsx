import { Button, ModalFooter } from '@repo/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { AddReceiveContainer } from '@/features/onboarding/ui'
import { HandleAppendReceive, HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { Select } from '@/shared/ui'
import { ALARM_PERIODS } from '@/widgets/onboarding/constants'

interface OnboardingSurveyModalFooterProps {
  scene?: any
  isFreshman?: boolean
  onAppendReceiver: HandleAppendReceive
  onRemoveReceiver: HandleRemoveReceive
  onClick: (data: any) => void
  onClose: () => void
}

export const OnboardingSurveyModalFooter = ({
  isFreshman,
  onAppendReceiver,
  onRemoveReceiver,
  onClick,
  onClose,
  scene,
}: OnboardingSurveyModalFooterProps) => {
  const methods = useFormContext()
  const isEdit = !!scene

  const { control, handleSubmit } = methods

  const handleSurveyFormAdd = (value: any) => {
    onClick({
      type: 'survey',
      ...value,
    })
  }

  return (
    <ModalFooter hasSelect={!isFreshman}>
      {isFreshman && (
        <Button text="취소" state="secondary" style="mono" width="58px" onClick={onClose} />
      )}
      <AddReceiveContainer
        isFreshman={isFreshman}
        onAppendReceiver={onAppendReceiver}
        onRemoveReceiver={onRemoveReceiver}
      />
      <Controller
        name="time"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Select
            options={ALARM_PERIODS}
            placeholder={'열림 시간 선택'}
            defaultValue={ALARM_PERIODS[0].value}
            value={ALARM_PERIODS.find((option) => option.value === value)?.value}
            onChange={(option) => onChange(option.value)}
            styles={{ optionMinWidth: '101px' }}
          />
        )}
      />
      <Button text="취소" state="secondary" style="mono" onClick={onClose} />
      <Button
        type={'submit'}
        text="저장"
        state="primary"
        onClick={handleSubmit(handleSurveyFormAdd)}
      />
    </ModalFooter>
  )
}
