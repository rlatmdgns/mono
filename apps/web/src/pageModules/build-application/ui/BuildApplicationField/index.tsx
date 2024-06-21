'use client'

import {
  addDocumentItemToList,
  getApplicationItemsWithOutId,
  mapAndUpdateDocumentList,
  swapMoveDown,
  swapMoveUp,
} from '@/pageModules/build-application/model'
import {
  SelectedApplicantBasicItemAtom,
  SelectedApplicantItemAtom,
  SelectedDocumentIndexAtom,
} from '@/pageModules/build-application/recoil'
import { Toast } from '@/shared/ui'
import {
  ADD_APPLICANT_COMPONENTS,
  APPLICANT_BASIC_INFO,
  APPLICANT_DOCUMENT_INFO,
  APPLICANT_EDUCATION_INFO,
  APPLICANT_EXPERIENCE_INFO,
} from '@/widgets/Application/constants'
import {
  AddApplicantInfoList,
  ApplicationForm,
  ApplicationOptionList,
  BuildApplicationHeader,
} from '@/widgets/Application/ui'
import { FormProvider, useFieldArray, UseFormReturn } from 'react-hook-form'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { APPLICATION_VIEWER_NAMES } from '@/entities/application-viewer/constants'
import deepCopy from 'fast-deep-equal'
import { Template } from '@/interface/template'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import {
  RecruitApplicationItem,
  RecruitMultipleItem,
} from '@/entities/build-application/types/applicationItem'
import { BuildApplicationForm } from '@/entities/build-application/types/buildApplicationForm'
import { PostingApplicantForm } from '@/features/build-application/types'

interface SubmitForm {
  form: PostingApplicantForm[]
  isValid?: boolean
  templateTitle?: string
}

interface BuildApplicationFieldProps {
  initialCustomApplicantItems?: PostingApplicationFormResponse
  initialApplicantItems: RecruitApplicationItem[]
  initialAgreeItem: string
  methods: UseFormReturn<BuildApplicationForm>
  onSubmit: (form: SubmitForm) => void
  title?: string
  isTemplate?: boolean
  templates?: Template[]
}

