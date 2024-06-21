import React from 'react'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import useRequestDocuments from '@/modals/RequestDocumentModal/hooks/useRequestDocuments'
import PreviewDocument from '@/modals/WriteMailModal/components/PreviewDocument'
import PreviewEnterpriseInfo from '@/modals/WriteMailModal/components/PreviewEnterpriseInfo'
import { Enterprise, Posting } from '@/interface/mail'
import { useTranslations } from 'next-intl'

interface WriteMailPreviewProps {
  enterprise?: Enterprise
  posting?: Posting
}

const WriteMailPreview = ({ enterprise, posting }: WriteMailPreviewProps) => {
  const { watch } = useFormContext()
  const { documents } = useRequestDocuments()
  const $t = useTranslations('mail')

  return (
    <Styles.Wrapper>
      <Styles.Title>
        {watch('title') && <div dangerouslySetInnerHTML={{ __html: watch('title') }}></div>}
      </Styles.Title>
      <Styles.Option>
        <Styles.OptionItem>
          {watch('mail_to') && <Styles.OptionTitle>{$t('recipient')}</Styles.OptionTitle>}
          <Styles.OptionContent>
            {watch('mail_to')
              ?.map((item: any) => `${item.label}`)
              .join(', ')}
          </Styles.OptionContent>
        </Styles.OptionItem>
        <Styles.OptionItem>
          {watch('cc') && <Styles.OptionTitle>{$t('cc')}</Styles.OptionTitle>}
          <Styles.OptionContent>
            {watch('cc')
              ?.map((item: any) => `${item.label} <${item.value}>`)
              .join(', ')}
          </Styles.OptionContent>
        </Styles.OptionItem>
        <Styles.OptionItem>
          {watch('bcc') && <Styles.OptionTitle>{$t('bcc')}</Styles.OptionTitle>}
          <Styles.OptionContent>
            {watch('bcc')
              ?.map((item: any) => `${item.label} <${item.value}>`)
              .join(', ')}
          </Styles.OptionContent>
        </Styles.OptionItem>
        <Styles.Content>
          {watch('content') && <div dangerouslySetInnerHTML={{ __html: watch('content') }}></div>}
          <PreviewDocument documents={documents} />
          <PreviewEnterpriseInfo
            enterpriseLogo={enterprise?.enterprise_logo}
            enterpriseName={enterprise?.enterprise_name}
            postingPosition={posting?.posting_position}
            postingTitle={posting?.posting_title}
          />
        </Styles.Content>
      </Styles.Option>
    </Styles.Wrapper>
  )
}

export default WriteMailPreview
