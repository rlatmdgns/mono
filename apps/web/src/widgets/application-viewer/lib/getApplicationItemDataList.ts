import { getApplicationItemData } from '@/widgets/application-viewer/lib'
import { ApplicationResponse } from '@/entities/Application/types'
import { ApplicationItemObject, Personal } from '@/entities/application-viewer/types'

export const getDefaultInfo = (info: Personal): ApplicationItemObject => {
  return {
    name: info.key,
    data: info,
    form: {
      id: 0,
      key: 'default',
      is_required: true,
      is_canview: true,
      is_delete: false,
      created_at: null,
      updated_at: null,
    },
  }
}

export const getApplicationItemDataList = (data: ApplicationResponse): ApplicationItemObject[] => {
  const [defaultInfo, ...otherInfos] = data
  const otherInfoArray = otherInfos
    ?.map((item) => getApplicationItemData(item))
    .filter((item) => item !== null)
    .flat() as ApplicationItemObject[]
  return [getDefaultInfo(defaultInfo), ...otherInfoArray]
}
