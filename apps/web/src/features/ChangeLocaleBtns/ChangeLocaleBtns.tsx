// widgets/ChangeLocaleBtns

'use client'
import { Button, Dropdown } from '@/shared/ui'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/navigations'

export const ChangeLocaleBtns = () => {
  const currentLocale = useLocale()
  const pathname = usePathname() as string
  const router = useRouter()
  const $t = useTranslations('setting.language')

  const convertCurrentLocaleText = (locale: string) => {
    return locale === 'ko' ? $t('korean') : $t('english')
  }

  const onChangeLocale = (changeLocale: 'ko' | 'en') => {
    router.replace(pathname, {locale: changeLocale})
  }

  return (
    <Styles.ChangeLocaleWrapper>
      <Styles.Title>{$t('title')}</Styles.Title>
      <Styles.LocaleBtnsWrapper>
        <Dropdown
          button={
            <Button
              text={convertCurrentLocaleText(currentLocale)}
              state="standard"
              style="line"
              isIconOnLeft={false}
              iconSource={'icon/down-solid'}
            />
          }
        >
          <Styles.ButtonWrapper>
            <Button
              text={$t('korean')}
              onClick={() => onChangeLocale('ko')}
              state="standard"
              style="mono"
            />
          </Styles.ButtonWrapper>
          <Styles.ButtonWrapper>
            <Button
              text={$t('english')}
              onClick={() => onChangeLocale('en')}
              state="standard"
              style="mono"
            />
          </Styles.ButtonWrapper>
        </Dropdown>
      </Styles.LocaleBtnsWrapper>
    </Styles.ChangeLocaleWrapper>
  )
}
