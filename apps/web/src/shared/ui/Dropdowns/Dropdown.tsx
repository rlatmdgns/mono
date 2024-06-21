import DropdownWrapper from './DropdownWrapper'
import DropdownItem from './DropdownItem'
import DropdownDivider from './DropdownDivider'

export const Dropdown = Object.assign(DropdownWrapper, {
  Item: DropdownItem,
  Divider: DropdownDivider,
})
