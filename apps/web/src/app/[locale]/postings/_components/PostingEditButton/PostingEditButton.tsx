import { PAGE } from '@/shared/constants'
import { withAuth } from '@/shared/lib'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'
import React from 'react'
import { useTranslations } from 'next-intl'

interface PostingEditButtonProps {
  id: number
}

const PostingEditButton = ({ id }: PostingEditButtonProps) => {
  const $t = useTranslations('announcement_detail.setting.announcement')

  return (
    <a href={PAGE.EDIT_POSTING(id)}>
      <Dropdown.Item>
        <Icon icon="icon/edit-line" color="neutralGray700" />
        {$t('modify')}
      </Dropdown.Item>
    </a>
  )
}

export default withAuth(PostingEditButton)
