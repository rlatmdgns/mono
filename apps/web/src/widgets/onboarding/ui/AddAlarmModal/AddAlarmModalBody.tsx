import { innerWrapper, wrapper } from '@/widgets/onboarding/ui/AddAlarmModal/styles.css'
import { Controller, useFormContext } from 'react-hook-form'
import { Textarea, TextInput } from '@repo/ui'

export const AddAlarmModalBody = () => {
  const { control } = useFormContext()
  return (
    <div className={wrapper}>
      <div className={innerWrapper}>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <div className={'oms_editor oms_editor_title'}>
              <TextInput
                placeholder={'알림 제목을 입력해주세요.'}
                defaultValue={value}
                onChange={(value) => onChange(value)}
              />
            </div>
          )}
        />
        <Controller
          name="contents"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <div className={'oms_editor oms_editor_description'}>
              <Textarea
                placeholder={'내용을 입력해주세요.'}
                onChange={(value) => onChange(value)}
                defaultValue={value}
                maxLength={200}
              />
            </div>
          )}
        />
      </div>
    </div>
  )
}
