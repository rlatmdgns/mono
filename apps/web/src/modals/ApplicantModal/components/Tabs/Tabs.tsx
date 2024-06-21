import { File } from '@/interface/applicantFile'
import Tab from '@/modals/ApplicantModal/components/Tab'
import React from 'react'

interface TabsProps {
  files?: File[]
  isEvaluator: boolean
  isPublic: boolean
  onDownloadApplication: () => void
}

const Tabs = ({ files, isEvaluator, isPublic, onDownloadApplication }: TabsProps) => {
  const length = files?.length

  return (
    <>
      <Tab
        index={0}
        title="지원서"
        onDownloadApplication={onDownloadApplication}
        isEvaluator={isEvaluator}
        isFilePublic
      />
      {files?.map((file, index) => (
        <Tab
          key={index}
          index={index + 1}
          length={length}
          id={file.file_id}
          title={file.file_name}
          isFilePublic={file.is_public}
          isEvaluator={isEvaluator}
          isApplicantPublic={isPublic}
        />
      ))}
    </>
  )
}

export default Tabs
