import { useRecoilState } from 'recoil'
import { isMailDeleteAtom } from '@/app/[locale]/mail/_recoil/atom'

const useMailDeleteState = () => {
  const [isDelete, setIsDelete] = useRecoilState(isMailDeleteAtom)

  const handleDeleteChange = () => {
    setIsDelete(true)
  }
  const handleDeleteStateReset = (callback?: () => void) => {
    setIsDelete(false)
    if (!callback) return
    callback()
  }
  return {
    isDelete,
    handleDeleteChange,
    handleDeleteStateReset: (callback?: () => void) => handleDeleteStateReset(callback),
  }
}

export default useMailDeleteState
