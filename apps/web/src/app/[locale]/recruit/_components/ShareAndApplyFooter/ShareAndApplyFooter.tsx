import * as Styles from './styles'
import { ORIGIN, PAGE } from '@/shared/constants'
import { IconBoxButton, LinkButton } from '@/shared/ui'
import { useCopyClipBoard } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface ShareAndApplyFooterProps {
  isClosed?: boolean
  enterpriseName: string
  id: string
}

const ShareAndApplyFooter = ({ isClosed, enterpriseName, id }: ShareAndApplyFooterProps) => {
  const { handleCopyClipBoard } = useCopyClipBoard()
  const recruitUrl = `${ORIGIN}/recruit/${enterpriseName}/${id}`
  const handleCopyRecruitUrl = () => handleCopyClipBoard(recruitUrl)
  const $t = useTranslations('common')

  return (
    <Styles.Wrapper>
      <IconBoxButton
        size="lg"
        style="fill-weak"
        icon="icon/copy-solid"
        onClick={handleCopyRecruitUrl}
      />
      <Styles.LinkBox $disabled={isClosed}>
        <LinkButton
          href={PAGE.RECRUIT_APPLY(enterpriseName, id)}
          size="md"
          text={isClosed ? $t('deadline') : $t('apply_action')}
          disabled={isClosed}
        />
      </Styles.LinkBox>
    </Styles.Wrapper>
  )
}

export default ShareAndApplyFooter
