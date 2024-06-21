import { Icon } from '@repo/ui'
import { sceneBottom, sceneInfo, sceneItem, sceneLeft, sceneTitle } from './styles.css'

interface ManagerSceneItemProps {
  scene: any
}

export const ManagerSceneItem = ({ scene }: ManagerSceneItemProps) => {
  const isTodoScene = scene.due_date !== undefined

  return (
    <li className={sceneItem}>
      <div className={sceneLeft({ isTodoScene })}>
        <p className={sceneTitle}>{scene.scene_title}</p>
        <div className={sceneBottom}>
          <span className={sceneInfo}>{scene.sequence_title}</span>
          <Icon icon="icon/divide-solid" color="neutralGray400" />
          <span className={sceneInfo}>{scene.number_of_freshman}의 입사자</span>
        </div>
      </div>
      {scene.due_date && <span className={sceneInfo}>{scene.due_date}</span>}
    </li>
  )
}
