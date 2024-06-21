import React from 'react'
import * as Styles from './styles'
import WriteMailForm from '@/modals/WriteMailModal/components/WriteMailForm'
import WriteMailPreview from '@/modals/WriteMailModal/components/WriteMailPreview'
import { useFormContext } from 'react-hook-form'
import useMailComponent from '@/modals/WriteMailModal/hooks/useMailComponent'

interface WriteMailContentProps {
  readonly postingId?: string
}

const WriteMailContent = ({ postingId }: WriteMailContentProps) => {
  const { watch } = useFormContext()
  const { data } = useMailComponent(postingId || watch('posting')?.value)

  return (
    <Styles.Wrapper>
      <WriteMailForm postingId={postingId} mailData={data} />
      <WriteMailPreview enterprise={data?.enterprise} posting={data?.posting} />
    </Styles.Wrapper>
  )
}

export default WriteMailContent
