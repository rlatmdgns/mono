import { GuideSequence } from '../../types'
import { FreshmanSceneList } from './FreshmanSceneList'
import { listWrapper, sequencesWrapper } from './styles.css'

interface FreshmanTodoListProps {
  sequences: GuideSequence[]
}

export const FreshmanSequenceList = ({ sequences }: FreshmanTodoListProps) => {
  if (!sequences) return null

  return (
    <div className={listWrapper}>
      <div className={sequencesWrapper}>
        {sequences.map((sequence, index) => (
          <FreshmanSceneList key={`sequence_${index}`} sequence={sequence} />
        ))}
      </div>
    </div>
  )
}
