import * as Styles from '../styles'
import { ApplicationViewerItemDataType } from '../../types'
import { isAddress } from '@/entities/application-viewer/lib'
import { EmptyData } from '@/entities/application-viewer/ui/EmptyData'

interface AddressDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const AddressData = ({ name, data }: AddressDataProps) => {
  const isNotAddress = name !== 'address'

  if (isNotAddress) return null
  if (!isAddress(data)) return null
  if (!data.road_address) {
    return <EmptyData text="미제출" />
  }
  return (
    <Styles.Content>
      <Styles.Text>
        {data.road_address} {data.detail_address}
      </Styles.Text>
    </Styles.Content>
  )
}
