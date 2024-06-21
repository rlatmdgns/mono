import { Dropdown } from '@/shared/ui'

import fileDownload from '@/services/fileDownload'
import { applicantNameAtom, pdfDataAtom } from '@/modals/ApplicantModal/recoil'
import { Icon } from '@repo/ui'
import { useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'

interface FileDownloadButtonProps {
  title: string
  onToggleClosed: (status: boolean) => void
}

const FileDownloadButton = ({ title, onToggleClosed }: FileDownloadButtonProps) => {
  const $t = useTranslations('common')
  const pdfData = useRecoilValue(pdfDataAtom)
  const applicantName = useRecoilValue(applicantNameAtom)

  if (!pdfData) return null

  const handleFileDownload = () => {
    onToggleClosed(false)
    fileDownload({ ...pdfData, file_name: title }, applicantName)
  }

  return (
    <Dropdown.Item size="lg" onClick={handleFileDownload}>
      <Icon icon="icon/download-line" color="neutralGray500" />
      {$t('file_download')}
    </Dropdown.Item>
  )
}

export default FileDownloadButton
