import { getUpdateKey } from '@/features/Application/lib'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantPersonItemAtom,
} from '@/pageModules/build-application/recoil'
import { Switch, Toast } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { DISABLED_ITEMS_FOR_REQUIRED_RESPONSE } from '../../constants'
import * as Styles from './styles'

interface RequiredResponseControlProps {
  selectedItem: string
  onSwitchChange: (key: string, value: boolean) => void
}

export const RequiredResponseControl = ({
  selectedItem,
  onSwitchChange,
}: RequiredResponseControlProps) => {
  const { watch } = useFormContext()

  const selectedBasicItem = useRecoilValue(SelectedApplicantBasicItemAtom)
  const selectedPersonalItem = useRecoilValue(SelectedApplicantPersonItemAtom)

  const item = watch(`${selectedItem}`)
  const isDisabledItem = DISABLED_ITEMS_FOR_REQUIRED_RESPONSE.includes(item?.key)
  const isDisabled = !!selectedBasicItem.key || !!selectedPersonalItem.key || isDisabledItem

  const handleChange = (value: boolean) => {
    if (isDisabled) {
      return Toast.warning('변경 불가능한 항목입니다.')
    }
    onSwitchChange(getUpdateKey(selectedItem, 'is_required'), value)
  }

  return (
    <Styles.Option>
      <Styles.Content>
        <Styles.Name>필수 응답</Styles.Name>
      </Styles.Content>
      <Styles.SwitchWrapper $disabled={isDisabled}>
        <Switch
          size="xs"
          isChecked={watch(`${selectedItem}.is_required`)}
          onChange={(value) => handleChange(value)}
        />
      </Styles.SwitchWrapper>
    </Styles.Option>
  )
}