export const BuildApplicationField = ({
  initialCustomApplicantItems,
  initialApplicantItems,
  initialAgreeItem,
  templates,
  methods,
  onSubmit,
  title,
  isTemplate,
}: BuildApplicationFieldProps) => {
  const setSelectedBasicItem = useSetRecoilState(SelectedApplicantBasicItemAtom)
  const [selectedItem, setSelectedItem] = useRecoilState(SelectedApplicantItemAtom)
  const [selectedDocumentIndex, setSelectedDocumentIndex] =
    useRecoilState(SelectedDocumentIndexAtom)
  const resetSelectedApplicantBasicItem = useResetRecoilState(SelectedApplicantBasicItemAtom)

  const originalApplicantItems = [...initialApplicantItems]
  const originalTermsData = initialAgreeItem

  const { getValues, setValue, handleSubmit, control, watch } = methods

  const termsData = isTemplate ? getValues('terms') : getValues('terms.description')
  const isApplicantItemsChanged = !deepCopy(
    getApplicationItemsWithOutId(initialApplicantItems),
    getApplicationItemsWithOutId(getValues('applicant_list')),
  )
  const isTermsChanged = !deepCopy(initialAgreeItem, termsData)
  const isTemplateTitleChanged = isTemplate
    ? !deepCopy(initialCustomApplicantItems?.template_title, getValues('template_title'))
    : false
  const isChanged = isApplicantItemsChanged || isTermsChanged || isTemplateTitleChanged

  const { fields: basicItems } = useFieldArray<BuildApplicationForm, 'basic_list', 'id'>({
    control: control,
    name: 'basic_list',
  })

  const {
    fields: applicantItems,
    append,
    remove,
    move,
    update,
  } = useFieldArray<BuildApplicationForm, 'applicant_list', 'id'>({
    control,
    name: 'applicant_list',
  })

  const onAddItem = (key: string) => {
    const entireComponent = [
      ...APPLICANT_BASIC_INFO,
      ...APPLICANT_EDUCATION_INFO,
      ...APPLICANT_EXPERIENCE_INFO,
      ...APPLICANT_DOCUMENT_INFO,
    ]
    const addTargetComponent: any = entireComponent.find((component) => component.key === key)
    const addComponent = ADD_APPLICANT_COMPONENTS[key]

    setSelectedBasicItem({ key: '', index: -1 })

    if (key === 'documents') {
      return addDocumentItemToList(watch, append, update, key, 'documents', 4)
    }
    if (key === 'pre_questions') {
      return addDocumentItemToList(watch, append, update, key, 'questions', 5)
    }

    append({
      ...addTargetComponent,
      Component: addComponent,
    })
  }

  const handleUpdate = (key: string, isValue: boolean) => {
    if (key.includes('documents') || key.includes('questions')) {
      const item: RecruitApplicationItem = applicantItems[selectedItem.index]
      const listName = key.includes('documents') ? 'documents' : 'questions'
      const updateKey = key.replace(`${listName}.`, '')
      const newList = mapAndUpdateDocumentList({
        list: item[listName] || [],
        value: isValue,
        updateKey: updateKey,
        selectedDocumentIndex,
      })
      return update(selectedItem.index, {
        ...item,
        [listName]: newList,
      })
    }

    update(selectedItem.index, {
      ...applicantItems[selectedItem.index],
      [key]: isValue,
    })
  }

  const handleInputChange = (key: string, value: string) => {
    if (key === 'terms.description') {
      return setValue('terms.description', value)
    }
    if (key === 'template_title') {
      return setValue('template_title', value)
    }

    if (key.includes('document_title') || key.includes('question_title')) {
      const listName = key.includes('document') ? 'documents' : 'questions'
      const item: RecruitApplicationItem = applicantItems[selectedItem.index]
      const newList = mapAndUpdateDocumentList({
        list: item[listName] || [],
        value,
        updateKey: 'title',
        selectedDocumentIndex,
      })
      return update(selectedItem.index, {
        ...item,
        [listName]: newList,
      })
    }

    if (key.includes('document_note') || key.includes('question_note')) {
      const listName = key.includes('document') ? 'documents' : 'questions'
      const item: RecruitApplicationItem = applicantItems[selectedItem.index]
      const newList = mapAndUpdateDocumentList({
        list: item[listName] || [],
        value,
        updateKey: 'note',
        selectedDocumentIndex,
      })
      return update(selectedItem.index, {
        ...item,
        [listName]: newList,
      })
    }

    update(selectedItem.index, {
      ...applicantItems[selectedItem.index],
      [key]: value,
    })
  }

  const updateItem = (
    index: number,
    toIndex: number,
    type: 'documents' | 'questions',
    swapFunction: Function,
  ) => {
    const item: RecruitApplicationItem = applicantItems[selectedItem.index]
    const array = item[type]
    const updatedArray = swapFunction(array, index)
    const newItem = {
      ...item,
      [type]: updatedArray,
    }

    setSelectedDocumentIndex(toIndex)
    update(selectedItem.index, newItem)
  }

  const deleteItem = (index: number, type: 'documents' | 'questions') => {
    const item: RecruitApplicationItem = applicantItems[selectedItem.index]
    const array = item[type] || ([] as RecruitMultipleItem[])
    const itemsIndex = applicantItems.findIndex((applicant: any) => applicant.key === item.key)
    const nextItem = applicantItems[itemsIndex - 1] as any

    if (array.length < 2) {
      if (itemsIndex < 1) {
        setSelectedBasicItem({ key: 'email', index: 2 })
        setSelectedItem({ key: '', index: -1 })
        remove(selectedItem.index)
        return
      }
      setSelectedItem({ key: nextItem.key, index: itemsIndex - 1 })
      remove(selectedItem.index)
      return
    }
    if (index) {
      setSelectedDocumentIndex(index - 1)
    }
    const filterArray = array.filter((_, i) => i !== index)
    update(selectedItem.index, {
      ...item,
      [type]: filterArray,
    })
  }

  const setSelectItem = (index: number) => {
    if (index < 1) {
      setSelectedBasicItem({ key: 'email', index: 2 })
      setSelectedItem({ key: '', index: -1 })
      return
    }
    const nextSelectedItem = applicantItems[index - 1] as any
    const nextSelectedItemKey = nextSelectedItem.key

    setSelectedItem({ key: nextSelectedItemKey, index: index - 1 })
    if (nextSelectedItemKey === 'documents' || nextSelectedItemKey === 'questions') {
      setSelectedDocumentIndex(0)
    }
  }

  const onMoveUp = (index: number, type?: 'documents' | 'questions') => {
    const toIndex = index - 1

    if (type) {
      return updateItem(index, toIndex, type, swapMoveUp)
    }
    setSelectedItem({
      ...selectedItem,
      index: toIndex,
    })
    return move(index, toIndex)
  }

  const onMoveDown = (index: number, type?: 'documents' | 'questions') => {
    const toIndex = index + 1

    if (type) {
      return updateItem(index, toIndex, type, swapMoveDown)
    }
    setSelectedItem({
      ...selectedItem,
      index: toIndex,
    })
    return move(index, toIndex)
  }

  const onDelete = (index: number, type?: 'documents' | 'questions') => {
    if (type) {
      return deleteItem(index, type)
    }
    remove(index)
    setSelectItem(index)
  }

  const handleValidCheck = (applicants: any) => {
    const documents = applicants.find((applicant: any) => applicant.documents)?.documents || []
    const questions = applicants.find((applicant: any) => applicant.questions)?.questions || []

    const isDocumentsValid =
      documents.length > 0 ? documents?.every((document: any) => document.title) : true
    const isQuestionsValid =
      questions.length > 0 ? questions?.every((question: any) => question.title) : true

    const notes = [...applicants, ...documents, ...questions]?.filter(
      (applicant: any) =>
        (applicant.is_note && applicant.note === undefined) ||
        (applicant.is_note && applicant.note === null) ||
        (applicant.is_note && applicant.note === ''),
    )
    const isNoteValid = notes.length < 1

    const isTermsValid = watch('terms.description')

    if (!isDocumentsValid) {
      return Toast.warning('추가서류 항목의 항목 명에 빈 값이 존재합니다.')
    }

    if (!isQuestionsValid) {
      return Toast.warning('사전질문 항목의 질문 내용에 빈 값이 존재합니다.')
    }

    if (!isTermsValid) {
      return Toast.warning('필수약관 내용에 빈 값이 존재합니다.')
    }

    if (!isNoteValid) {
      const names = notes.map((item: any) => {
        return item.title || APPLICATION_VIEWER_NAMES[item.key]
      })
      names.map((name: string) => {
        return Toast.warning(`${name} 유의사항을 입력해주세요.`)
      })
      return
    }

    if (isTemplate && !watch('template_title')) {
      return Toast.warning('템플릿 제목을 입력해주세요.')
    }

    return !!(isDocumentsValid && isQuestionsValid && isTermsValid)
  }

  const handleFormSubmit = () => {
    const templateTitle = watch('template_title')

    const applicants: any[] = getValues('applicant_list').map((item: RecruitApplicationItem) => {
      if (item.key.includes('documents')) {
        return {
          key: item.key,
          documents:
            item?.documents?.map((document: RecruitMultipleItem) => {
              return {
                title: document.title,
                is_canview: document.is_canview,
                is_note: document.is_note,
                note: document.note,
                is_question: document.is_question,
                is_required: document.is_required,
              }
            }) || [],
        }
      }
      if (item.key.includes('questions')) {
        return {
          key: item.key,
          questions:
            item?.questions?.map((question: RecruitMultipleItem) => {
              return {
                title: question.title,
                is_canview: question.is_canview,
                is_note: question.is_note,
                note: question.note,
                is_question: question.is_question,
                is_required: question.is_required,
              }
            }) || [],
        }
      }
      return {
        key: item.key,
        is_canview: item.is_canview,
        is_required: item.is_required,
        is_note: item.is_note,
        note: item.note,
      }
    })
    applicants.push(watch('terms'))

    if (!handleValidCheck(applicants)) return false
    resetSelectedApplicantBasicItem()
    setSelectedItem({ key: '', index: 0 })
    setSelectedDocumentIndex(null)

    if (isTemplate) {
      return onSubmit({
        form: applicants,
        templateTitle,
      })
    }
    return onSubmit({
      form: applicants,
      isValid: isChanged,
    })
  }

  return (
    <FormProvider {...methods}>
      <Styles.Wrapper onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <BuildApplicationHeader
          title={title}
          postingTitle={initialCustomApplicantItems?.posting?.title || ''}
          enterpriseName={initialCustomApplicantItems?.enterprise_name || ''}
          originalApplicantItems={originalApplicantItems}
          originalTermsData={originalTermsData}
          isChanged={isChanged}
          isTemplate={isTemplate}
        />
        <Styles.Body>
          <AddApplicantInfoList applicantItems={applicantItems} onAddItem={onAddItem} />
          <ApplicationForm
            postingTitle={initialCustomApplicantItems?.posting?.title}
            basicItems={basicItems}
            applicantItems={applicantItems}
            templates={templates}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
            onDelete={onDelete}
            onContentChange={handleInputChange}
            isTemplate={isTemplate}
          />
          <ApplicationOptionList onUpdate={handleUpdate} onChange={handleInputChange} />
        </Styles.Body>
      </Styles.Wrapper>
    </FormProvider>
  )
}
