import * as Styles from './styles'
import {
  activeFileIdAtom,
  activeTabIndexAtom,
  isFileLoadingAtom,
} from '@/modals/ApplicantModal/recoil'
import { useRecoilState, useSetRecoilState } from 'recoil'
import TabDropdown from '@/modals/ApplicantModal/components/Tab/TabDropdown'
import TabIcon from '@/modals/ApplicantModal/components/Tab/TabIcon'
import { useState } from 'react'

interface TabProps {
  id?: number
  title: string
  index: number
  isEvaluator: boolean
  length?: number
  isFilePublic: boolean
  isApplicantPublic?: boolean
  onDownloadApplication?: () => void
}

const Tab = ({
  title,
  index,
  isEvaluator,
  length,
  id,
  isFilePublic,
  isApplicantPublic,
  onDownloadApplication,
}: TabProps) => {
  const [activeTabIndex, setActiveTabIndex] = useRecoilState(activeTabIndexAtom)
  const [activeFileId, setActiveFileId] = useRecoilState(activeFileIdAtom)
  const setIsFileLoading = useSetRecoilState(isFileLoadingAtom)

  const isApplication = title === '지원서'
  const isActive = activeTabIndex === index
  const isAlreadyActive = activeFileId === id
  const isDropdownDisabled = isEvaluator || !isActive

  const [isClosed, setIsClosed] = useState(true)

  const handleClosedToggle = (status: boolean) => {
    setIsClosed(status)
  }

  const handleClick = () => {
    setActiveTabIndex(index)
    if (isAlreadyActive) return

    const isNoneFileId = 0
    setActiveFileId(id || isNoneFileId)
    setIsFileLoading(true)
  }

  if (!isFilePublic && isEvaluator) return null

  return (
    <Styles.Wrapper
      $isActive={isActive}
      $isApplication={isApplication}
      $length={length}
      onClick={handleClick}
    >
      <TabIcon isApplication={isApplication} isFilePublic={isFilePublic} />
      <Styles.Title>{title}</Styles.Title>
      <TabDropdown
        id={id}
        isActive={isActive}
        isApplication={isApplication}
        isFilePublic={isFilePublic}
        isApplicantPublic={isApplicantPublic}
        disabled={isDropdownDisabled}
        index={index}
        length={length}
        title={title}
        isClosed={isClosed}
        onToggleClosed={handleClosedToggle}
        onDownloadApplication={onDownloadApplication}
      />
    </Styles.Wrapper>
  )
}

export default Tab
