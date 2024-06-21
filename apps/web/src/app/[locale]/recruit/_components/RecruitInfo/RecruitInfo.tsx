import { RecruitPage } from '@/interface/recruitPage'
import Image from 'next/image'
import RecruitInfoFieldList from '../RecruitInfoFieldList'
import * as Styles from './styles'
import { IconButton } from '@/shared/ui'
import { ORIGIN } from '@/shared/constants'
import { useCopyClipBoard } from '@/shared/hooks'
import WorkPlace from '@/app/[locale]/recruit/_components/RecruitInfo/components/WorkPlace'
import RecruitSummary from '@/app/[locale]/recruit/_components/RecruitSummary'
import { useTranslations } from 'next-intl'

interface RecruitContentProps {
  recruit?: RecruitPage
  isTemplate?: boolean
  id?: string
  enterpriseName?: string
}

const RecruitInfo = ({ recruit, isTemplate, id, enterpriseName }: RecruitContentProps) => {
  const $t = useTranslations('setting.enterprise')
  const { handleCopyClipBoard } = useCopyClipBoard()

  if (!recruit) return null
  const {
    enterprise_background,
    posting_title,
    enterprise_name,
    enterprise_explanation,
    posting_work_place,
    posting_work_place_detail,
  } = recruit

  const recruitUrl = `${ORIGIN}/recruit/${enterpriseName}/${id}`

  const handleCopyRecruitUrl = () => handleCopyClipBoard(recruitUrl)

  return (
    <Styles.Wrapper $isTemplate={isTemplate}>
      {enterprise_background && (
        <Styles.ImageBox>
          <Image src={enterprise_background} alt={enterprise_name} fill />
        </Styles.ImageBox>
      )}
      <Styles.RecruitWrapper>
        <RecruitSummary recruit={recruit} isTemplate={isTemplate} />
      </Styles.RecruitWrapper>
      <Styles.Content>
        <Styles.RecruitHeader>
          <Styles.TitleWrap $isTemplate={isTemplate}>
            <Styles.PostingTitle>{posting_title}</Styles.PostingTitle>
            <IconButton onClick={handleCopyRecruitUrl} icon="icon/copy-solid" size="md" />
          </Styles.TitleWrap>
          <Styles.EnterpriseName>{enterprise_name}</Styles.EnterpriseName>
        </Styles.RecruitHeader>
        <RecruitInfoFieldList recruit={recruit} />
      </Styles.Content>
      <Styles.Intro>
        <Styles.FieldTitle>{$t('enterprise_explanation')}</Styles.FieldTitle>
        <Styles.FieldInfo>{enterprise_explanation}</Styles.FieldInfo>
      </Styles.Intro>
      <WorkPlace
        posting_work_place={posting_work_place}
        posting_work_place_detail={posting_work_place_detail}
        enterprise_name={enterprise_name}
      />
    </Styles.Wrapper>
  )
}

export default RecruitInfo
