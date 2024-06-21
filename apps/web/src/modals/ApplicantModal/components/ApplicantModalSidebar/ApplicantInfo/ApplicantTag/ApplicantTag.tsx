import * as Styles from './styles'
import TagList from './TagList'
import useApplicantTag from '@/modals/ApplicantModal/hooks/useApplicantTag'
import { useRecoilValue } from 'recoil'
import useTagList from '@/modals/ApplicantModal/hooks/useTagList'
import { applicantIdAtom, applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { useTranslations } from 'next-intl'

interface ApplicantTagProps {
  isEvaluator: boolean
}

const ApplicantTag = ({ isEvaluator }: ApplicantTagProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)

  const { data: applicantTagData } = useApplicantTag(applicantId)
  const { data: tagData } = useTagList(!isEvaluator)

  const applicantTags = applicantTagData?.applicant_tag || []
  const tags = tagData?.tag_list || []

  const isHide = isEvaluator && applicantTags?.length < 1

  const $t = useTranslations('common')
  if (isFold || isHide) return null
  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('tag')}</Styles.Title>
      <TagList isEvaluator={isEvaluator} applicantTags={applicantTags} tags={tags} />
    </Styles.Wrapper>
  )
}

export default ApplicantTag
