import { ReportRadioContentItem } from './ReportRadioContentItem'
import { list } from './styles.css'

interface ReportRadioContentProps {
  type: 'choice' | 'multi_choice' | 'essay'
  options: string[]
  values: string[]
}

export const ReportRadioContent = ({ type, options, values }: ReportRadioContentProps) => {
  if (type !== 'choice' || !options) return null

  return (
    <ul className={list}>
      {options.map((option, index) => {
        const isChecked = values.some((value) => value === option)
        return (
          <ReportRadioContentItem key={`${type}_${index}`} isChecked={isChecked} option={option} />
        )
      })}
    </ul>
  )
}
