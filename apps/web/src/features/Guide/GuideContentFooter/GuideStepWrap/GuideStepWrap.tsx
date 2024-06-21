import GuideNextButton from '../GuideStepButton/components/GuideNextButton'
import GuidePrevButton from '../GuideStepButton/components/GuidePrevButton'
import GuideStepNumber from '../GuideStepNumber'
import { GuideStepAtom } from '@/features/Guide/recoil/atom'
import { useRecoilValue } from 'recoil'

const GuideStepWrap = () => {
  const detailStep = useRecoilValue(GuideStepAtom)
  if (detailStep === 0) {
    return
  }

  return (
    <>
      <GuidePrevButton />
      <GuideStepNumber />
      <GuideNextButton />
    </>
  )
}

export default GuideStepWrap
