import { MODAL } from '@/shared/constants'
import { TextInput, Toast } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import * as Styles from './styles'
import React, { useEffect } from 'react'
import useAddMemo from '@/features/Memo/hooks/useAddMemo'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'
import { IsMemoEditorActiveAtom, MemoAtom } from '@/features/Memo/recoil/atom'
import useUpdateMemo from '@/features/Memo/hooks/useUpdateMemo'
import { Controller, useForm } from 'react-hook-form'
import { MemoEditor } from '@/features/Editor'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@repo/ui'

const CreateMemo = () => {
  const { openModal, closeModal } = useModal()
  const applicantId = useRecoilValue(applicantIdAtom)
  const item = useRecoilValue(MemoAtom)
  const resetMemo = useResetRecoilState(MemoAtom)
  const [isMemoEditorActive, setIsMemoEditorActive] = useRecoilState(IsMemoEditorActiveAtom)
  const { addMemoMutate } = useAddMemo(applicantId)
  const { updateMemoMutate } = useUpdateMemo(applicantId, String(item.applicant_memo_id))
  const { reset, control, getValues, setValue } = useForm({
    defaultValues: {
      applicant_memo_title: '',
      applicant_memo_description: '',
      prev_applicant_memo_title: '',
      prev_applicant_memo_description: '',
    },
  })

  const currentLocale = useLocale()
  const $t = useTranslations()

  const handleBack = () => {
    if (verifiedCheck()) return handleBackConfirm()
    resetMemo()
    setIsMemoEditorActive(!isMemoEditorActive)
  }

  const verifiedCheck = () => {
    const {
      applicant_memo_title,
      applicant_memo_description,
      prev_applicant_memo_title,
      prev_applicant_memo_description,
    } = getValues()

    const trimApplicantMemoDesc = applicant_memo_description
      ?.replaceAll('>', '>')
      ?.replaceAll(' <', '<')
    const trimPrevApplicantMemoDesc = prev_applicant_memo_description
      ?.replaceAll('>', '>')
      ?.replaceAll(' <', '<')

    if (applicant_memo_title !== prev_applicant_memo_title) {
      return true
    }

    if (trimApplicantMemoDesc !== trimPrevApplicantMemoDesc) {
      return true
    }
  }

  const getBackConfirmTitle = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          Unsaved memos will be deleted.
          <br />
          Do you want to go back?
        </>
      )
    }
    return (
      <>
        저장하지 않은 메모는 삭제됩니다.
        <br />
        뒤로 가시겠습니까?
      </>
    )
  }

  const handleBackConfirm = () => {
    openModal(MODAL.CONFIRM, {
      state: 'negative',
      title: getBackConfirmTitle(),
      iconSource: 'icon/warning-solid',
      onClick: () => {
        reset()
        resetMemo()
        setIsMemoEditorActive(false)
        closeModal(MODAL.CONFIRM)
      },
      onClose: () => closeModal(MODAL.CONFIRM),
      textConfirm: $t('common.go_back'),
    })
  }

  const handleMemoSave = () => {
    const postData = {
      applicant_memo_title: getValues('applicant_memo_title'),
      applicant_memo_description: getValues('applicant_memo_description'),
    }
    if (!item.user_name) {
      // 신규 저장
      addMemoMutate(postData)
    }

    if (item.user_name) {
      // 수정
      updateMemoMutate(postData)
    }
  }

  useEffect(() => {
    setValue('applicant_memo_title', item.applicant_memo_title)
    setValue('prev_applicant_memo_title', item.applicant_memo_title)
    setValue('applicant_memo_description', item.applicant_memo_description)
    setValue('prev_applicant_memo_description', item.applicant_memo_description)
  }, [item.user_name])

  if (!isMemoEditorActive) return

  if (item.applicant_memo_title === '평가 데이터 이관') return

  if (item.user_name && !item.is_access) {
    return
  }

  return (
    <Styles.Wrapper>
      <Styles.Buttons>
        <Button
          text={$t('common.back')}
          state="secondary"
          style="mono"
          size="md"
          width="70px"
          leadingIcon="icon/left-line"
          onClick={() => handleBack()}
        />
        <Button text={$t('common.save')} style="mono" size="md" onClick={handleMemoSave} />
      </Styles.Buttons>
      <Styles.Container>
        <Styles.Title>
          <Controller
            name="applicant_memo_title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder={$t('memo.title_placeholder')}
                value={value}
                onChange={(event) => {
                  const { value } = event.target
                  if (value.length >= 40) {
                    Toast.error($t('messages.memo_title_input_length'))
                    return
                  }
                  onChange(value)
                }}
                maxLength={40}
              />
            )}
          />
        </Styles.Title>
        <Controller
          name="applicant_memo_description"
          control={control}
          render={({ field: { onChange } }) => (
            <MemoEditor
              value={getValues('applicant_memo_description')}
              onChange={onChange}
              placeholder={$t('memo.description_placeholder')}
            />
          )}
        />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default CreateMemo
