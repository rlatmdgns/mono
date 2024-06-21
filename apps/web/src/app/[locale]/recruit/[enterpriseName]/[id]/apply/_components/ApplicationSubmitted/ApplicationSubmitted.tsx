import * as Styles from './styles'
import { Icon } from '@repo/ui'
import React from 'react'
import { useTranslations } from 'next-intl'
import dayjs from 'dayjs'
import { convertDateFormat } from '@/shared/lib'

interface ApplicationSubmittedProps {
  name: string
  email: string
  phone: string
  postingTitle: string
  enterpriseName: string
}

const ApplicationSubmitted = ({
  name,
  email,
  phone,
  postingTitle,
  enterpriseName,
}: ApplicationSubmittedProps) => {
  const $t = useTranslations()

  const fields = [
    [$t('common.enterprise_name'), enterpriseName],
    [$t('common.announcement_name'), postingTitle],
    [$t('common.name'), name],
    [$t('common.phone'), phone],
    [$t('common.email'), email],
    [$t('common.reception_date'), convertDateFormat(dayjs().toDate())],
  ]

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Info>
          <Styles.Icon>
            <Icon icon="icon/check-line1" color="blue500" size={36} />
          </Styles.Icon>
          <Styles.TitleAndDesc>
            <Styles.Title>{$t('messages.applicant_reception_success', { name })}</Styles.Title>
            <Styles.Desc>{$t('messages.applicant_reception_result_description')}</Styles.Desc>
          </Styles.TitleAndDesc>
        </Styles.Info>
        <Styles.Contents>
          {fields.map(([label, value]) => (
            <Styles.FieldList key={label}>
              <Styles.Field>{label}</Styles.Field>
              <Styles.Value>{value}</Styles.Value>
            </Styles.FieldList>
          ))}
        </Styles.Contents>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default ApplicationSubmitted
