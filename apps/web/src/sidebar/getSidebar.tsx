import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { SidebarResponse } from '@/interface/sidebar'

const getSidebar = () => http.get<SidebarResponse>(API_URL.SIDE_BAR, 'no-cache')

export default getSidebar
