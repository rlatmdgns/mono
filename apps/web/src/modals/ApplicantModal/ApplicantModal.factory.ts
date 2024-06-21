import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import {
  ApplicantInfoUpdateFormProps,
  CreateApplicantTagOption,
} from '@/modals/ApplicantModal/ApplicantModal.interface'
import { getDaysAgo } from '@/shared/lib/utils'

export const getApplicantInputDirection = (
  containerRef: HTMLDivElement | null,
  direction?: 'right',
) => {
  if (!containerRef) {
    return {
      top: 0,
      left: 0,
    }
  }

  const {
    height: containerHeight,
    y: containerOffsetTop,
    x: containerOffsetLeft,
  } = containerRef.getBoundingClientRect()
  const gap = 12

  if (direction === 'right')
    return {
      top: containerOffsetTop - gap / 2,
      left: containerOffsetLeft + gap * 5,
    }

  return {
    top: containerOffsetTop + containerHeight + gap,
    left: containerOffsetLeft - gap,
  }
}

export const getApplicantExtract = (applicant: ApplicantResponse) => {
  return applicant.applicant
}

export const getUpdateApplicantForm = (
  defaultValues: ApplicantResponse,
  updateValue: ApplicantInfoUpdateFormProps,
) => {
  const { applicant_email, applicant_phone, applicant_re_url, applicant_name } =
    getApplicantExtract(defaultValues)
  return {
    applicant_email: applicant_email,
    applicant_phone: applicant_phone,
    applicant_re_url: applicant_re_url,
    applicant_name: applicant_name,
    ...updateValue,
  }
}

export const getCreateApplicantTagOptions = (searchValue: string, tags?: string[]) => {
  const currentTags =
    tags?.map((tag: string) => {
      return { label: tag, value: tag }
    }) || []
  const currentTagsOption = { label: '이미 생성된 태그', options: currentTags }

  const isSearchValueAlreadyTag = currentTags.some(
    (tag: CreateApplicantTagOption) => tag.label === searchValue,
  )
  const isValidNewTag = !isSearchValueAlreadyTag && searchValue
  const newTagOption = {
    label: '+ 새로운 태그 생성',
    options: [{ label: searchValue, value: searchValue }],
  }

  return isValidNewTag ? [currentTagsOption, newTagOption] : [currentTagsOption]
}
