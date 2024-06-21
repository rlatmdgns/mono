import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FormCreateLabelProps {
  searchValue: string
  onCreate: (value: string) => void
}

export const FormCreateLabel = ({ searchValue, onCreate }: FormCreateLabelProps) => {
  const $t = useTranslations('common')
  const handleSelect = () => {
    if (!onCreate) return
    onCreate(searchValue)
  }

  return (
    <Styles.FormatOptionLabel>
      <Styles.FormatOptionLabelText>{$t('no_search_results')}</Styles.FormatOptionLabelText>
      {searchValue && (
        <Button
          size="xs"
          state="standard"
          style="fill-weak"
          width="fit-content"
          text={`"${searchValue}" ${$t('optional')}`}
          onClick={handleSelect}
        />
      )}
    </Styles.FormatOptionLabel>
  )
}
