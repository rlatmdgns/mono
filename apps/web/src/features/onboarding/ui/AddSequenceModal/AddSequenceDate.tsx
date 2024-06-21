import { Controller, useFormContext } from 'react-hook-form'
import { TextInput } from '@repo/ui'
import { Select } from '@/shared/ui'
import {
  dateWrapper,
  enterTitle,
  formWrapper,
  labelWrapper,
  required,
  sectionTitle,
  sectionWrapper,
  sequenceTitle,
} from '@/features/onboarding/ui/AddSequenceModal/styles.css'
import { SEQUENCE_ADD_TYPE } from '@/features/onboarding/constants'

interface AddSequenceDateProps {
  isPublish?: boolean
}

export const AddSequenceDate = ({ isPublish }: AddSequenceDateProps) => {
  const { control, watch } = useFormContext()
  const getCurrentValue = (value: string) => {
    return SEQUENCE_ADD_TYPE.find((option: any) => option.value === value)
  }

  const getDisabledType = () => {
    return parseInt(watch('join_date')) === 0
  }
  if (isPublish) return null

  return (
    <div className={sectionWrapper}>
      <p className={sectionTitle}>
        날짜 지정
        <span className={required}>*</span>
      </p>
      <div className={dateWrapper}>
        <div className={labelWrapper}>
          <label className={enterTitle}>입사일</label>
          <div className={formWrapper}>
            <Controller
              name="join_date"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  width={'128px'}
                  placeholder={'0일'}
                  type={'number'}
                  onChange={(value) => onChange(value)}
                />
              )}
            />
          </div>
        </div>
        <div className={labelWrapper}>
          <label className={sequenceTitle}>일</label>
          <div className={formWrapper}>
            <Controller
              name="date_type"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Select
                  options={SEQUENCE_ADD_TYPE}
                  placeholder={'전/후 선택'}
                  value={getCurrentValue(value)}
                  // disabled={getDisabledType()}
                  onChange={(option) => onChange(option.value)}
                  onBlur={onBlur}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
