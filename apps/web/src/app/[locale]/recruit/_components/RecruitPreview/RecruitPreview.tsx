'use client'
import RecruitContents from '@/app/[locale]/recruit/_components/RecruitContents'
import RecruitLayout from '@/app/[locale]/recruit/_components/RecruitLayout/RecruitLayout'
import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'

const RecruitPreview = () => {
  const $t = useTranslations('announcement_detail')
  const [mounted, setMounted] = React.useState(false)

  const recruit =
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('preview') as string) : null

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (!recruit) {
    return null
  }
  return (
    <RecruitLayout>
      <RecruitContents
        recruit={recruit}
        id={'preview'}
        enterpriseName={$t('announcement.preview')}
      />
    </RecruitLayout>
  )
}

export default RecruitPreview
