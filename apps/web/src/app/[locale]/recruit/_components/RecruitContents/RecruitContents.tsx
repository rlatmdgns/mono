import ShareAndApplyFooter from '@/app/[locale]/recruit/_components/ShareAndApplyFooter'
import { RecruitContent } from '@/interface/recruitPage'
import ApplyPosting from '../ApplyPosting'
import RecruitInfo from '../RecruitInfo'
import * as Styles from './styles'

const RecruitContents = ({ isClosed, recruit, id, enterpriseName, refererURL }: RecruitContent) => {
  return (
    <Styles.Wrapper>
      <RecruitInfo recruit={recruit} id={id} enterpriseName={enterpriseName} />
      <ApplyPosting
        isClosed={isClosed}
        recruit={recruit}
        id={id}
        enterpriseName={enterpriseName}
        refererURL={refererURL}
      />
      <ShareAndApplyFooter isClosed={isClosed} id={id} enterpriseName={enterpriseName} />
    </Styles.Wrapper>
  )
}

export default RecruitContents
