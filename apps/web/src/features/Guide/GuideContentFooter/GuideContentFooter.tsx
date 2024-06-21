import * as Styles from './styles'

import GuideStartButton from './GuideStepButton/components/GuideStartButton/GuideStartButton'
import GuideStepWrap from './GuideStepWrap'
import { useRecoilValue } from 'recoil'
import { GuideStepAtom } from '@/features/Guide/recoil/atom'

const GuideContentFooter = () => {
  const detailStep = useRecoilValue(GuideStepAtom)

  return (
    <Styles.GuideDetailFooter $step={detailStep}>
      <Styles.GuideStepWrapper>
        {detailStep === 0 && <GuideStartButton />}
        <GuideStepWrap />
      </Styles.GuideStepWrapper>
    </Styles.GuideDetailFooter>
  )
}

export default GuideContentFooter
