import useExcelUpload from '@/features/ExcelUpload/hooks/useExcelUpload'
import { RecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import ConfirmModal from '@/modals/ConfirmModal'
import { FileInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface ExcelUploadProps {
  atomName: RecoilState<any>
  resetAtomName: RecoilState<any>
  cellList: string[]
}

const ExcelUpload = ({ atomName, resetAtomName, cellList }: ExcelUploadProps) => {
  const $t = useTranslations()
  const [isRemoveConfirm, setIsRemoveConfirm] = useState(false)
  const { excelData, files, onChange } = useExcelUpload(cellList)
  const setRecoilExcelData = useSetRecoilState(atomName)
  const isCallClear = useRecoilValue(resetAtomName)
  const resetIsCallClear = useResetRecoilState(resetAtomName)

  const handleConfirmToggle = (status: boolean) => {
    setIsRemoveConfirm(status)
  }

  const handleResetFile = () => {
    files.current = null
    setRecoilExcelData([])
    setIsRemoveConfirm(false)
  }

  useEffect(() => {
    setRecoilExcelData([...excelData])
  }, [excelData])

  useEffect(() => {
    if (isCallClear) {
      handleResetFile()
      resetIsCallClear()
    }
  }, [isCallClear])

  return (
    <>
      <FileInput
        files={files.current}
        accept=".xlsx, .xls, .csv"
        onChange={onChange}
        onRemove={() => handleConfirmToggle(true)}
        placeholder={$t('excel_upload.file_placeholder')}
      />
      {isRemoveConfirm && (
        <ConfirmModal
          iconSource="icon/warning-solid"
          title={$t('excel_upload.remove_confirm_title')}
          onClick={handleResetFile}
          onClose={() => handleConfirmToggle(false)}
          textConfirm={$t('common.delete_action')}
          textCancel={$t('common.close')}
        />
      )}
    </>
  )
}

export default ExcelUpload
