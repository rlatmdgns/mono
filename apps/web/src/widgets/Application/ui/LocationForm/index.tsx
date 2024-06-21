'use client'

import { LocationInput } from '@/features/Application/ui'
import * as Styles from './styles'
import { ApplicantFormLabel } from '@/shared/ui'

interface LocationFormProps {
  isSelected: boolean
  isRequired: boolean
  isCanView: boolean
}

const LocationForm = ({ isSelected, isRequired, isCanView }: LocationFormProps) => {
  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'거주지'} isRequired={isRequired} isCanView={isCanView} />
        <LocationInput />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default LocationForm
