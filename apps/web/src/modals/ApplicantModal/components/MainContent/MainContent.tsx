'use client'

import * as Styles from './styles'
import React, { useEffect, useRef } from 'react'
import {
  activeFileIdAtom,
  activeTabIndexAtom,
  applicantIdAtom,
  applicantModalSidebarIsFoldAtom,
  fileNamesAtom,
  isFileLoadingAtom,
} from '@/modals/ApplicantModal/recoil'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import FileNavigator from '@/modals/ApplicantModal/components/FileNavigator'
import LockCloseBox from '@/modals/ApplicantModal/components/LockCloseBox'
import ApplicantInsightPanel from '@/modals/ApplicantModal/components/ApplicantInsightPanel'
import useApplicantFiles from '@/modals/ApplicantModal/hooks/useApplicantFiles'
import { ApplicationView } from '@/modals/ApplicantModal/components/ApplicationView'
import { ApplicationViewer } from '@/widgets/application-viewer'

// @ts-ignore
import Html2Pdf from 'js-html2pdf'
import { useReactToPrint } from 'react-to-print'
import { PDFViewer } from '@/widgets/streamdocs'
import { isRedactionAtom } from '@/widgets/streamdocs/recoil/atom'
import { useUpdateApplicantFileMasking } from '@/features/streamdocs/hooks/useUpdateApplicantFileMasking'

interface MainContentProps {
  isEvaluator: boolean
  onClose: () => void
  onPublic: () => void
  isPublic: boolean
  postingId: number
  stepId: string
  applicantName: string
}

const MainContent = ({
  isEvaluator,
  onClose,
  isPublic,
  onPublic,
  postingId,
  stepId,
  applicantName,
}: MainContentProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)
  const [activeTabIndex, setActiveTabIndex] = useRecoilState(activeTabIndexAtom)
  const [activeFileId, setActiveFileId] = useRecoilState(activeFileIdAtom)
  const setFileNames = useSetRecoilState(fileNamesAtom)
  const setIsRedaction = useSetRecoilState(isRedactionAtom)
  const setIsFileLoading = useSetRecoilState(isFileLoadingAtom)

  const { updateMaskingMutate } = useUpdateApplicantFileMasking(activeFileId)
  const { data: fileResponse } = useApplicantFiles(applicantId)

  const pdfDownloadRef = React.useRef<HTMLDivElement>(null)
  const streamDocsRef = useRef<any>(null)

  const files = fileResponse?.applicant_file
  const isPdfActive = !!activeTabIndex

  const filterFileNames = () => {
    if (!files) return
    const fileNames = files.map((file) => file.file_name)
    setFileNames(fileNames)
  }

  const handlePrint = useReactToPrint({
    content: () => pdfDownloadRef.current,
    onPrintError: (error) => console.error(error),
    removeAfterPrint: true,
    print: async (printIframe) => {
      const document = printIframe.contentDocument
      const html = document?.getElementById('application-pdf-download')

      if (!html) return
      const exporter = new Html2Pdf(html, { filename: `${applicantName}_지원서.pdf` })
      await exporter.getPdf(true)
    },
  })

  const resetActiveFile = () => {
    if (!files || !isPdfActive) return
    const isActiveFileValid = files.some((file) => file.file_id === activeFileId)

    if (isActiveFileValid) return
    const nextActiveFileIndex = activeTabIndex - 1 || 1
    const nextActiveFileId = files[nextActiveFileIndex - 1]?.file_id
    setIsFileLoading(true)
    setActiveFileId(nextActiveFileId)
    setActiveTabIndex(nextActiveFileIndex)
  }

  const renderApplicationPdfDownload = () => {
    return (
      <Styles.PDFWrapper>
        <Styles.PDFContainer ref={pdfDownloadRef} id="application-pdf-download">
          <ApplicationViewer applicantId={applicantId} isEvaluator={isEvaluator} />
        </Styles.PDFContainer>
      </Styles.PDFWrapper>
    )
  }

  useEffect(() => {
    filterFileNames()
    resetActiveFile()
  }, [files])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://streamdoc.steadhr.com/streamdocs/adapter.js'
    script.onload = () => {
      streamDocsRef.current = new StreamDocs({
        element: document.getElementById('viewer') as HTMLElement,
      })

      streamDocsRef.current?.viewer.closeSideView({
        type: 'REDACTION',
      })

      streamDocsRef.current?.addEventListener('sideViewClose', () => setIsRedaction(false))
      streamDocsRef.current?.addEventListener('documentSave', updateMaskingMutate)
    }

    document.body.appendChild(script)
    return () => {
      streamDocsRef.current?.removeEventListener('sideViewClose', () => setIsRedaction(false))
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Styles.Wrapper $isFold={isFold}>
      <Styles.Header>
        <FileNavigator
          isEvaluator={isEvaluator}
          isPublic={isPublic}
          files={files}
          onDownloadApplication={handlePrint}
        />
        <LockCloseBox
          isEvaluator={isEvaluator}
          isPublic={isPublic}
          onPublic={onPublic}
          onClose={onClose}
        />
      </Styles.Header>
      <Styles.Container>
        <Styles.Content>
          <ApplicationView
            applicantId={applicantId}
            isPdfActive={isPdfActive}
            isEvaluator={isEvaluator}
          />
          <PDFViewer
            isEvaluator={isEvaluator}
            isPublic={isPublic}
            activeFileId={activeFileId}
            streamDocsRef={streamDocsRef}
          />
          {renderApplicationPdfDownload()}
        </Styles.Content>
        <ApplicantInsightPanel postingId={postingId} applicantId={applicantId} stepId={stepId} />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default MainContent
