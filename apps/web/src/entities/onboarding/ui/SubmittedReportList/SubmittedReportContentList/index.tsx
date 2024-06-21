import { SubmittedReportContentItem } from './SubmittedReportContentItem'
import { list } from './styles.css'

interface SubmittedReportContentListProps {
  isToggle: boolean
  surveys?: any[]
}

export const SubmittedReportContentList = ({
  isToggle,
  surveys,
}: SubmittedReportContentListProps) => {
  if (!isToggle || !surveys) return null

  return (
    <ul className={list}>
      {surveys?.map((survey) => {
        return <SubmittedReportContentItem key={survey.id} survey={survey} />
      })}
    </ul>
  )
}
