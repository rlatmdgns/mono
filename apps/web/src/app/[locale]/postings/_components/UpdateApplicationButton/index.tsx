import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { PAGE } from '@/shared/constants'
import { LinkButton } from '@/shared/ui'
import React from 'react'
import { withAuth } from '@/shared/lib'

interface UpdateApplicationButtonProps {
  id: number
  hasApplicationForm: boolean
}

const UpdateApplicationButton = ({ id, hasApplicationForm }: UpdateApplicationButtonProps) => {
  const $t = useTranslations('announcement_detail')

  return (
    <>
      <Styles.Title>{$t('setting.applicant_document.title')}</Styles.Title>
      <Styles.ButtonBox>
        <LinkButton
          href={PAGE.EDIT_BUILD_APPLICATION(id)}
          iconSource="icon/edit-line"
          size="sm"
          state="standard"
          style="mono"
          width="184px"
          text={$t('setting.applicant_document.modify')}
          disabled={!hasApplicationForm}
        />
      </Styles.ButtonBox>
    </>
  )
}

export default withAuth(UpdateApplicationButton)
