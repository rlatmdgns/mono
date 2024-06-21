import * as Styles from './styles'

import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { UntactInterface } from '@/shared/ui/LocationSelect/LocationSelect.interface'
import { CurrentInterviewPlaceAtom } from '@/shared/ui/LocationSelect/recoil/atom'

import { useRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'

interface UnContactProps {
  untacts: UntactInterface[]
  handleClosedToggle?: (status: boolean) => void
  workPlaceOnly?: boolean
}

export const Untact = ({ untacts, handleClosedToggle, workPlaceOnly }: UnContactProps) => {
  const $t = useTranslations('placement')
  const [currentPlace, setCurrentPlace] = useRecoilState(CurrentInterviewPlaceAtom)

  if (!untacts) return
  const handleCurrentPlace = (place: string) => {
    setCurrentPlace({
      type: 'untact',
      desc: place,
    })
  }

  if (workPlaceOnly) {
    return null
  }
  return (
    <Styles.UntactWrap>
      <Styles.GroupTitle>{$t('non_face_to_face_interview')}</Styles.GroupTitle>
      {untacts.map((place, placeIndex) => {
        const isCurrent = currentPlace.desc === place.text
        return (
          <Styles.DropdownItem
            key={`drop_menu_item_unContact_${placeIndex}`}
            $isCurrent={isCurrent}
            type="button"
          >
            <Dropdown.Item
              key={`unContact_${placeIndex}`}
              onClick={() => {
                handleCurrentPlace(place.text)
                if (!handleClosedToggle) return
                handleClosedToggle(false)
              }}
            >
              <Icon icon={place.iconSource} color={isCurrent ? 'blue500' : 'neutralGray500'} />
              {place.text}
            </Dropdown.Item>
          </Styles.DropdownItem>
        )
      })}
    </Styles.UntactWrap>
  )
}
