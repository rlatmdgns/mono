import { QUERY_KEY } from '@/shared/constants'
import getHome from '@/services/home/getHome'
import { HomeResponse } from '@/services/home/getHome.interface'
import { useQuery } from '@tanstack/react-query'

const useHome = (initialData: HomeResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHome,
    initialData,
  })
  return {
    data,
  }
}

export default useHome
