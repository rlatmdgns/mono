import * as Styles from './styles'
import { CheckBox } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'

interface SelectApplicationTemplateProps {
  isTemplate?: boolean
}

export const SaveApplicationTemplate = ({ isTemplate }: SelectApplicationTemplateProps) => {
  const { watch, setValue } = useFormContext()

  const handleChange = (checked: boolean) => {
    setValue('is_template', checked)
  }

  if (isTemplate) return null
  return (
    <Styles.Wrapper>
      <CheckBox isChecked={watch('is_template')} onChange={handleChange} />
      <Styles.Text>지원서를 템플릿으로 저장하기</Styles.Text>
    </Styles.Wrapper>
  )
}
