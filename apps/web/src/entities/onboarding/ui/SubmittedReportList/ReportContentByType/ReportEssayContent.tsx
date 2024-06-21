import { textWrapper } from './styles.css'

interface ReportEssayContentProps {
  type: 'choice' | 'multi_choice' | 'essay'
  text: string
}

export const ReportEssayContent = ({ type, text }: ReportEssayContentProps) => {
  if (type !== 'essay' || !text) return null

  return <div className={textWrapper}>{text}</div>
}
