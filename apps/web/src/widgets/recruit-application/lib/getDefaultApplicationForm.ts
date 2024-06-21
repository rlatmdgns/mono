import { REFERER } from '@/entities/Application/constants'
import {
  APPLICATION_ARRAY_FORMS,
  APPLICATION_STRING_FORMS,
} from '@/widgets/recruit-application/consts'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'

const hasObjectWithKey = (array: RecruitApplicationItem[], key: string) => {
  if (!array) return false
  return array?.some((obj) => obj.hasOwnProperty('key') && obj['key'] === key)
}

const initDocuments = (initValues?: PostingApplicationFormResponse) => {
  if (!initValues) return ''
  if (!hasObjectWithKey(initValues?.datas, 'documents')) {
    return ''
  }
  const documents = initValues?.datas.find((item) => item.key === 'documents')?.documents
  const formDocuments = documents?.map((document) => ({
    posting_applicant_form_document_id: document.id,
    file_url: null,
  }))
  return {
    documents: formDocuments,
  }
}

const initQuestions = (initValues?: PostingApplicationFormResponse) => {
  if (!initValues) return ''
  if (!hasObjectWithKey(initValues?.datas, 'pre_questions')) {
    return ''
  }
  const questions = initValues?.datas.find((item) => item.key === 'pre_questions')?.questions
  const formQuestions = questions?.map((question) => ({
    posting_applicant_form_pre_question_id: question.id,
    description: '',
  }))
  return {
    pre_questions: formQuestions,
  }
}

const initAddress = () => {
  return {
    road_address: '',
    detail_address: '',
  }
}

const initMilitary = (initValues?: PostingApplicationFormResponse) => {
  if (!initValues) return ''
  return (
    hasObjectWithKey(initValues?.datas, 'military') && {
      military: {
        is_military: false,
        type: '',
        rank: '',
        enlistment_date: null,
        discharge_date: null,
        discharge: '',
      },
    }
  )
}

const initDisabled = (initValues?: PostingApplicationFormResponse) => {
  if (!initValues) return ''
  return (
    hasObjectWithKey(initValues?.datas, 'disabled') && {
      disabled: {
        is_disabled: false,
        classification: '',
        level: '',
      },
    }
  )
}

const initVeteranBenefit = (initValues?: PostingApplicationFormResponse) => {
  if (!initValues) return ''
  return (
    hasObjectWithKey(initValues?.datas, 'veteran_benefit') && {
      veteran_benefit: {
        is_veteran_benefit: false,
        veteran_benefit_number: '',
      },
    }
  )
}

const initGender = (initValues?: PostingApplicationFormResponse) => {
  if (!initValues) return ''
  return (
    hasObjectWithKey(initValues?.datas, 'gender') && {
      gender: '남성',
    }
  )
}

export const initApplicationForm = (
  initValues?: PostingApplicationFormResponse,
  refererURL?: string,
) => {
  const defaultValues = {
    apply_route: refererURL ? REFERER[refererURL] : '기타',
    enterprise_select_personal_terms: false,
    enterprise_required_personal_terms: false,
    is_directed: false,
  }

  const formPropertyValues = APPLICATION_STRING_FORMS?.reduce((acc: any, key: string) => {
    acc[key] = ''
    return acc
  }, {})

  const formArray = APPLICATION_ARRAY_FORMS?.reduce((acc: any, key: string) => {
    acc[key] = []
    return acc
  }, {})

  return {
    ...defaultValues,
    ...formPropertyValues,
    ...formArray,
    ...initAddress(),
    ...initMilitary(initValues),
    ...initDisabled(initValues),
    ...initVeteranBenefit(initValues),
    ...initDocuments(initValues),
    ...initQuestions(initValues),
    ...initGender(initValues),
  }
}
