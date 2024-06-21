import { AddApplicantInfoItem } from '@/features/Application/ui/AddApplicantInfoItem'
import { ApplicantInfo } from 'features/build-application/types'
import { useFormContext } from 'react-hook-form'
import {
  APPLICANT_BASIC_INFO,
  APPLICANT_DOCUMENT_INFO,
  APPLICANT_EDUCATION_INFO,
  APPLICANT_EXPERIENCE_INFO,
} from '../../constants'
import * as Styles from './styles'
import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'

interface AddApplicantInfoListProps {
  applicantItems?: RecruitApplicationItem[]
  onAddItem: (key: string) => void
}

export const AddApplicantInfoList = ({ applicantItems, onAddItem }: AddApplicantInfoListProps) => {
  const { watch } = useFormContext()

  const infoList = watch('applicant_list')

  const isApplicantItemAdded = (key: string) => {
    const item = infoList?.find((item: ApplicantInfo) => item?.key === key)
    if (key === 'documents') {
      return item && item.documents?.length >= 7
    }
    if (key === 'pre_questions') {
      return false
    }
    return item && !item.is_multiple
  }

  return (
    <Styles.Wrapper>
      <Styles.Title>항목 추가</Styles.Title>
      <Styles.Inner>
        <Styles.Field>기본 인적사항</Styles.Field>
        <Styles.List>
          {APPLICANT_BASIC_INFO.map((item, index) => (
            <AddApplicantInfoItem
              key={`basic_info_${index}_${item.ko}`}
              item={item}
              applicantItems={applicantItems}
              onClick={onAddItem}
              isDisabled={isApplicantItemAdded(item.key)}
            />
          ))}
        </Styles.List>
        <Styles.Field>학력사항</Styles.Field>
        <Styles.List>
          {APPLICANT_EDUCATION_INFO.map((item, index) => (
            <AddApplicantInfoItem
              key={`education_info_${index}_${item.ko}`}
              item={item}
              applicantItems={applicantItems}
              onClick={onAddItem}
              isDisabled={isApplicantItemAdded(item.key)}
            />
          ))}
        </Styles.List>
        <Styles.Field>경력 및 활동 사항</Styles.Field>
        <Styles.List>
          {APPLICANT_EXPERIENCE_INFO.map((item, index) => (
            <AddApplicantInfoItem
              key={`experience_info_${index}_${item.ko}`}
              item={item}
              applicantItems={applicantItems}
              onClick={onAddItem}
              isDisabled={isApplicantItemAdded(item.key)}
            />
          ))}
        </Styles.List>
        <Styles.Field>어학 및 서류</Styles.Field>
        <Styles.List>
          {APPLICANT_DOCUMENT_INFO.map((item, index) => (
            <AddApplicantInfoItem
              key={`document_info_${index}_${item.ko}`}
              item={item}
              applicantItems={applicantItems}
              onClick={onAddItem}
              isDisabled={isApplicantItemAdded(item.key)}
            />
          ))}
        </Styles.List>
      </Styles.Inner>
    </Styles.Wrapper>
  )
}
