import { SubmittedReporItem } from './SubmittedReporItem'
import { list } from './styles.css'

interface SubmittedReportListProps {
  sequences: any[]
}

export const SubmittedReportList = ({ sequences }: SubmittedReportListProps) => {
  return (
    <ul className={list}>
      {sequences.map((sequence) => {
        const name = sequence.freshman_name ? sequence.freshman_name : sequence.manager_name
        return (
          <SubmittedReporItem
            key={sequence.title}
            name={name}
            date={sequence.date}
            title={sequence.title}
            type={sequence.type}
            surveys={sequence.surveys}
          />
        )
      })}
    </ul>
  )
}
