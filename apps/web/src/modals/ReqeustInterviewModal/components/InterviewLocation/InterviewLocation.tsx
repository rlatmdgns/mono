import { useGetPostingMember } from '@/shared/hooks'
import { InterviewerOption } from '@/interface/interview'
import ApplicantSelect from '@/modals/ReqeustInterviewModal/components/ApplicantSelect'
import { getConvertPostingMemberOptions } from '@/modals/ReqeustInterviewModal/components/InterviewLocation/InterviewLocation.function'
import {
  InterviewerAtom,
  InterviewInformationAtom,
} from '@/modals/ReqeustInterviewModal/recoil/atom'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { Member, Select, SelectMemberOptionLabel, TextInput, LocationSelect } from '@/shared/ui'
import { CurrentInterviewPlaceAtom } from '@/shared/ui/LocationSelect/recoil/atom'
import { useConvertInterviewPlaceholder } from '@/features/CreateSchedule'
import { useTranslations } from 'next-intl'
import { IMAGES } from '@/shared/constants'

const InterviewLocation = ({ id }: { id: string }) => {
  const currentPlace = useRecoilValue(CurrentInterviewPlaceAtom)
  const placeHolderText = useConvertInterviewPlaceholder(currentPlace.desc)
  const setInterviewer = useSetRecoilState(InterviewerAtom)
  const [postingMembers, setPostingMembers] = useState<any[]>([])
  const [interviewInformation, setInterviewInformation] = useRecoilState(InterviewInformationAtom)

  const resetInterviewInformation = useResetRecoilState(InterviewInformationAtom)
  const resetInterviewer = useResetRecoilState(InterviewerAtom)

  const { data, refetch } = useGetPostingMember(id, '')

  const $t = useTranslations()

  const handleReviewMemberChange = (selectedMember: InterviewerOption[]) => {
    const selectedMembers = selectedMember?.map((member) => member.value)
    setInterviewer([...selectedMembers])
  }

  useEffect(() => {
    refetch()
    if (!data?.posting_member) return

    const postingMembers = getConvertPostingMemberOptions([
      ...data.admin_member,
      ...data.posting_member,
    ])
    if (postingMembers.length < 1) return
    setPostingMembers([...postingMembers])
  }, [id, data])

  useEffect(() => {
    resetInterviewer()
    resetInterviewInformation()
  }, [])

  return (
    <Styles.InterviewLocation>
      <ApplicantSelect />
      <Styles.Title>
        {$t('common.interview_location')}
        <Styles.Required>*</Styles.Required>
      </Styles.Title>
      <LocationSelect />
      <Styles.FormWrap>
        <Styles.Title>
          {$t('common.notification')}
          {currentPlace.type === 'untact' && <Styles.Required>*</Styles.Required>}
        </Styles.Title>
        <TextInput
          value={interviewInformation}
          placeholder={placeHolderText}
          onChange={(event) => setInterviewInformation(event.target.value)}
        />
      </Styles.FormWrap>
      <Styles.FormWrap>
        <Styles.Title>
          {$t('common.interviewer')}
          <Styles.Required>*</Styles.Required>
        </Styles.Title>
        <Select
          options={postingMembers}
          Option={SelectMemberOptionLabel}
          placeholder={$t('messages.add_interviewer_input')}
          isSearchable
          isMulti
          onChange={handleReviewMemberChange}
          MultiValueLabel={(props) => {
            return <Member name={props.data.label} image={props.data.image} />
          }}
        />
      </Styles.FormWrap>
    </Styles.InterviewLocation>
  )
}

export default InterviewLocation
