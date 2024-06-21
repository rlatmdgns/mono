import { Button, ModalFooter } from '@repo/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { HandleAppendReceive, HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { Select } from '@/shared/ui'
import { ALARM_PERIODS } from '@/widgets/onboarding/constants'
import { AddReceiveContainer } from '@/features/onboarding/ui'

interface AddContentModalFooterProps {
  isFreshman?: boolean
  onAppendReceiver: HandleAppendReceive
  onRemoveReceiver: HandleRemoveReceive
  onAdd: () => void
  onClose: () => void
}

export const AddContentModalFooter = ({
  isFreshman,
  onAppendReceiver,
  onRemoveReceiver,
  onAdd,
  onClose,
}: AddContentModalFooterProps) => {
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext()

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
      <Button text="취소" state="secondary" style="mono" width="58px" onClick={onClose} />
      <Button text="작업추가" state="primary" style="fill-strong" width="58px" onClick={onAdd} />
    </ModalFooter>
  )
}
