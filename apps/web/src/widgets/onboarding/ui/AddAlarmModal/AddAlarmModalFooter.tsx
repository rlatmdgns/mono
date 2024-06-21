import { Select } from '@/shared/ui'
import { Button, ModalFooter } from '@repo/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { ALARM_PERIODS } from '../../constants'
import { AddReceiveContainer } from '@/features/onboarding/ui'
import { HandleAppendReceive, HandleRemoveReceive } from '@/entities/onboarding/types/receive'

// TODO : interface 정의 필요

interface AddAlarmModalFooterProps {
  isFreshman?: boolean
  onAppendReceiver: HandleAppendReceive
  onRemoveReceiver: HandleRemoveReceive
  onAdd: () => void
  onClose: () => void
  scene?: any
}

export const AddAlarmModalFooter = ({
  isFreshman,
  onAppendReceiver,
  onRemoveReceiver,
  onClose,
  onAdd,
  scene,
}: AddAlarmModalFooterProps) => {
  const {
    control,
    formState: { isValid, isDirty },
  } = useFormContext()

  const isEdit = !!scene
  const handleSave = () => {
    onAdd()
  }

  return (
    <ModalFooter hasSelect>
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
            placeholder={'알림 시간 선택'}
            defaultValue={ALARM_PERIODS[0].value}
            value={ALARM_PERIODS.find((option) => option.value === value)?.value}
            onChange={(option) => onChange(option.value)}
            styles={{ optionMinWidth: '101px' }}
          />
        )}
      />
      <Button
        text="저장"
        state="primary"
        style="fill-strong"
        width="58px"
        disabled={!isValid || !isDirty}
        onClick={handleSave}
      />
    </ModalFooter>
  )
}
