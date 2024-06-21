import MailDeleteButton from '@/app/[locale]/mail/_components/MailDeleteButton'
import MailHardDeleteButton from '@/app/[locale]/mail/_components/MailHardDeleteButton'
import MailTitle from '@/app/[locale]/mail/_components/MailTitle'
import React from 'react'
import * as Styles from './styles'
import { MailType } from '@/interface/mail'
import { SearchInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface MailHeaderProps {
  title: string
  type: MailType
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const MailHeader = ({ title, type, onSubmit }: MailHeaderProps) => {
  const $t = useTranslations('mail')
  return (
    <>
      <MailTitle title={title} />

      <Styles.TopBox>
        <form onSubmit={onSubmit}>
          <SearchInput maxWidth="268px" placeholder={$t('search_placement')} />
        </form>
        {type === 'trash' ? <MailHardDeleteButton /> : <MailDeleteButton />}
      </Styles.TopBox>
    </>
  )
}

export default MailHeader
