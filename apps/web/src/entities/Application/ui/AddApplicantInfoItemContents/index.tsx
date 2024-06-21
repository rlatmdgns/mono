'use client'

import { ApplicantInfo } from 'features/build-application/types'
import { IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useLocale } from 'next-intl'
import * as Styles from './styles'

interface AddApplicantInfoItemContentsProps {
  item: ApplicantInfo
}

export const AddApplicantInfoItemContents = ({ item }: AddApplicantInfoItemContentsProps) => {
  const currentLocale = useLocale()

  return (
    <>
      <Styles.Contents>
        <Styles.Icon>
          <Icon icon={item.icon} />
        </Styles.Icon>
        <Styles.Info>
          <Styles.Type>{item[currentLocale]}</Styles.Type>
          <Styles.Desc>
            {item.desc ? item.desc : `지원자의 ${item[currentLocale]} 항목 추가`}
          </Styles.Desc>
        </Styles.Info>
      </Styles.Contents>
      <IconButton icon="icon/plus-line" size="xs" />
    </>
  )
}
