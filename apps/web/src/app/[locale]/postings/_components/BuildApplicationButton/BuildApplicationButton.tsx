'use client'

import * as Styles from './styles'
import { LinkButton } from '@/shared/ui'
import Image from 'next/image'
import { IMAGES, PAGE } from '@/shared/constants'
import { useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

const BuildApplicationButton = () => {
  const $t = useTranslations()
  const params = useParams()
  const id = params.id as string
  const currentLocale = useLocale()
  const getDescription = () => {
    if (currentLocale !== 'ko') {
      return (
        <Styles.Description>
          Editing and creating application form when applicants apply to the company.
        </Styles.Description>
      )
    }
    return (
      <Styles.Description>
        지원자가 해당 회사에 지원 시 <br />
        지원서 양식을 편집 및 제작하는 작업.
      </Styles.Description>
    )
  }
  return (
    <Styles.Wrapper>
      <Styles.Title>{$t('build_application.title')}</Styles.Title>
      <Styles.SubTitle>{$t('build_application.sub_title')}</Styles.SubTitle>
      <Styles.Content>
        <Image src={IMAGES.BUILD_APPLICATION} width={280} height={162} alt="" />
        <Styles.Text>{$t('build_application.content_title')}</Styles.Text>
        {getDescription()}
        <LinkButton href={PAGE.BUILD_APPLICATION(id)} text={$t('common.create')} />
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default BuildApplicationButton
