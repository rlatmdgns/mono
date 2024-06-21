import { ReportCheckboxContent } from '../ReportContentByType/ReportCheckboxContent'
import { ReportEssayContent } from '../ReportContentByType/ReportEssayContent'
import { ReportRadioContent } from '../ReportContentByType/ReportRadioContent'
import { item, titleStyle } from './styles.css'

interface SubmittedReportContentItemProps {
  survey: any
}

export const SubmittedReportContentItem = ({ survey }: SubmittedReportContentItemProps) => {
  return (
    <li className={item}>
      <p className={titleStyle}>{survey.title}</p>
      <ReportRadioContent type={survey.type} options={survey.options} values={survey.values} />
      <ReportCheckboxContent type={survey.type} options={survey.options} values={survey.values} />
      <ReportEssayContent type={survey.type} text={survey.text} />
    </li>
  )
}
