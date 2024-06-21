import { ReportCheckboxContentItem } from './ReportCheckboxContentItem'
import { list } from './styles.css'

interface ReportCheckboxContentProps {
  type: 'choice' | 'multi_choice' | 'essay'
  options: string[]
  values: string[]
}

export const ReportCheckboxContent = ({ type, options, values }: ReportCheckboxContentProps) => {
  if (type !== 'multi_choice' || !options) return null

  return (
    <ul className={list}>
      {options.map((option, index) => {
        const isChecked = values.some((value) => value === option)
        return (
          <ReportCheckboxContentItem
            key={`${type}_${index}`}
            isChecked={isChecked}
            option={option}
          />
        )
      })}
    </ul>
  )
}
