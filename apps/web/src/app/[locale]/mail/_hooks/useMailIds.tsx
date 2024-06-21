import { useRecoilState } from 'recoil'
import { mailIdsAtom } from '@/app/[locale]/mail/_recoil/atom'

const useMailIds = () => {
  const [mailIds, setMailIds] = useRecoilState(mailIdsAtom)

  const handleClick = (id: number) => {
    const filterIds = (ids: number[]) => {
      if (ids.includes(id)) {
        return ids.filter((mailId: number) => mailId !== id)
      }
      return [...ids, id]
    }
    setMailIds(filterIds(mailIds))
  }

  const reset = () => {
    setMailIds([])
  }
  return {
    disabled: mailIds.length < 1,
    mailIds,
    isChecked: (id: number) => mailIds.includes(id),
    handleClick: (id: number) => handleClick(id),
    reset,
  }
}

export default useMailIds
