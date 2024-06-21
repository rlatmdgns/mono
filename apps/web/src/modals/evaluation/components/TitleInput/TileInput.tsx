import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface TitleInputProps {
  isOms?: boolean
}

const TitleInput = ({ isOms }: TitleInputProps) => {
  const { register } = useFormContext()
  const $t = useTranslations('evaluation')

  if (isOms) return null

  return (
    <Styles.Wrapper>
      <Styles.Input
        {...register('table_title')}
        placeholder={$t('evaluation_table_title_placeholder')}
        autoComplete="off"
        maxLength={20}
      />
    </Styles.Wrapper>
  )
}

export default TitleInput
