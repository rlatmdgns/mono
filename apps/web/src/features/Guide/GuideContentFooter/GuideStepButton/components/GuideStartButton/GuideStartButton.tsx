import * as Styles from './styles'
import { useRecoilState } from 'recoil'
import { GuideStepAtom } from '@/features/Guide/recoil/atom'

const GuideStartButton = () => {
  const [detailStep, setDetailStep] = useRecoilState(GuideStepAtom)
  const handleStart = () => {
    setDetailStep(1)
  }

  return <Styles.GuideStepStartButton onClick={handleStart}>START</Styles.GuideStepStartButton>
}

export default GuideStartButton
