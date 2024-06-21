import { Button, Toast } from '@/shared/ui'
import MemoItem from '../MemoItem'
import * as Styles from './styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  IsMemoEditorActiveAtom,
  IsMyMemoAtom,
  MemoAtom,
  MemosAtom,
} from '@/features/Memo/recoil/atom'
import { useTranslations } from 'next-intl'

interface MemoListProps {
  onClick: (item: any) => void
}

const MemoList = ({ onClick }: MemoListProps) => {
  const item = useRecoilValue(MemoAtom)
  const memos = useRecoilValue(MemosAtom)
  const isMyMemo = useRecoilValue(IsMyMemoAtom)
  const [isMemoEditorActive, setIsMemoEditorActive] = useRecoilState(IsMemoEditorActiveAtom)
  const $t = useTranslations()

  const handleButtonClick = () => {
    if (isMyMemo) return Toast.warning($t('messages.register_memo_limit'))
    setIsMemoEditorActive(true)
  }

  if (item.user_name) return

  if (memos?.length < 1) {
    return
  }

  if (isMemoEditorActive && !item.user_name) return

  return (
    <Styles.Wrapper>
      <Button
        text={$t('memo.register_memo')}
        style="mono"
        size="sm"
        iconSource="icon/add-solid"
        onClick={() => handleButtonClick()}
      />
      <Styles.List>
        {memos.map((item: any) => {
          return (
            <MemoItem key={`${item?.user_name}_memo`} item={item} onClick={() => onClick(item)} />
          )
        })}
      </Styles.List>
    </Styles.Wrapper>
  )
}

export default MemoList
