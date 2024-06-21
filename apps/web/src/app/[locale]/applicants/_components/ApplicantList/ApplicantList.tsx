'use client'

import ApplicantItem from '@/app/[locale]/applicants/_components/ApplicantItem'
import useApplicantPool from '@/app/[locale]/applicants/_hooks/useApplicantPool'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { ApplicantPoolResponse } from '@/interface/applicantPool'
import React, { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'

interface ApplicantListProps {
  initialApplicantPool: ApplicantPoolResponse
}

const ApplicantList = ({ initialApplicantPool }: ApplicantListProps) => {
  const filter = useRecoilValue(applicantFilterAtom)
  const { ref, inView } = useInView()
  const { data, hasNextPage, fetchNextPage, refetch } = useApplicantPool(
    initialApplicantPool,
    filter,
  )

  const fetchMore = () => {
    if (!inView) {
      return
    }
    void fetchNextPage()
  }

  useEffect(() => {
    fetchMore()
  }, [inView, hasNextPage])

  useEffect(() => {
    refetch()
  }, [filter])

  const applicants = useMemo(
    () => (data ? data.pages.flatMap(({ applicants }) => applicants.data) : []),
    [data],
  )
  if (!data) {
    return null
  }
  return (
    <Styles.Wrapper>
      {applicants?.map((applicant) => (
        <ApplicantItem key={applicant.applicant_id} applicant={applicant} />
      ))}
      <Styles.Target ref={ref}></Styles.Target>
    </Styles.Wrapper>
  )
}

export default ApplicantList
