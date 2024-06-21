'use client'

import React, { useEffect } from 'react'
import useApplicantFile from '@/modals/ApplicantModal/hooks/useApplicantFile'
import { useUploadStreamDocs } from '@/features/streamdocs/hooks/useUploadStreamDocs'
import {
  closeSideView,
  openDocument,
  openStreamDocRedaction,
  openViewer,
} from '@/widgets/streamdocs/lib/viewerActions'
import { CustomMenu } from '@/features/streamdocs'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isOriginalViewAtom, isRedactionAtom } from '@/widgets/streamdocs/recoil/atom'
import { pdfDataAtom } from '@/modals/ApplicantModal/recoil'
import { viewer, wrapper } from '@/widgets/streamdocs/ui/PDFViewer/styles.css'

interface StreamDocProps {
  isEvaluator: boolean
  activeFileId: number
  streamDocsRef?: any
  isPublic: boolean
}

export const PDFViewer = ({
  isEvaluator,
  activeFileId,
  streamDocsRef,
  isPublic,
}: StreamDocProps) => {
  const [isOriginalView, setIsOriginalView] = useRecoilState(isOriginalViewAtom)
  const [isRedaction, setIsRedaction] = useRecoilState(isRedactionAtom)
  const setPdfData = useSetRecoilState(pdfDataAtom)

  const { data } = useApplicantFile(activeFileId)
  const { uploadStreamDocsMutate, isSuccess } = useUploadStreamDocs(activeFileId)

  const streamDocId = data?.applicant_file.original_file_streamdoc_id
  const maskingId = data?.applicant_file.masking_file_streamdoc_id
  const isMasking = data?.applicant_file.masking_state

  const uploadType = () => {
    if (!data?.applicant_file.file_masking_url) {
      return 'original'
    }
    return 'masking'
  }

  const uploadStreamDocs = async () => {
    if (!data) return
    setPdfData(data.applicant_file)

    const hasStreamDoc = streamDocId || maskingId
    if (hasStreamDoc) return
    uploadStreamDocsMutate({
      id: data?.applicant_file?.file_id,
      type: uploadType(),
    })
  }

  useEffect(() => {
    uploadStreamDocs()
  }, [data, activeFileId])

  const handleViewChange = async () => {
    if (!streamDocId || !maskingId) return

    if (isOriginalView) {
      setIsOriginalView(false)
      await openViewer(streamDocsRef, maskingId)
      return
    }

    setIsOriginalView(true)
    setIsRedaction(false)
    await openViewer(streamDocsRef, streamDocId)
  }

  const handleRedaction = async () => {
    if (!data) return
    setIsOriginalView(false)

    if (isRedaction) {
      await closeSideView(streamDocsRef)
      setIsRedaction(false)
      return
    }

    if (maskingId) {
      await openStreamDocRedaction(streamDocsRef, maskingId)
      setIsRedaction(true)
      return
    }
    uploadMaskingFile()
    setIsRedaction(true)
  }
  const uploadMaskingFile = () => {
    if (!data) return false

    uploadStreamDocsMutate({
      id: data?.applicant_file?.file_id,
      type: 'masking',
    })
  }

  useEffect(() => {
    if (!isSuccess) return
    if (uploadType() !== 'masking' || !maskingId) return

    void openStreamDocRedaction(streamDocsRef, maskingId)
  }, [isSuccess])

  useEffect(() => {
    if (!streamDocsRef.current) return
    streamDocsRef?.current?.document?.close()

    if (!maskingId) {
      return openDocument(streamDocsRef, streamDocId)
    }
    openDocument(streamDocsRef, maskingId)

    return () => {
      setIsRedaction(false)
      setIsOriginalView(false)
    }
  }, [data, activeFileId])

  const isActive = activeFileId > 0

  return (
    <div className={wrapper}>
      <CustomMenu
        onRedaction={handleRedaction}
        onViewChange={handleViewChange}
        isEvaluator={isEvaluator}
        isMasking={isMasking}
        activeFileId={activeFileId}
        isOriginalView={isOriginalView}
      />
      <iframe
        id="viewer"
        className={viewer({
          isActive,
          isPublic,
          isEvaluator,
        })}
        src="https://streamdoc.steadhr.com/streamdocs/view/sd"
      />
    </div>
  )
}
