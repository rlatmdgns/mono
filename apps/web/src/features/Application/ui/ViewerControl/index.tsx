import { SelectedApplicantPersonItemAtom } from '@/pageModules/build-application/recoil'
import { Switch, Toast } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'
import { getUpdateKey } from '@/features/Application/lib'

interface ViewerControlProps {
  selectedItem: string
  onSwitchChange: (key: string, value: boolean) => void
}

export const ViewerControl = ({ selectedItem, onSwitchChange }: ViewerControlProps) => {
  const { watch } = useFormContext()
  const selectedPersonItem = useRecoilValue(SelectedApplicantPersonItemAtom)

  const isDisabled = watch(selectedItem)?.isBasic

  const handleChange = (value: boolean) => {
    if (isDisabled) {
      return Toast.warning('변경 불가능한 항목입니다.')
    }

    onSwitchChange(getUpdateKey(selectedItem, 'is_canview'), !value)
  }

  if (selectedPersonItem.key) return null

  return (
    <Styles.Option>
      <Styles.Content>
        <Styles.Name>열람 권한 제한</Styles.Name>
        <Styles.Desc>평가 담당자는 해당 항목 열람 불가합니다.</Styles.Desc>
      </Styles.Content>
      <Styles.SwitchWrapper $disabled={isDisabled}>
        <Switch
          size="xs"
          isChecked={!watch(`${selectedItem}.is_canview`)}
          onChange={handleChange}
        />
      </Styles.SwitchWrapper>
    </Styles.Option>
  )
}
