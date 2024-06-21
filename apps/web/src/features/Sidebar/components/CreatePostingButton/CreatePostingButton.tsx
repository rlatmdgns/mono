import React from 'react'
import * as Styles from './styles'
import { LinkButton } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import { withAuth } from '@/shared/lib'
import { useTranslations } from 'next-intl'

const CreatePostingButton = () => {
  const $t = useTranslations('sidebar')
  return (
    <Styles.Wrapper>
      <LinkButton
        href={PAGE.CREATE_POSTING}
        size="md"
        width="100%"
        text={$t('making_notification')}
        iconSource="icon/plus-line"
      />
    </Styles.Wrapper>
  )
}

export default withAuth(CreatePostingButton)
