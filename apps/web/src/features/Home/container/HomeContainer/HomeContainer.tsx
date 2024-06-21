import PostingList from '@/features/Home/components/PostingList'
import React from 'react'
import * as Styles from '@/features/Home/container/HomeContainer/styles'
import { HomeResponse } from '@/services/home/getHome.interface'
import { OnComingInterview } from '@/features/Calendar'
import { useTranslations } from 'next-intl'

interface HomeContainerProps {
  data: HomeResponse
}

const HomeContainer = ({ data }: HomeContainerProps) => {
  const initialOnComingSchedule = {
    schedule_list: data.schedule,
  }

  const $t = useTranslations('announcements_thead')

  return (
    <Styles.Wrapper>
      <OnComingInterview initialOnComingSchedule={initialOnComingSchedule} />
      <Styles.PostingWrapper>
        <Styles.Title>{$t('title')}</Styles.Title>
        <Styles.Container>
          <Styles.Header>
            <div>{$t('name')}</div>
            <div>{$t('recruitment')}</div>
            <div>{$t('create_date')}</div>
            <div>{$t('deadline')}</div>
            <div>{$t('posting_member')}</div>
            <div>{$t('applicants_count')}</div>
            <div>{$t('rejection_count')}</div>
            <div>{$t('success_count')}</div>
          </Styles.Header>
          <PostingList adminMembers={data.admin_member} postings={data.proceeding_posting} />
        </Styles.Container>
      </Styles.PostingWrapper>
    </Styles.Wrapper>
  )
}

export default HomeContainer
