import dayjs from 'dayjs'
import { css } from 'styled-components'
import { Toast } from '@/shared/ui'
import ko from '@/shared/lang/ko.json'
import en from '@/shared/lang/en.json'

export const convertDateFormat = (date?: string | Date | null) => {
  if (!date) return ''
  return dayjs(date).format('YYYY. MM. DD')
}

export const getDayFormat = (date: Date | string, format: string) => {
  return dayjs(date).format(format)
}

export const getDaysAgo = (date: Date | string) => {
  const today = dayjs()
  return dayjs(today).diff(date, 'day')
}

export const getCurrentLocale = () => {
  let cookies
  if (typeof document !== 'undefined') {
    cookies = document
  }

  const locale = cookies?.cookie.split('; ').find((cookie) => cookie.indexOf('NEXT_LOCALE') > -1)
  return !locale ? 'ko' : locale?.split('=')[1]
}

export const getTypeStyle = (type?: string) => {
  let background
  let color
  switch (type) {
    case 'primary':
      background = (props: any) => props.theme.colors.blue500
      color = (props: any) => props.theme.colors.white
      break
    case 'warning':
      background = (props: any) => props.theme.colors.red500
      color = (props: any) => props.theme.colors.white
      break
    case 'gray':
      background = (props: any) => props.theme.colors.neutralGray100
      color = (props: any) => props.theme.colors.neutralGray600
      break
    default:
      background = (props: any) => props.theme.colors.blue100
      color = (props: any) => props.theme.colors.blue500
  }
  return css`
    background: ${background};
    color: ${color};
  `
}

export const getURLSearchParams = (params: any) => {
  return `?${new URLSearchParams(params)}`
}

export const getMakeComma = (cost: number) => {
  return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

interface RequestFile {
  file: File
  maxSize?: number
}

export const isPDFValidation = (fileInfo: RequestFile) => {
  const isPDF = fileInfo.file.type === 'application/pdf'
  if (!isPDF) {
    return Toast.error('PDF 파일만 업로드 가능합니다.')
  }
  return isPDF
}
export const fileSizeValidation = (fileInfo: RequestFile) => {
  if (!fileInfo.maxSize) fileInfo.maxSize = 15

  const maxSize = fileInfo.maxSize * 1000 * 1000
  if (maxSize < Math.ceil(fileInfo.file.size)) {
    Toast.error(`${fileInfo.maxSize}MB 이하의 파일만 업로드 가능합니다.`)
    return false
  }
  return true
}
export const ellipsisText = (text: string, maxLength = 5) => {
  if (text.length >= maxLength) {
    return text.substring(0, maxLength - 1) + '..'
  }
  return text
}
export const getNumberToFixed = (value?: number) => {
  const isOverTwoDecimals = `${value}`.substring(`${value}`.indexOf('.')).length > 2

  if (!value || Number.isInteger(value) || !isOverTwoDecimals) {
    return value || 0
  }
  return Number(value.toFixed(2))
}
