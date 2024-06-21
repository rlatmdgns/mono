import { Controller, useFormContext } from 'react-hook-form'
import { Radio } from '@repo/ui'
import {
  radioWrapper,
  required,
  sectionTitle,
  sectionWrapper,
} from '@/features/onboarding/ui/AddSequenceModal/styles.css'
import { SEQUENCE_AUTHORITIES } from '@/widgets/onboarding/constants'

export const ModifySequenceType = () => {
  const { control } = useFormContext()

  return (
    <div className={sectionWrapper}>
      <p className={sectionTitle}>
        시퀀스 추가 대상
        <span className={required}>*</span>
      </p>
      <div className={radioWrapper}>
        {SEQUENCE_AUTHORITIES.map((authority) => {
          return (
            <div key={authority.value}>
              <Controller
                name="authority"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Radio
                    name={'authority'}
                    labelText={authority.labelText}
                    value={authority.value}
                    checked={value === authority.value}
                    onChange={() => {
                      onChange(authority.value)
                    }}
                  />
                )}
                rules={{
                  required: true,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
