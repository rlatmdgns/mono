import { Button } from '@repo/ui'
import { useState } from 'react'
import { ManagerSceneItem } from './ManagerSceneItem'
import { ScenesTitle } from './ScenesTitle'
import { scenesList, scenesWrapper } from './styles.css'

interface TodoScenesListProps {
  title: string
  scenes: any[]
}

export const ManagerSceneList = ({ title, scenes }: TodoScenesListProps) => {
  const [showAllScenes, setShowAllScenes] = useState(false)

  const count = scenes.length
  const displayedScenes = showAllScenes ? scenes : scenes.slice(0, 5)
  const isButtonActive = !showAllScenes && count > 5

  const handleShowMore = () => {
    setShowAllScenes(true)
  }

  if (!scenes) return null

  return (
    <div className={scenesWrapper}>
      <ScenesTitle title={title} count={count} />
      <ul className={scenesList}>
        {displayedScenes.map((scene, _index) => (
          <ManagerSceneItem key={scene.scene_title} scene={scene} />
        ))}
      </ul>
      {isButtonActive && (
        <Button
          text="더보기"
          style="mono"
          leadingIcon="icon/plus-line"
          size="sm"
          onClick={handleShowMore}
        />
      )}
    </div>
  )
}
