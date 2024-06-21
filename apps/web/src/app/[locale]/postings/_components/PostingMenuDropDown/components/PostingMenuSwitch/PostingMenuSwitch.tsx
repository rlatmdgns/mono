import * as Styles from '@/app/[locale]/postings/_components/PostingMenuDropDown/styles'
import { isBoardViewAtom } from '@/app/[locale]/postings/_recoil'
import { Dropdown, Switch } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useRecoilValue } from 'recoil'
import React from 'react'
import { useTranslations } from 'next-intl'

interface PostingMenuSwitchProps {
  isIncludingFailed: boolean
  handleApplicantToggle: () => void
  isVoteView: boolean
  handleVoteViewToggle: () => void
}

const PostingMenuSwitch = ({
  isIncludingFailed,
  handleApplicantToggle,
  isVoteView,
  handleVoteViewToggle,
}: PostingMenuSwitchProps) => {
  const isBoardView = useRecoilValue(isBoardViewAtom)
  const $t = useTranslations('announcement_detail.features')

  if (!isBoardView) return null
  return (
    <>
      <Dropdown.Item size={'lg'}>
        <Styles.DropdownItemContainer>
          <Styles.DropdownItemContent>
            <Icon icon="icon/hide-solid" color="neutralGray500" />
            {$t('reject_applicant_hide')}
          </Styles.DropdownItemContent>

          <Switch size="xs" isChecked={!isIncludingFailed} onChange={handleApplicantToggle} />
        </Styles.DropdownItemContainer>
      </Dropdown.Item>
      <Dropdown.Item size={'lg'}>
        <Styles.DropdownItemContainer>
          <Styles.DropdownItemContent>
            <Icon icon="icon/thumb-up-solid" color="neutralGray500" />
            {$t('vote_result_check')}
          </Styles.DropdownItemContent>
          <Switch size="xs" isChecked={isVoteView} onChange={handleVoteViewToggle} />
        </Styles.DropdownItemContainer>
      </Dropdown.Item>
    </>
  )
}
export default PostingMenuSwitch
