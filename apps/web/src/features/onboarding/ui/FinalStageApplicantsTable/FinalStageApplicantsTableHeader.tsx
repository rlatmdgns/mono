import {
  postingCellText,
  postingDropdown,
  postingList,
  tableHeader,
  tableHeaderCell,
} from './styles.css'
import {
  FinalStageApplicant,
  FinalStageApplicantControl,
} from '@/entities/onboarding/types/finalStageApplicant'
import { Controller } from 'react-hook-form'
import { CheckBox } from '@repo/ui'
import { Dropdown } from '@/shared/ui'
import { OmsPostings } from '@/entities/onboarding/types'
import { addFinalStageApplicantDate } from '@/entities/onboarding/lib'

interface FinalStageApplicantsTableHeaderProps {
  finalStageApplicants: FinalStageApplicant[]
  control: FinalStageApplicantControl
  onFilterPosting: (posting_id?: number) => void
  postings?: OmsPostings
}

export const FinalStageApplicantsTableHeader = ({
  finalStageApplicants,
  control,
  postings,
  onFilterPosting,
}: FinalStageApplicantsTableHeaderProps) => {
  return (
    <div className={tableHeader}>
      <Controller
        name="freshmen"
        control={control}
        render={({ field }) => {
          const isAllSelected = field.value?.length === finalStageApplicants.length
          const newApplicantValues = finalStageApplicants.map((applicant) => {
            return addFinalStageApplicantDate(applicant)
          })
          const onChange = () => field.onChange(isAllSelected ? [] : newApplicantValues)
          return <CheckBox isChecked={isAllSelected} onChange={onChange} />
        }}
      />
      <span className={tableHeaderCell}>이름</span>
      <div className={postingDropdown}>
        <Dropdown
          button={<span className={postingCellText}>공고명</span>}
          direction="left"
          isNotPortal
          isAutoClose
          isTypeSelect
        >
          <div className={postingList}>
            <Dropdown.Item onClick={() => onFilterPosting()}>전체</Dropdown.Item>
            <Dropdown.Divider />
            {postings?.map((posting, index) => (
              <Dropdown.Item key={index} onClick={() => onFilterPosting(posting.posting_id)}>
                {posting.posting_title}
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown>
      </div>
      <span className={tableHeaderCell}>연락처</span>
      <span className={tableHeaderCell}>이메일</span>
    </div>
  )
}
