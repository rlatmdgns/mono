import { RecruitPage } from '@/interface/recruitPage'
import RecruitInfoFieldItem from '../RecruitInfoFieldItem'
import * as Styles from '../RecruitInfo/styles'
import { useRecruitContentFactory } from '@/app/[locale]/recruit/_components/RecruitContent/hooks/useRecruitContentFactory'

interface RecruitInfoFieldListProps {
  recruit: RecruitPage
}

const RecruitInfoFieldList = ({ recruit }: RecruitInfoFieldListProps) => {
  const { getRecruitInfo } = useRecruitContentFactory()
  const fields = getRecruitInfo(recruit)

  return (
    <Styles.RecruitInfo>
      {fields.map((item) => (
        <RecruitInfoFieldItem item={item} key={item.title} />
      ))}
    </Styles.RecruitInfo>
  )
}

export default RecruitInfoFieldList
