import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  settingPostingHasAccessAtom,
  settingPostingIdAtom,
} from '@/app/[locale]/settings/posting/_recoil'
import { JobPosting } from '@/interface/jobPosting'
import { AUTHORITY } from '@/shared/constants'
import { useAuthority } from '@/shared/hooks'
import { Toast } from '@/shared/ui'
import SettingPostingItem from '../SettingPostingItem'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface SettingPostingListProps {
  postings?: JobPosting[]
}

const SettingPostingList = ({ postings }: SettingPostingListProps) => {
  const $t = useTranslations('messages')
  const { authority } = useAuthority()

  const [id, setId] = useRecoilState(settingPostingIdAtom)
  const setHasAccess = useSetRecoilState(settingPostingHasAccessAtom)

  const handleClick = (id: number, isMember: boolean) => {
    const hasAccess = authority === AUTHORITY.ADMIN || isMember

    if (!hasAccess) {
      return Toast.error($t('no_access_announcements'))
    }

    setId(id)
    setHasAccess(hasAccess)
  }

  if (!postings) return null

  return (
    <Styles.List>
      {postings.map((posting, index) => {
        const isSelected = id === posting.posting_id
        return (
          <SettingPostingItem
            key={posting.posting_id}
            posting={posting}
            isSelected={isSelected}
            onClick={handleClick}
          />
        )
      })}
    </Styles.List>
  )
}

export default SettingPostingList
