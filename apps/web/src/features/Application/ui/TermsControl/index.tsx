import { SelectedApplicantPersonItemAtom } from '@/pageModules/build-application/recoil'
import { Button, Textarea } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { TERMS_MAX_LENGTH } from '../../constants'
import * as Styles from './styles'
import { useAuthority } from '@/shared/hooks'
import { getDefaultTerms } from '@/features/Application/lib'

interface TermsControlProps {
  onInputChange: (key: string, value: string) => void
}

export const TermsControl = ({ onInputChange }: TermsControlProps) => {
  const { enterprise } = useAuthority()
  const { watch } = useFormContext()

  const selectedPersonalItem = useRecoilValue(SelectedApplicantPersonItemAtom)

  const count = watch(`terms.description`)?.length

  const handleTermsChange = (value: string) => {
    onInputChange('terms.description', value)
  }

  const handleTextRemove = () => {
    onInputChange('terms.description', getDefaultTerms(enterprise.enterprise_name))
  }

  if (!selectedPersonalItem.key) return null

  return (
    <Styles.Option>
      <Styles.Contetns>
        <Styles.Name>
          약관 내용 <Styles.Mark>*</Styles.Mark>
        </Styles.Name>
        <Textarea
          value={watch('terms.description')}
          onChange={(event) => handleTermsChange(event.target.value)}
          placeholder="약관 내용을 입력해주세요."
          maxLength={TERMS_MAX_LENGTH}
        />
        <Styles.BottomWrap>
          <Button
            text="기본값"
            state="standard"
            style="fill-weak"
            size="xs"
            width="45px"
            onClick={handleTextRemove}
          />
          <Styles.TextWrap>
            <Styles.Count>{count}</Styles.Count>
            <Styles.Text>/2000자</Styles.Text>
          </Styles.TextWrap>
        </Styles.BottomWrap>
      </Styles.Contetns>
    </Styles.Option>
  )
}
