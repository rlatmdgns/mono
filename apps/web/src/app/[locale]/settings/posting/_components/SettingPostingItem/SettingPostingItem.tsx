import { useSetRecoilState } from 'recoil'
import { settingPostingHasAccessiblePostingAtom } from '../../_recoil'
import { JobPosting } from '@/interface/jobPosting'
import { Posting } from '@/shared/ui'
import * as Styles from './styles'

interface SettingPostingItemProps {
  posting: JobPosting
  isSelected: boolean
  onClick: (id: number, isMember: boolean) => void
}

const SettingPostingItem = ({ posting, isSelected, onClick }: SettingPostingItemProps) => {
  const { posting_id, posting_member } = posting

  const setHasAccessiblePosting = useSetRecoilState(settingPostingHasAccessiblePostingAtom)

  if (posting.posting_member) {
    setHasAccessiblePosting(posting.posting_member)
  }

  return (
    <Styles.Item onClick={() => onClick(posting_id, posting_member)}>
      <Posting jobPosting={posting} isSelect={isSelected} />
    </Styles.Item>
  )
}

export default SettingPostingItem
