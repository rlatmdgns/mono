import { innerWrapper, wrapper } from '@/widgets/onboarding/ui/AddContentModal/styles.css'
import { Controller, useFormContext } from 'react-hook-form'
import { TextInput } from '@repo/ui'
import { MemoEditor } from '@/features/Editor'

export const AddContentModalBody = () => {
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
                placeholder={'제목을 입력해주세요.'}
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
              <MemoEditor placeholder={'내용을 입력해주세요.'} value={value} onChange={onChange} />
            </div>
          )}
        />
      </div>
    </div>
  )
}
