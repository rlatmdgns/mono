import * as Styles from './styles'
import { File } from '@/interface/applicantFile'
import UploadFileButton from '@/modals/ApplicantModal/components/UploadFileButton'
import React from 'react'
import Tabs from '@/modals/ApplicantModal/components/Tabs'

interface TabsProps {
  files?: File[]
  isEvaluator: boolean
  isPublic: boolean
  onDownloadApplication: () => void
}

const FileNavigator = ({ files, isEvaluator, isPublic, onDownloadApplication }: TabsProps) => {
  return (
    <Styles.Wrapper>
      <Tabs
        files={files}
        isEvaluator={isEvaluator}
        isPublic={isPublic}
        onDownloadApplication={onDownloadApplication}
      />
      <UploadFileButton files={files} isEvaluator={isEvaluator} />
    </Styles.Wrapper>
  )
}

export default FileNavigator
