'use client'

import { Button, Dropdown } from '@/shared/ui'

import { ContactInterviewPlace } from '@/interface/interview'
import ConfirmModal from '@/modals/ConfirmModal'
import useGetInterviewPlace from '@/modals/ReqeustInterviewModal/hooks/useGetInterviewPlace'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import {
  CurrentContactPlaceAtom,
  CurrentInterviewPlaceAtom,
  DeleteInterviewPlaceAtom,
  DeleteInterviewPlaceIndexAtom,
} from '@/shared/ui/LocationSelect/recoil/atom'
import { UntactInterface } from '@/shared/ui/LocationSelect/LocationSelect.interface'
import { useAddressDelete } from '@/shared/hooks'
import { Contact } from './Contact'
import { Untact } from './Untact'
import { MapContainer } from './MapContainer'
import { ScheduleDetailAtom } from '@/features/InterviewSchedule'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'
import { useLocationSelectConstant } from '@/shared/ui/LocationSelect/hooks/useLocationSelectConstant'

interface LocationSelectProps {
  mapId?: string
  workPlaceOnly?: boolean
  isAutoClose?: boolean
}

type LocationIconType = 'icon/company-solid' | 'icon/phone-solid' | 'icon/video-solid'

export const LocationSelect = ({
  mapId,
  isAutoClose,
  workPlaceOnly = false,
}: LocationSelectProps) => {
  const $t = useTranslations()
  const { UNTACT_LISTS, LOCATION_BODY_PADDING } = useLocationSelectConstant()

  const { data } = useGetInterviewPlace()
  const [currentInterviewPlace, setCurrentInterviewPlace] =
    useRecoilState(CurrentInterviewPlaceAtom)
  const resetCurrentInterviewPlace = useResetRecoilState(CurrentInterviewPlaceAtom)

  const setCurrentContactPlace = useSetRecoilState(CurrentContactPlaceAtom)
  const resetCurrentContactPlace = useResetRecoilState(CurrentContactPlaceAtom)
  const scheduleDetail = useRecoilValue(ScheduleDetailAtom)

  const deleteInterviewPlace = useRecoilValue(DeleteInterviewPlaceAtom)
  const deleteInterviewPlaceIndex = useRecoilValue(DeleteInterviewPlaceIndexAtom)
  const deleteInterviewPlaceTitle = `${deleteInterviewPlace.address} ${
    deleteInterviewPlace.detail_address ? deleteInterviewPlace.detail_address : ''
  }`

  const [contact, setContact] = useState<ContactInterviewPlace[]>([])
  const [untacts, setUntacts] = useState<UntactInterface[]>([])
  const [isRemoveModal, setIsRemoveModal] = useState<boolean>(false)
  const { addressDeleteMutate } = useAddressDelete('contact')
  const [locationIcon, setLocationIcon] = useState<LocationIconType>('icon/company-solid')
  const [isClosed, setIsClosed] = useState(true)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClosedToggle = (status: boolean) => {
    setIsClosed(status)
  }

  const handleIsRemoveModal = (status: boolean) => {
    setIsRemoveModal(status)
  }

  const handleDeleteInterviewLocation = () => {
    addressDeleteMutate({
      interview_place_key: deleteInterviewPlaceIndex,
    })
    resetCurrentInterviewPlace()
    resetCurrentContactPlace()
    setIsRemoveModal(false)
  }

  const getLocationIcon = (type: string) => {
    switch (type) {
      case $t('interview.phone_interview'):
        return 'icon/phone-solid'
      case $t('interview.video_interview'):
        return 'icon/video-solid'
      default:
        return 'icon/company-solid'
    }
  }

  const init = useCallback(() => {
    if (!data || !data?.interview_place_list || !data.enterprise_address) return

    const contacts = data.interview_place_list.contact.map((location) => {
      return {
        address: location.address,
        detail_address: location.detail_address,
        isModify: true,
      }
    })

    const { enterprise_address } = data
    setContact(contacts)

    if (enterprise_address.enterprise_address || enterprise_address.enterprise_detail_address) {
      const withEnterpriseContacts = [
        {
          address: enterprise_address.enterprise_address,
          detail_address: enterprise_address.enterprise_detail_address,
          isModify: false,
        },
        ...contacts,
      ]
      setContact(withEnterpriseContacts)
    }

    setUntacts(UNTACT_LISTS)
  }, [data])

  useEffect(() => {
    if (contact.length === 0) {
      resetCurrentInterviewPlace()
      resetCurrentContactPlace()
      return
    }

    if (currentInterviewPlace?.desc) return
    setCurrentContactPlace(contact[0])
    const contactInitPlace =
      `${contact[0].address} ${contact[0].detail_address ? contact[0].detail_address : ''}`.trim()
    setCurrentInterviewPlace({
      type: 'contact',
      desc: contactInitPlace,
    })
  }, [contact])

  useEffect(() => {
    init()

    if (!scheduleDetail) return
    setCurrentInterviewPlace({
      type:
        scheduleDetail.schedule_address.indexOf($t('common.interview')) > -1 ? 'untact' : 'contact',
      desc: scheduleDetail.schedule_detail_address
        ? `${scheduleDetail.schedule_address} ${scheduleDetail?.schedule_detail_address ? scheduleDetail?.schedule_detail_address : ''}`.trim()
        : scheduleDetail.schedule_address.trim(),
    })
  }, [init])

  useEffect(() => {
    handleClosedToggle(!isClosed)
  }, [isAutoClose])

  useEffect(() => {
    setLocationIcon(getLocationIcon(currentInterviewPlace?.desc))
  }, [currentInterviewPlace?.desc])

  const isNotLocation =
    !currentInterviewPlace?.desc ||
    (currentInterviewPlace?.type === 'contact' && contact.length < 1)
  const currentLocationInfo =
    currentInterviewPlace?.desc ||
    `${contact[0]?.address} ${contact[0]?.detail_address && contact[0]?.detail_address}` ||
    untacts[0]?.text
  const locationBodyWidth =
    wrapperRef?.current?.clientWidth && wrapperRef?.current?.clientWidth - LOCATION_BODY_PADDING

  return (
    <Styles.LocationHeader ref={wrapperRef}>
      <Dropdown
        button={
          <Styles.LocationHeaderButton>
            <Button
              state="standard"
              style="line"
              text={
                <Styles.CurrentLocationText>
                  {isNotLocation ? $t('placement.no_registered_address') : currentLocationInfo}
                </Styles.CurrentLocationText>
              }
              iconSource={locationIcon}
              onClick={() => handleClosedToggle(true)}
            />
            <Styles.LocationHeaderButtonIcon>
              <Icon icon={'icon/down-solid'} color={'neutralGray500'} />
            </Styles.LocationHeaderButtonIcon>
          </Styles.LocationHeaderButton>
        }
        direction="left"
        isParentStatusClosed={isClosed}
        isNotPortal
      >
        <Styles.LocationBody $width={locationBodyWidth}>
          <Contact
            contact={contact}
            workPlaceOnly={workPlaceOnly}
            handleClosedToggle={handleClosedToggle}
            handleIsRemoveModal={handleIsRemoveModal}
          />
          <Untact
            untacts={untacts}
            workPlaceOnly={workPlaceOnly}
            handleClosedToggle={handleClosedToggle}
          />
        </Styles.LocationBody>
      </Dropdown>
      <MapContainer mapId={mapId} />
      {isRemoveModal && (
        <Styles.RemoveModalContainer>
          <ConfirmModal
            onClick={handleDeleteInterviewLocation}
            onClose={() => handleIsRemoveModal(false)}
            state="negative"
            subtitle={deleteInterviewPlaceTitle}
            textCancel={$t('common.cancel')}
            textConfirm={$t('common.delete')}
            title={$t('placement.confirm_delete_interview_location')}
          />
        </Styles.RemoveModalContainer>
      )}
    </Styles.LocationHeader>
  )
}
