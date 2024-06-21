import { GuideSequence } from '../../types'
import { FreshmanSceneItem } from './FreshmanSceneItem'
import { list } from './styles.css'

interface FreshmanTodoListProps {
  sequence: GuideSequence
}

export const FreshmanSceneList = ({ sequence }: FreshmanTodoListProps) => {
  if (!sequence) return null

  return (
    <ul className={list}>
      {sequence.scenes?.map((scene, index) => {
        return <FreshmanSceneItem key={`todo_${index}`} scene={scene} />
      })}
    </ul>
  )
}
