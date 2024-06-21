'use client'

import * as Styles from '../../styles'
import { GuideDetailInfoAtom, GuideStepAtom, IsGuideOpenAtom } from '@/features/Guide/recoil/atom'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { Guides } from '@/features/Guide/Guide.interface'
import { GuidesContent } from '@/features/Guide/GuideContent/GuideContent.constants'
import React from 'react'
import { Icon } from '@repo/ui'

const GuideNextButton = () => {
  const lastStep = 3
  const [detailStep, setDetailStep] = useRecoilState(GuideStepAtom)
  const [detailInfo, setCurrentDetailInfo] = useRecoilState(GuideDetailInfoAtom)
  const isOpenGuide = useSetRecoilState(IsGuideOpenAtom)
  const isDetailProcess = detailStep > 0 && detailStep < lastStep
  const initGuideDetailInfo = useResetRecoilState(GuideDetailInfoAtom)

  const handleNextStep = () => {
    if (detailStep === lastStep) {
      return
    }
    setDetailStep(detailStep + 1)
  }

  const handleNextGuide = () => {
    if (!detailInfo.next) {
      isOpenGuide(false)
      initGuideDetailInfo()
      return
    }

    const nextDetailInfo: Guides | undefined = GuidesContent.find(
      (guide) => detailInfo.next && guide.id === detailInfo.next.id,
    )

    nextDetailInfo && setCurrentDetailInfo(nextDetailInfo)
    setDetailStep(1)
  }

  if (isDetailProcess) {
    return (
      <Styles.GuideStepButton type="button" $isDeltaX={'next'} onClick={handleNextStep}>
        Next
        <Icon icon="icon/right-line" color="neutralGray400" size={24} />
      </Styles.GuideStepButton>
    )
  }
  if (!isDetailProcess) {
    return (
      <Styles.GuideNextDetailButton type="button" onClick={handleNextGuide}>
        {detailInfo.next?.title ? detailInfo.next.title : '완료'}
        <Icon icon="icon/right-line" color="white" size={24} />
      </Styles.GuideNextDetailButton>
    )
  }
}

export default GuideNextButton
