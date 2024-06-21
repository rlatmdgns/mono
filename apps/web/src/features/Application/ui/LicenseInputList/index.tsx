'use client'

import { UseFieldArrayRemove, UseFieldArrayUpdate } from 'react-hook-form'
import { AddMultipleInputButton } from '../AddMultipleInputButton'
import { LicenseInputItem } from './LicenseInputItem'
import * as Styles from './styles'
import { ApplicantRequest, License } from '@/entities/Application/types/ApplicantRequest'

interface LicenseInputListProps {
  hasLicense: boolean
  licenses: License[]
  onAppend: () => void
  update: UseFieldArrayUpdate<ApplicantRequest, 'licenses'>
  remove: UseFieldArrayRemove
}

export const LicenseInputList = ({
  hasLicense,
  licenses,
  onAppend,
  update,
  remove,
}: LicenseInputListProps) => {
  const isAddDisabled = !licenses[licenses?.length - 1]?.is_licence

  if (!hasLicense) return null

  return (
    <Styles.Wrapper>
      {licenses?.map((license, license_index) => (
        <LicenseInputItem
          key={`license_${license_index}`}
          licenseIndex={license_index}
          license={license}
          update={update}
          remove={remove}
        />
      ))}
      <AddMultipleInputButton
        isAddDisabled={isAddDisabled}
        text="자격증 또는 면허 추가"
        onClick={() => onAppend()}
      />
    </Styles.Wrapper>
  )
}
