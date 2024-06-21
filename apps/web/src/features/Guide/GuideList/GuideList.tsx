import * as Styles from './styles'
import GuideItem from '../GuideItem/GuideItem'
import GuideContent from '../GuideContent'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { GuideDetailInfoAtom, GuideStepAtom, IsGuideOpenAtom } from '@/features/Guide/recoil/atom'

import { GuidesContent } from '@/features/Guide/GuideContent/GuideContent.constants'
import { Guides } from '@/features/Guide/Guide.interface'

type GuideListProps = {
  isOpen: boolean
  handleClick: (value: boolean) => void
}

const GuideList = ({ isOpen, handleClick }: GuideListProps) => {
  const [isContentOpen, setIsContentOpen] = useRecoilState(IsGuideOpenAtom)
  const [selectedContentInfo, setSelectedContentInfo] = useRecoilState(GuideDetailInfoAtom)
  const initGuideDetailInfo = useResetRecoilState(GuideDetailInfoAtom)
  const initDetailStep = useResetRecoilState(GuideStepAtom)

  const handleGuideContentGet = (value: string) => {
    if (value === 'detail') {
      return
    }

    initDetailStep()
    setIsContentOpen(true)
    const selectedGuide: Guides | undefined = GuidesContent.find((guide) => guide.id === value)

    if (selectedGuide) {
      setSelectedContentInfo({ ...selectedGuide })
    }
  }

  const handleClickClose = () => {
    setIsContentOpen(false)
    initGuideDetailInfo()
    initDetailStep()
  }

  return (
    <>
      <Styles.GuideList $isOpen={isOpen}>
        {GuidesContent.map((guide) => (
          <GuideItem
            title={guide.title}
            id={guide.id}
            key={guide.id}
            handleGuideContentGet={() => handleGuideContentGet(guide.id)}
          />
        ))}
        <Styles.GuideCloseBtn onClick={() => handleClick(false)}>X</Styles.GuideCloseBtn>
      </Styles.GuideList>
      <GuideContent handleClose={handleClickClose} />
    </>
  )
}

export default GuideList
