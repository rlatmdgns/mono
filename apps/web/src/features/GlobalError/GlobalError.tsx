'use client'

import { Button } from '@/shared/ui'
import { Icon } from '@repo/ui'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

interface GlobalErrorProps {
  message?: string
}

const GlobalError = ({ message }: GlobalErrorProps) => {
  const $t = useTranslations()
  const currentLocale = useLocale()
  const router = useRouter()
  const getErrorMessage = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          <Styles.Title>An issue has occurred.</Styles.Title>
          <Styles.Description>
            This is a temporary issue, and normal access may be restored after a while.
            <br />
            If the problem persists, please contact the{' '}
            <Link href="https://steadhr.channel.io/home" target="_blank" prefetch={false}>
              customer service
            </Link>
            .
          </Styles.Description>
        </>
      )
    }
    return (
      <>
        <Styles.Title>문제가 발생했습니다.</Styles.Title>
        <Styles.Description>
          일시적인 현상으로, 잠시 후 다시 이용해 보시면 정상 접속될 수 있습니다.
          <br />
          문제가 계속되는 경우{' '}
          <Link href="https://steadhr.channel.io/home" target="_blank" prefetch={false}>
            고객센터
          </Link>
          로 연락 부탁 드립니다.
        </Styles.Description>
      </>
    )
  }

  if (message) {
    return (
      <Styles.Wrapper>
        <Icon icon="icon/warning-solid" color="orange500" size={64} />
        <Styles.ErrorContent as="div">
          <Styles.ErrorTitle as="p">{message}</Styles.ErrorTitle>
        </Styles.ErrorContent>
      </Styles.Wrapper>
    )
  }

  if (!message) {
    return (
      <Styles.Wrapper>
        <Icon icon="icon/warning-solid" color="orange500" size={64} />
        <Styles.Content>
          <Styles.Title>문제가 발생했습니다.</Styles.Title>
          <Styles.Description>
            일시적인 현상으로, 잠시 후 다시 이용해 보시면 정상 접속될 수 있습니다.
            <br />
            문제가 계속되는 경우{' '}
            <Link href="https://steadhr.channel.io/home" target="_blank" prefetch={false}>
              고객센터
            </Link>
            로 연락 부탁 드립니다.
          </Styles.Description>
        </Styles.Content>
        <Button
          size="md"
          width="184px"
          text={$t('common.prev_page')}
          state="standard"
          onClick={() => router.back()}
        />
      </Styles.Wrapper>
    )
  }
}

export default GlobalError
