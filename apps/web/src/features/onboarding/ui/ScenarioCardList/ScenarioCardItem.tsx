import { Button } from '@repo/ui'
import { ScenarioCardDropdown } from '../ScenarioCardDropdown'
import { bottomWrapper, descStyle, hrStyle, titleStyle, topWrapper, wrapper } from './styles.css'
import { useRouter } from 'next/navigation'
import { MODAL, PAGE } from '@/shared/constants'
import { useModal } from '@/shared/hooks'

interface ScenarioCardItemProps {
  id: number
  title: string
  description: string
  number: number
}

export const ScenarioCardItem = ({ id, title, description, number = 0 }: ScenarioCardItemProps) => {
  const { openModal, closeModal } = useModal()
  const router = useRouter()

  const handleApplyFreshman = () => {
    openModal(MODAL.APPLY_SCENARIO_FOR_FRESHMAN, {
      id,
      onClose: () => {
        closeModal(MODAL.APPLY_SCENARIO_FOR_FRESHMAN)
      },
    })
  }
  const handleClick = () => {
    router.push(`${PAGE.CREATE_SCENARIO}?id=${id}`)
  }

  return (
    <div className={wrapper}>
      <div className={topWrapper}>
        <span className={titleStyle}>{title}</span>
        {/* TODO: stead-ui 드롭다운 추가되면 변경 */}
        <ScenarioCardDropdown id={id} title={title} description={description} number={number} />
      </div>
      <p className={descStyle}>{description}</p>
      <hr className={hrStyle} />
      <div className={bottomWrapper}>
        <Button
          text={`${number}명 진행중`}
          state={'secondary'}
          style={'mono'}
          onClick={handleApplyFreshman}
        />
        <Button
          text="편집하기"
          // TODO: right-solid 아이콘 업데이트 필요
          trailingIcon="icon/right-solid"
          style="fill-weak"
          size="sm"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
