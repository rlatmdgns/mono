import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import { Tooltip } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { File } from '@/interface/applicantFile'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface UploadFileButtonProps {
  files?: File[]
  isEvaluator: boolean
}

const UploadFileButton = ({ files, isEvaluator }: UploadFileButtonProps) => {
  const $t = useTranslations('messages')
  const { openModal } = useModal()
  const isUploadDisabled = files && files.length >= 7

  const handleClick = () => {
    openModal(MODAL.CREATE_APPLICANT_FILE, {
      files,
    })
  }

  if (isEvaluator) return null
  return (
    <Tooltip text={$t('upload_document_limit', { limit: 7 })} disabled={!isUploadDisabled}>
      <Styles.Wrapper>
        <Styles.Inner onClick={handleClick} disabled={isUploadDisabled}>
          <Icon icon="icon/plus-line" color="white" size={12} />
        </Styles.Inner>
      </Styles.Wrapper>
    </Tooltip>
  )
}

export default UploadFileButton
