import { list } from './styles.css'
import { FreshmanSurveyItem } from '@/features/onboarding/ui/FreshmanSurveyItem'

interface SurveyListProps {
  index: number
  field: any
}

export const FreshmanSurviveList = ({ index, field }: SurveyListProps) => {
  return (
    <ul className={list}>
      <FreshmanSurveyItem index={index} field={field} />
    </ul>
  )
}
