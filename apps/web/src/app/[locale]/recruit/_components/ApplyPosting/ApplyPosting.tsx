import { LinkButton, Toast } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import { RecruitContent } from '@/interface/recruitPage'
import * as Styles from './styles'
import RecruitSummary from '@/app/[locale]/recruit/_components/RecruitSummary'
import { useTranslations } from 'next-intl'

const ApplyPosting = ({ isClosed, recruit, id, enterpriseName, refererURL }: RecruitContent) => {
  const $t = useTranslations('common')
  const isPreview = id === 'preview'
  const disabled = isClosed || isPreview

  const handlePreview = () => {
    if (isPreview) {
      return Toast.warning('미리보기에서 지원이 불가합니다.')
    }
  }

  return (
    <Styles.Wrapper>
      <RecruitSummary recruit={recruit} />
      <Styles.LinkBox $disabled={disabled} onClick={handlePreview}>
        <LinkButton
          href={
            refererURL
              ? `${PAGE.RECRUIT_APPLY(enterpriseName, id)}?referer=${refererURL}`
              : PAGE.RECRUIT_APPLY(enterpriseName, id)
          }
          text={isClosed ? $t('deadline') : $t('apply_action')}
          size="md"
          disabled={disabled}
        />
      </Styles.LinkBox>
    </Styles.Wrapper>
  )
}

export default ApplyPosting
