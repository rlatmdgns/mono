import { Controller, useFormContext } from 'react-hook-form'
import { Button, ModalFooter } from '@repo/ui'
import { AddReceiveContainer } from '@/features/onboarding/ui'
import { HandleAppendReceive, HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { Select } from '@/shared/ui'
import { ALARM_PERIODS } from '@/widgets/onboarding/constants'

interface AddEvaluationModalFooterProps {
  isFreshman?: boolean
  onAppendReceiver: HandleAppendReceive
  onRemoveReceiver: HandleRemoveReceive
  onClick: (data: any) => void
  onClose: () => void
}

export const AddEvaluationModalFooter = ({
  isFreshman,
  onAppendReceiver,
  onRemoveReceiver,
  onClick,
  onClose,
}: AddEvaluationModalFooterProps) => {
  const methods = useFormContext()

  const { control, handleSubmit, getValues } = methods

  const handleSubmitForm = (value: any) => {
    onClick({
      type: 'evaluation',
      ...getValues(),
    })
    onClose()
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
        type="submit"
        text="작업추가"
        state="primary"
        onClick={handleSubmit(handleSubmitForm)}
      />
    </ModalFooter>
  )
}
