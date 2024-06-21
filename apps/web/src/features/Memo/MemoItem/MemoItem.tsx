import { Avatar, IconBoxButton } from '@/shared/ui'
import DividerDot from '@/features/Evaluation/components/DividerDot'
import MemoDropdown from '../MemoDropdown/MemoDropdown'
import * as Styles from './styles'

interface MemoItemProps {
  item: any
  onClick?: () => void
}

const MemoItem = ({ item, onClick }: MemoItemProps) => {
  const { user_name, user_profile, applicant_memo_title } = item

  if (!item) return null

  return (
    <Styles.Item onClick={onClick}>
      <Styles.Left>
        <IconBoxButton icon="icon/memo-solid" state="standard" style="fill-weak" />
        <Styles.Info>
          <Styles.Title>{applicant_memo_title}</Styles.Title>
          <DividerDot />
          {user_name && (
            <Styles.User>
              <Avatar src={user_profile} alt={user_name} size="xs" />
              <Styles.UserName>{user_name}</Styles.UserName>
            </Styles.User>
          )}
        </Styles.Info>
      </Styles.Left>
      {item.is_access && (
        <Styles.Right>
          <MemoDropdown applicant_memo_id={item.applicant_memo_id} />
        </Styles.Right>
      )}
    </Styles.Item>
  )
}

export default MemoItem
