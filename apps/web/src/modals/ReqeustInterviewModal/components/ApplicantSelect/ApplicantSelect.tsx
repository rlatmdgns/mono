import * as Styles from './styles'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Select } from '@/shared/ui'
import { ApplicantsOptions } from '@/interface/interview'
import {
  ApplicantsIdsAtom,
  SubmitDisabledStatusAtom,
} from '@/modals/ReqeustInterviewModal/recoil/atom'
import { useEffect } from 'react'
import { useSelectApplicants } from '@/shared/hooks'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'
import { useTranslations } from 'next-intl'

const ApplicantSelect = () => {
  const activeApplicantId = useRecoilValue(applicantIdAtom)

  const { applicantOptions, selectApplicantOptions } = useSelectApplicants()
  const [applicantId, setApplicantsId] = useRecoilState(ApplicantsIdsAtom)

  const setSubmitStatus = useSetRecoilState(SubmitDisabledStatusAtom)

  const $t = useTranslations()

  const activeApplicantOption = applicantOptions.filter(
    (option) => option.value === Number(activeApplicantId),
  )
  const defaultValues = activeApplicantId ? activeApplicantOption : selectApplicantOptions

  const handleApplicantsChange = (selectedMember: ApplicantsOptions[]) => {
    const selectedMemberIds = selectedMember?.map((member) => member.value.toString())

    if (!selectedMemberIds) {
      setSubmitStatus(false)
    }

    setApplicantsId([...selectedMemberIds])
  }

  const handleGetSubmitStatus = () => {
    applicantId.length === 0 ? setSubmitStatus(false) : setSubmitStatus(true)
  }

  useEffect(() => {
    handleGetSubmitStatus()
  }, [applicantId])

  useEffect(() => {
    handleApplicantsChange(defaultValues)
  }, [])

  return (
    <Styles.ApplicantSelectWrapper>
      <Styles.Title>
        {$t('mail.recipient')}
        <Styles.Required>*</Styles.Required>
      </Styles.Title>
      <Select
        defaultValue={defaultValues}
        options={applicantOptions}
        placeholder={$t('messages.recipient_input')}
        isSearchable
        isMulti
        closeMenuOnSelect={false}
        onChange={handleApplicantsChange}
      />
    </Styles.ApplicantSelectWrapper>
  )
}
export default ApplicantSelect
