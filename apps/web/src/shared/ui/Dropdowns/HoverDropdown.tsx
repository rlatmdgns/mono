import HoverDropdownWrapper from './HoverDrodownWrapper'
import DropdownItem from './DropdownItem'
import DropdownDivider from './DropdownDivider'

export const HoverDropdown = Object.assign(HoverDropdownWrapper, {
  Item: DropdownItem,
  Divider: DropdownDivider,
})
