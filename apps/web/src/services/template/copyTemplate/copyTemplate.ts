import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

const copyTemplate = async (id: number) => await nestHttp.post(API_URL.COPY_TEMPLATE(id))

export default copyTemplate
