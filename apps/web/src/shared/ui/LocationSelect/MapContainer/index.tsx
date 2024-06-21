import { Map } from '@/shared/ui'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'

interface MapContainerProps {
  mapId?: string
}

export const MapContainer = ({ mapId }: MapContainerProps) => {
  const currentPlace = useRecoilValue(CurrentInterviewPlaceAtom)
  const location = useRecoilValue(CurrentContactPlaceAtom)

  const isVisible = currentPlace && currentPlace.type === 'contact'

  if (!isVisible) return
  if (!location.address) return
  return (
    <Styles.MapContainer>
      <Map mapId={!mapId ? 'map' : mapId} address={location.address} draggable={false} />
    </Styles.MapContainer>
  )
}
