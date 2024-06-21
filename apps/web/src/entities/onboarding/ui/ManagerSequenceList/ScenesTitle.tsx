import { scenesCount, scenesTitle } from './styles.css'

interface ScenesTitleLabelProps {
  title: string
  count?: number
}

export const ScenesTitle = ({ title, count = 0 }: ScenesTitleLabelProps) => {
  return (
    <div className={scenesTitle}>
      {title}
      <span className={scenesCount}>{count}</span>
    </div>
  )
}
