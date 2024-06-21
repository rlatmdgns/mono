import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { GuideStepAtom } from '@/features/Guide/recoil/atom'

const GuideStepNumber = () => {
  const detailStep = useRecoilValue(GuideStepAtom)
  if (detailStep === 0) {
    return
  }

  return <Styles.GuideDetailStepProcessWrap $step={detailStep} />
}

export default GuideStepNumber
