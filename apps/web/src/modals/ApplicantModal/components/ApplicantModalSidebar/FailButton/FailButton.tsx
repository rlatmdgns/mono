import { useRecoilValue } from 'recoil'
import { applicantIdAtom, applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { useModal } from '@/shared/hooks'
import useApplicantFail from '@/app/[locale]/postings/_hooks/useApplicantFail'
import { MODAL } from '@/shared/constants'
import { Button, IconBoxButton } from '@/shared/ui'
import { useLocale, useTranslations } from 'next-intl'

interface FailButtonProps {
  applicantState: number
  applicantName: string
  postingId: number
}

const FailButton = ({ applicantState, applicantName, postingId }: FailButtonProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)
  const { openModal, closeModal } = useModal()
  const { failApplicantMutate } = useApplicantFail(`${postingId}`)
  const isFail = applicantState === 2
  const buttonStyle = isFail ? 'fill-strong' : 'fill-weak'
  const $t = useTranslations()
  const currentLocale = useLocale()

  const getFailText = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          Cancel the rejection for "{applicantName}" applicant?
          <br />
          Are you sure you want to proceed?
        </>
      )
    }
    return (
      <>
        “{applicantName}” 지원자를 불합격 취소
        <br />
        처리하시겠습니까?
      </>
    )
  }

  const handleFailApplicant = () => {
    const title = isFail ? (
      <>
        “{applicantName}” 지원자를 불합격 취소
        <br />
        처리하시겠습니까?
      </>
    ) : (
      $t('messages.applicant_fail_confirm', {
        applicantName,
      })
    )

    const failApplicant = () => {
      failApplicantMutate({ applicant_id: [applicantId], fail: !isFail })
      closeModal(MODAL.CONFIRM)
    }

    openModal(MODAL.CONFIRM, {
      title: title,
      iconSource: 'icon/cancle-solid',
      textConfirm: $t('common.confirm'),
      onClick: () => failApplicant(),
    })
  }

  if (isFold)
    return (
      <IconBoxButton
        onClick={handleFailApplicant}
        size="xs"
        icon="icon/cancle-solid"
        state="warning"
        style={buttonStyle}
      />
    )
  return (
    <Button
      onClick={handleFailApplicant}
      width="fit-content"
      size="sm"
      iconSource="icon/cancle-solid"
      text={$t('common.fail')}
      state="warning"
      style={buttonStyle}
    />
  )
}
export default FailButton
