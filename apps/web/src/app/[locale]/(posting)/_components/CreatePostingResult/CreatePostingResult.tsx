import { createPostingResultAtom } from '@/app/[locale]/(posting)/create-posting/_recoil'
import { PAGE } from '@/shared/constants'
import { LinkButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'

const CreatePostingResult = () => {
  const { posting_id } = useRecoilValue(createPostingResultAtom)
  const $t = useTranslations('create_announcement')

  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Icon icon="icon/check-solid" color="blue500" size={48} />
        <Styles.Title>{$t('create_job_post_success')}</Styles.Title>
        <Styles.Description>{$t('create_job_post_description')}</Styles.Description>
        <Styles.ButtonWrapper>
          <LinkButton
            size="md"
            href={PAGE.BUILD_APPLICATION(posting_id)}
            iconSource="icon/activity-line"
            text={$t('create_apply_announcement')}
            width="280px"
          />
          <LinkButton
            size="md"
            state="primary"
            style="mono"
            href={PAGE.POSTINGS(posting_id)}
            text={$t('next_time_create')}
            width="280px"
          />
        </Styles.ButtonWrapper>
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default CreatePostingResult
