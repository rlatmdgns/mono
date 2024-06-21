import Link from 'next/link'
import * as Styles from './styles'
import { useSetMap } from '@/shared/hooks'

export const Map = ({
  mapId,
  address,
  markerText,
  draggable,
  isAnchorBlank,
}: {
  mapId?: string
  address: string
  markerText?: string
  draggable?: boolean
  isAnchorBlank?: boolean
}) => {
  if (!mapId) mapId = 'map'
  useSetMap(mapId, address, markerText, draggable)

  return (
    <Styles.MapWrapper>
      {address && <Styles.Map id={mapId}></Styles.Map>}
      {isAnchorBlank && (
        <Link href={`https://map.kakao.com/link/search/${address}`} target="_blank">
          크게 보기
        </Link>
      )}
    </Styles.MapWrapper>
  )
}
