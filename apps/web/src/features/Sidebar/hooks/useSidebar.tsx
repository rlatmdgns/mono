import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getSidebar from '@/sidebar/getSidebar'
import { SidebarResponse } from '@/interface/sidebar'

const useSidebar = (initialSidebar: SidebarResponse) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.SIDE_BAR],
    queryFn: getSidebar,
    initialData: initialSidebar,
  })
  return {
    data,
  }
}

export default useSidebar
