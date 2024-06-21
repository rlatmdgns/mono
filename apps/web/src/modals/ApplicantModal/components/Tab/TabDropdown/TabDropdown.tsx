import * as Styles from './styles'

import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'

import DeleteFileButton from '@/modals/ApplicantModal/components/Tab/DeleteFileButton'
import UpdateFileOrderButton from '@/modals/ApplicantModal/components/Tab/UpdateFileOrderButton'
import FileDownloadButton from '@/modals/ApplicantModal/components/Tab/FileDownloadButton'
import UpdateFileNameButton from '@/modals/ApplicantModal/components/Tab/UpdateFileNameButton'
import UpdateFilePublicButton from '@/modals/ApplicantModal/components/Tab/UpdateFilePublicButton'
import { useTranslations } from 'next-intl'
import { withAuth } from '@/shared/lib'

interface TabDropdownProps {
  isApplication: boolean
  isActive: boolean
  id?: number
  disabled: boolean
  isFilePublic: boolean
  isApplicantPublic?: boolean
  index: number
  length?: number
  title: string
  isClosed: boolean
  onToggleClosed: (status: boolean) => void
  onDownloadApplication?: () => void
}

const TabDropdown = ({
  isApplication,
  isActive,
  disabled,
  isFilePublic,
  isApplicantPublic,
  index,
  length,
  id,
  title,
  isClosed,
  onToggleClosed,
  onDownloadApplication,
}: TabDropdownProps) => {
  const $t = useTranslations('common')
  const isResume = title === $t('resume')
  const isLeftDisabled = index === 1
  const isRightDisabled = length === index

  if (isApplication && isActive) {
    return (
      <Styles.Wrapper>
        <Dropdown
          button={
            <IconButton icon="icon/more-solid" size="xs" onClick={() => onToggleClosed(true)} />
          }
          isParentStatusClosed={isClosed}
          isNotPortal
        >
          <Dropdown.Item onClick={onDownloadApplication}>
            <Icon icon="icon/download-line" color="neutralGray500" />
            파일 다운로드
          </Dropdown.Item>
        </Dropdown>
      </Styles.Wrapper>
    )
  }

  if (!id || disabled) return null
  return (
    <Styles.Wrapper>
      <Dropdown
        isNotPortal
        button={
          <IconButton icon="icon/more-solid" size="xs" onClick={() => onToggleClosed(true)} />
        }
        isParentStatusClosed={isClosed}
      >
        <UpdateFileOrderButton
          id={id}
          index={index}
          order="left"
          disabled={isLeftDisabled}
          onToggleClosed={onToggleClosed}
        />
        <UpdateFileOrderButton
          id={id}
          index={index}
          order="right"
          disabled={isRightDisabled}
          onToggleClosed={onToggleClosed}
        />
        <UpdateFileNameButton
          id={id}
          title={title}
          isResume={isResume}
          onToggleClosed={onToggleClosed}
        />
        <FileDownloadButton title={title} onToggleClosed={onToggleClosed} />
        <DeleteFileButton id={id} isResume={isResume} onToggleClosed={onToggleClosed} />
        <Dropdown.Divider />
        <UpdateFilePublicButton
          id={id}
          isApplicantPublic={isApplicantPublic}
          isFilePublic={isFilePublic}
          onToggleClosed={onToggleClosed}
        />
      </Dropdown>
    </Styles.Wrapper>
  )
}

export default withAuth(TabDropdown)
