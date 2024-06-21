import * as Styles from './styles'
import { IconButton } from '@/shared/ui'
import { components, MultiValueRemoveProps } from 'react-select'

export const SelectMultiValueRemoveButton = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <Styles.MultiValueRemoveButton>
        <IconButton icon="icon/cancle-solid" size="sm" />
      </Styles.MultiValueRemoveButton>
    </components.MultiValueRemove>
  )
}
