import MemoViewer from '../MemoViewer'
import MemoList from '../MemoList'
import MemoEmpty from '../MemoEmpty'
import { useSetRecoilState } from 'recoil'
import { IsMemoEditorActiveAtom, MemoAtom } from '@/features/Memo/recoil/atom'
import CreateMemo from '@/features/Memo/CreateMemo'

const MemoContainer = () => {
  const setItem = useSetRecoilState(MemoAtom)
  const setIsMemoEditorActive = useSetRecoilState(IsMemoEditorActiveAtom)

  const handleItemClick = (item: any) => {
    setItem(item)
    setIsMemoEditorActive(true)
  }

  return (
    <>
      <MemoEmpty />
      <MemoList onClick={handleItemClick} />
      <CreateMemo />
      <MemoViewer />
    </>
  )
}

export default MemoContainer
