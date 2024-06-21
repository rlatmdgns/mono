import { CheckBox } from '@repo/ui'
import { item, label } from './styles.css'

interface ReportCheckboxContentItemProps {
  isChecked: boolean
  option: string
}

export const ReportCheckboxContentItem = ({
  isChecked,
  option,
}: ReportCheckboxContentItemProps) => {
  return (
    <li className={item}>
      <CheckBox isChecked={isChecked} disabled />
      <span className={label}>{option}</span>
    </li>
  )
}
