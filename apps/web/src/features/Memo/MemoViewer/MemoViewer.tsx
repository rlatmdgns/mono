import { Button } from '@/shared/ui'
import * as Styles from './styles'
import DOMPurify from 'dompurify'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { IsMemoEditorActiveAtom, MemoAtom } from '@/features/Memo/recoil/atom'
import { useTranslations } from 'next-intl'

const MemoViewer = () => {
  const item = useRecoilValue(MemoAtom)
  const resetMemo = useResetRecoilState(MemoAtom)
  const isMemoEditorActive = useRecoilValue(IsMemoEditorActiveAtom)
  const resetIsMemoEditorActive = useResetRecoilState(IsMemoEditorActiveAtom)
  const { applicant_memo_title, applicant_memo_description } = item
  const $t = useTranslations()

  const handleButtonClick = () => {
    resetMemo()
    resetIsMemoEditorActive()
  }

  if (
    !(isMemoEditorActive && item.is_access) &&
    (item.user_name || item.applicant_memo_title === '평가 데이터 이관')
  ) {
    return (
      <Styles.Wrapper>
        <Styles.Buttons>
          <Button
            text={$t('common.go_back')}
            state="standard"
            style="fill-weak"
            size="xs"
            width="fit-content"
            iconSource="icon/left-line"
            onClick={handleButtonClick}
          />
        </Styles.Buttons>
        <Styles.Content>
          <Styles.Title>{applicant_memo_title}</Styles.Title>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(applicant_memo_description),
            }}
          />
        </Styles.Content>
      </Styles.Wrapper>
    )
  }
}

export default MemoViewer
