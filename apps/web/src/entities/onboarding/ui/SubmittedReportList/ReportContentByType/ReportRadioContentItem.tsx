import { Radio } from '@repo/ui'
import { item, label } from './styles.css'

interface ReportRadioContentItemProps {
  isChecked: boolean
  option: string
}

export const ReportRadioContentItem = ({ isChecked, option }: ReportRadioContentItemProps) => {
  return (
    <li className={item}>
      <Radio name="radio" checked={isChecked} disabled />
      <span className={label}>{option}</span>
    </li>
  )
}
