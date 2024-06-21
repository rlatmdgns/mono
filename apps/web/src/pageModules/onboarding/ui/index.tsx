'use client'

import { wrapper } from './styles.css'
import { FreshMenResponse } from '@/entities/onboarding/types/freshman'
import { OnBoardingHeader } from '@/features/onboarding/ui/OnBoardingHeader'
import { OnBoardingFreshManTable } from '@/features/onboarding/ui/OnBoardingFreshManTable'
import { useInView } from 'react-intersection-observer'
import { useGetFreshMen } from '@/entities/onboarding/hooks/useGetFreshMen'
import { useEffect, useMemo } from 'react'
import { FinalStageApplicantResponse } from '@/entities/onboarding/types'

interface OnBoardingPageProps {
  initialData: FreshMenResponse
  initialFinalStageApplicant: FinalStageApplicantResponse
}

export const OnBoardingPage = ({
  initialData,
  initialFinalStageApplicant,
}: OnBoardingPageProps) => {
  const { ref, inView } = useInView()
  const { data, hasNextPage, fetchNextPage } = useGetFreshMen(initialData)

  const freshMen = useMemo(() => {
    if (!data) return []
    return data.pages.flatMap((page) => page.freshman)
  }, [data])

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

  if (!data) return null
  return (
    <div className={wrapper}>
      <OnBoardingHeader
        onBoardingFreshmanLength={freshMen.length}
        initialFinalStageApplicant={initialFinalStageApplicant}
      />
      <OnBoardingFreshManTable initialData={freshMen} />
      <div ref={ref} />
    </div>
  )
}
