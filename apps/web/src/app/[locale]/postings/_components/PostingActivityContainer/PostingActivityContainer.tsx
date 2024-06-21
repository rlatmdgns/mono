import * as Styles from './styles'

import { withAuth } from '@/shared/lib'
import { Dropdown, Switch } from '@/shared/ui'
import { Icon } from '@repo/ui'
import usePostingActivity from '@/app/[locale]/postings/_hooks/usePostingActivity'

import React from 'react'
import { useTranslations } from 'next-intl'

interface PostingActivityContainerProps {
  id: number
  isActive: boolean
  isClose: boolean
  hasApplicationForm: boolean
  handleClosedToggle: (status: boolean) => void
}

const PostingActivityContainer = ({
  id,
  isActive,
  isClose,
  hasApplicationForm,
  handleClosedToggle,
}: PostingActivityContainerProps) => {
  const { postingActivityMutate } = usePostingActivity(`${id}`, handleClosedToggle)
  const handlePostingActivity = () => postingActivityMutate()
  const $t = useTranslations('announcement_detail.setting.announcement')

  return (
    <>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Styles.Wrapper>
          <Styles.Content>
            <Icon icon="icon/document-line" color="neutralGray700" />
            {$t('activate')}
          </Styles.Content>
          <Switch
            size="xs"
            isChecked={isActive}
            isDisabled={isClose || !hasApplicationForm}
            onChange={handlePostingActivity}
          />
        </Styles.Wrapper>
      </Dropdown.Item>
    </>
  )
}

export default withAuth(PostingActivityContainer)
