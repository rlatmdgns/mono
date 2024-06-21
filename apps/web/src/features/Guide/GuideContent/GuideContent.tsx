import * as Styles from './styles'
import GuideContentFooter from '../GuideContentFooter'
import GuideContentImages from '@/features/Guide/GuideContentImages/GuideContentImages'
import { useRecoilState, useRecoilValue } from 'recoil'
import { GuideStepAtom, IsGuideOpenAtom } from '@/features/Guide/recoil/atom'
import React from 'react'
import { IconButton } from '@/shared/ui'

type GuideDetailProps = {
  handleClose: () => void
}

const GuideContent = ({ handleClose }: GuideDetailProps) => {
  const [detailStep, setDetailStep] = useRecoilState(GuideStepAtom)
  const isDetailOpen = useRecoilValue(IsGuideOpenAtom)
  const handleInitStep = () => {
    handleClose()
  }
  return (
    <>
      <Styles.GuideDetailWrap $isDetailOpen={isDetailOpen}>
        <Styles.GuideCloseBox onClick={handleInitStep}>
          <IconButton icon="icon/cancle-line1" size="md" />
        </Styles.GuideCloseBox>
        <Styles.GuideDetailBody $detailStep={detailStep}>
          <GuideContentImages />
        </Styles.GuideDetailBody>
        <GuideContentFooter />
      </Styles.GuideDetailWrap>
    </>
  )
}

export default GuideContent
