import { ManagerSceneList } from './ManagerSceneList'
import { listWrapper } from './styles.css'

interface ManagerSequenceListProps {
  sequences: {
    todo_scenes: any[]
    upcoming_scenes: any[]
    completed_scenes: any[]
  }
}

export const ManagerSequenceList = ({ sequences }: ManagerSequenceListProps) => {
  if (!sequences) return null

  return (
    <div className={listWrapper}>
      <ManagerSceneList title="해야 할 일정" scenes={sequences.todo_scenes} />
      <ManagerSceneList title="다가오는 일정" scenes={sequences.upcoming_scenes} />
      <ManagerSceneList title="완료한 일정" scenes={sequences.completed_scenes} />
    </div>
  )
}
