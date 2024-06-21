import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'
import { SidebarResponse } from '@/interface/sidebar'

const getServerSidebar = () => serverHttp.get<SidebarResponse>(API_URL.SIDE_BAR)

export default getServerSidebar
