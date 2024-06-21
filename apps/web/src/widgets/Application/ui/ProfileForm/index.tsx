'use client'

import { ProfileInput } from '@/features/Application/ui'
import * as Styles from './styles'
import { ApplicantFormLabel } from '@/shared/ui'

interface ProfileFormProps {
  isSelected: boolean
  isRequired: boolean
  isCanView: boolean
}

const ProfileForm = ({ isRequired, isCanView, isSelected }: ProfileFormProps) => {
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'지원자 사진'} isRequired={isRequired} isCanView={isCanView} />
        <ProfileInput />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default ProfileForm
