import { Button } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import { IsMemoEditorActiveAtom, MemosAtom } from '@/features/Memo/recoil/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'

const MemoEmpty = () => {
  const $t = useTranslations('memo')
  const memos = useRecoilValue(MemosAtom)
  const [isMemoEditorActive, setIsMemoEditorActive] = useRecoilState(IsMemoEditorActiveAtom)

  const handleSetIsMemoEditorActive = () => {
    setIsMemoEditorActive(true)
  }

  if (!isMemoEditorActive && memos.length === 0) {
    return (
      <Styles.Wrapper>
        <Styles.Container>
          <Icon icon="icon/memo-solid" color="neutralGray300" size={40} />
          <Styles.TextBox>
            <Styles.Title>{$t('empty_memo_title')}</Styles.Title>
            <Styles.Desc>{$t('empty_memo_description')}</Styles.Desc>
          </Styles.TextBox>
          <Button
            text={$t('register_memo_action')}
            style="mono"
            size="sm"
            width="120px"
            iconSource="icon/add-solid"
            onClick={handleSetIsMemoEditorActive}
          />
        </Styles.Container>
      </Styles.Wrapper>
    )
  }
}

export default MemoEmpty
