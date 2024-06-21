import useGetMemos from '@/features/Memo/hooks/useGetMemos'
import { IsMyMemoAtom, MemosAtom } from '@/features/Memo/recoil/atom'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import MemoContainer from './MemoContainer'
import * as Styles from './styles'

interface MemoProps {
  applicantId: string
}

const Memo = ({ applicantId }: MemoProps) => {
  const { data } = useGetMemos(applicantId)
  const setIsMyMemo = useSetRecoilState(IsMyMemoAtom)
  const setMemos = useSetRecoilState(MemosAtom)

  useEffect(() => {
    if (data) {
      setIsMyMemo(data.is_my_memo)
    }

    if (!data?.memos) {
      setMemos([])
    }

    if (data?.memos) {
      setMemos(data.memos)
    }
  }, [data, applicantId])
  return (
    <Styles.Wrapper>
      <MemoContainer />
    </Styles.Wrapper>
  )
}

export default Memo
