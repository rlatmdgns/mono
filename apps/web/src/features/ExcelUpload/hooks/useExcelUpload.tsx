import { ChangeEvent, useRef, useState } from 'react'
import { Toast } from '@/shared/ui'
import { read, utils } from 'xlsx'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

const useExcelUpload = (changeKeys: string[]) => {
  const $t = useTranslations('messages')
  const { register, watch } = useForm()
  const [excelData, setExcelData] = useState<any[]>([])
  const files = useRef<any>(null)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length === 0) {
      Toast.error($t('no_input_file'))
      return
    }

    if (event.target.files) {
      const file = event.target.files[0]
      files.current = event.target.files
      const reader = new FileReader()
      reader.onload = async (EventTarget) => {
        if (EventTarget.target) {
          const workBook = read(EventTarget.target.result)
          const workSheet = workBook.Sheets[workBook.SheetNames[0]]
          getConvertData(workSheet, changeKeys)

          const data: any[] = utils.sheet_to_json<any>(workSheet)
          if (data.length === 0) return Toast.error($t('no_data'))

          setExcelData([...data])
        }
      }
      reader.readAsArrayBuffer(file)
    }
  }

  const getConvertData = (workSheet: any, convertData: string[]) => {
    let idx = 0
    for (let key in workSheet) {
      if (key.indexOf('1') > -1) {
        workSheet[key].h = convertData[idx]
        workSheet[key].w = convertData[idx]
        idx++
      }
    }
  }

  return {
    excelData,
    files,
    onChange,
  }
}

export default useExcelUpload
