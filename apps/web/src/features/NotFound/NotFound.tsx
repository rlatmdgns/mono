'use client'

import React from 'react'
import * as Styles from './styles'
import { IMAGES } from '@/shared/constants'
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import DOMPurify from 'dompurify'

const NotFound = () => {
  const router = useRouter()
  const $t = useTranslations()
  return (
    <Styles.Wrapper>
      <Image src={IMAGES.NOT_FOUND} alt={'404'} width={174} height={66} />
      <Styles.Content>
        <Styles.Title>{$t('not_found.title')}</Styles.Title>
        <Styles.Description
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize($t('not_found.description')),
          }}
        ></Styles.Description>
      </Styles.Content>
      <Button
        size="md"
        width="184px"
        text={$t('prev_page')}
        state="standard"
        onClick={() => router.back()}
      />
    </Styles.Wrapper>
  )
}

export default NotFound
