import * as Styles from './styles'
import ApplicantInfoUpdate from '@/modals/ApplicantModal/components/ApplicantInfoUpdate'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import ApplicantInfoItemCopyButton from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo/ApplicantInfoItemCopyButton'
import { RegisterOptions } from 'react-hook-form'

interface ApplicantInfoItemProps {
  label: string
  name: string
  value: string
  options?: RegisterOptions
  isFixed?: boolean
  applicant: ApplicantResponse
  maxLength?: number
}

const ApplicantInfoItem = ({
  label,
  value,
  name,
  isFixed,
  applicant,
  options,
  maxLength,
}: ApplicantInfoItemProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Name>{label}</Styles.Name>
        <Styles.CopyButtonBox>
          <ApplicantInfoItemCopyButton value={value} />
        </Styles.CopyButtonBox>
      </Styles.Header>
      <ApplicantInfoUpdate
        applicant={applicant}
        disabled={isFixed}
        label={label}
        name={name}
        value={value}
        options={options}
        maxLength={maxLength}
        button={<Styles.ValueBoxText>{value}</Styles.ValueBoxText>}
      />
    </Styles.Wrapper>
  )
}

export default ApplicantInfoItem
