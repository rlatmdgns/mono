import { sequenceHeader, titleStyle } from './styles.css'

const SEQUENCE_TITLES = ['입사자', '온보딩 매니저']

interface SequenceHeaderProps {
  isPublish: boolean
}

export const SequenceHeader = ({ isPublish }: SequenceHeaderProps) => {
  return (
    <ul className={sequenceHeader}>
      {SEQUENCE_TITLES.map((title) => (
        <li key={title} className={titleStyle}>
          {title}
        </li>
      ))}
    </ul>
  )
}
