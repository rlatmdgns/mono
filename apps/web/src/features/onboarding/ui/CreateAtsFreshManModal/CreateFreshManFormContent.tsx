import { content, footerButtonBox, footerSwitchBox, footerSwitchText } from './styles.css'
import { Button, ModalFooter, Switch } from '@repo/ui'
import { FinalStageApplicantsTable } from '../FinalStageApplicantsTable'
import { FreshManDateTable } from '../FreshManDateTable'
import {
  FinalStageApplicant,
  FinalStageApplicantControl,
  OmsPostings,
} from '@/entities/onboarding/types'

interface CreateFreshManFormContentProps {
  isFirstStep: boolean
  isDirty: boolean
  isBatchUpdate: boolean
  finalStageApplicants: FinalStageApplicant[]
  control: FinalStageApplicantControl
  onNextStep: () => void
  onClose: () => void
  onUpdateStartDate: () => void
  onValidation: () => void
  onFilterPosting: (posting_id?: number) => void
  postings?: OmsPostings
}

export const CreateFreshManFormContent = ({
  isFirstStep,
  isDirty,
  isBatchUpdate,
  finalStageApplicants,
  control,
  onNextStep,
  onClose,
  onUpdateStartDate,
  onValidation,
  onFilterPosting,
  postings,
}: CreateFreshManFormContentProps) => {
  if (isFirstStep) {
    return (
      <>
        <div className={content}>
          <FinalStageApplicantsTable
            finalStageApplicants={finalStageApplicants}
            control={control}
            postings={postings}
            onFilterPosting={onFilterPosting}
          />
        </div>
        <ModalFooter>
          <Button text="취소" onClick={onClose} state="secondary" style="mono" />
          <Button onClick={onNextStep} disabled={!isDirty} text="다음" />
        </ModalFooter>
      </>
    )
  }
  return (
    <>
      <div className={content}>
        <FreshManDateTable control={control} isBatchUpdate={isBatchUpdate} />
      </div>
      <ModalFooter>
        <div className={footerSwitchBox}>
          <Switch isChecked={isBatchUpdate} onChange={onUpdateStartDate} size="xs" />
          <span className={footerSwitchText}>입사일 일괄 등록</span>
        </div>
        <div className={footerButtonBox}>
          <Button text="이전" onClick={onClose} state="secondary" style="mono" />
          <Button type="submit" onClick={onValidation} text="추가하기" />
        </div>
      </ModalFooter>
    </>
  )
}
