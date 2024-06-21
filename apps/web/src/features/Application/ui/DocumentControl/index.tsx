import { Switch, TextInput, Toast } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { DOCUMENT_TITLE_MAX_LENGTH } from '../../constants'
import * as Styles from './styles'

interface DocumentControlProps {
  selectedItem: string
  onInputChange: (key: string, value: string) => void
}

export const DocumentControl = ({ selectedItem, onInputChange }: DocumentControlProps) => {
  const { watch } = useFormContext()

  const hasDocument =
    watch(selectedItem)?.hasOwnProperty('title') && selectedItem.includes('documents')

  const handleSwitchChange = () => {
    return Toast.warning('변경 불가능한 항목입니다.')
  }

  const handleInputChange = (value: string) => {
    onInputChange(`document_title.${selectedItem}`, value)
  }

  if (!hasDocument) return null

  return (
    <Styles.Option>
      <Styles.Content>
        <Styles.Name>
          항목 명 <Styles.Mark>*</Styles.Mark>
        </Styles.Name>
        <Styles.SwitchWrapper $disabled>
          <Switch size="xs" isChecked={true} onChange={handleSwitchChange} />
        </Styles.SwitchWrapper>
      </Styles.Content>
      <TextInput
        placeholder="항목 명을 입력해주세요."
        value={watch(`${selectedItem}.title`)}
        onChange={(event) => handleInputChange(event.target.value)}
        maxLength={DOCUMENT_TITLE_MAX_LENGTH}
      />
    </Styles.Option>
  )
}
