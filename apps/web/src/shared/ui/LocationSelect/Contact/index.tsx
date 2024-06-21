import * as Styles from './styles'

import { useModal } from '@/shared/hooks'
import { Dropdown, IconButton } from '@/shared/ui'
import { MODAL } from '@/shared/constants'

import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
  DeleteInterviewPlaceAtom,
  DeleteInterviewPlaceIndexAtom,
} from '../recoil/atom'
import { ContactInterviewPlace } from '@/interface/interview'

import { useRecoilState, useSetRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface ContactProps {
  workPlaceOnly?: boolean
  contact: ContactInterviewPlace[]
  handleClosedToggle?: (status: boolean) => void
  handleIsRemoveModal: (status: boolean, place?: string, index?: number) => void
}

export const Contact = ({
  contact,
  workPlaceOnly,
  handleClosedToggle,
  handleIsRemoveModal,
}: ContactProps) => {
  const $t = useTranslations('placement')

  const { openModal, closeModal } = useModal()

  const [currentInterviewPlace, setCurrentInterviewPlace] =
    useRecoilState(CurrentInterviewPlaceAtom)

  const setCurrentContactPlace = useSetRecoilState(CurrentContactPlaceAtom)
  const setDeleteInterviewPlace = useSetRecoilState(DeleteInterviewPlaceAtom)
  const setDeleteInterviewPlaceIndex = useSetRecoilState(DeleteInterviewPlaceIndexAtom)

  if (!contact) return
  const hasEnterpriseAddress = contact.some((place) => !place.isModify)

  const handleSelectContact = (place: ContactInterviewPlace) => {
    setCurrentContactPlace(place)
    setCurrentInterviewPlace({
      type: 'contact',
      desc: `${place.address} ${place.detail_address ? place.detail_address : ''}`,
    })

    if (!handleClosedToggle) return
    handleClosedToggle(false)
  }

  const handleAddressAdd = () => {
    openModal(MODAL.ADDRESS, {
      title: $t('add_new_address'),
      addressType: 'mutate',
      contact,
      zIndex: 50,
      onclick: () => {
        closeModal(MODAL.ADDRESS)
      },
    })
  }

  const handleModifyLocation = (place: ContactInterviewPlace, index: number) => {
    openModal(MODAL.ADDRESS, {
      title: $t('modify_interview_address'),
      addressType: 'mutate',
      modifyAddress: place,
      modifyAddressIndex: index,
      zIndex: 50,
      contact,
      onclick: () => {
        closeModal(MODAL.ADDRESS)
      },
    })
  }
  const handleRemoveLocation = (place: ContactInterviewPlace, index: number) => {
    handleIsRemoveModal(true)
    setDeleteInterviewPlace(place)
    setDeleteInterviewPlaceIndex(index)
  }

  return (
    <Styles.ContactWrap>
      {!workPlaceOnly && <Styles.GroupTitle> {$t('face_to_face_interview')}</Styles.GroupTitle>}
      <Styles.Content>
        {contact.map((place, placeIndex) => {
          const contactIndex = hasEnterpriseAddress ? placeIndex - 1 : placeIndex
          const isCurrent = place.detail_address
            ? currentInterviewPlace.desc === `${place.address} ${place.detail_address}`
            : currentInterviewPlace.desc?.trim() === place.address?.trim()
          return (
            <Styles.DropdownItem
              key={`drop_menu_item_contact_${placeIndex}`}
              $isCurrent={isCurrent}
              type="button"
            >
              <Dropdown.Item
                key={`contact_${placeIndex}`}
                onClick={() => handleSelectContact(place)}
              >
                <Styles.ContactInfo>
                  <Icon
                    icon="icon/company-solid"
                    color={isCurrent ? 'blue500' : 'neutralGray500'}
                  />
                  {place.address} {place.detail_address}
                </Styles.ContactInfo>
              </Dropdown.Item>
              {place.isModify && (
                <Styles.ModifyButtonWrap>
                  <Dropdown
                    button={<IconButton icon="icon/more-solid" size="sm" state="primary" />}
                    direction={'left'}
                    isAutoClose={true}
                    zIndex={40}
                  >
                    <Dropdown.Item onClick={() => handleModifyLocation(place, contactIndex)}>
                      <Icon icon="icon/edit-solid" color="neutralGray500" />
                      {$t('change_address')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleRemoveLocation(place, contactIndex)}
                      isWarning
                    >
                      <Icon icon="icon/delete-solid" color="red500" />
                      {$t('delete_address')}
                    </Dropdown.Item>
                  </Dropdown>
                </Styles.ModifyButtonWrap>
              )}
            </Styles.DropdownItem>
          )
        })}
      </Styles.Content>
      <Dropdown.Item onClick={handleAddressAdd}>
        <Icon icon="icon/add-solid" color="blue500" size={18} />
        {$t('add_address')}
      </Dropdown.Item>
    </Styles.ContactWrap>
  )
}
