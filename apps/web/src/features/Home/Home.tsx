'use client'

import HomeContainer from '@/features/Home/container/HomeContainer'
import useHome from '@/features/Home/hooks/useHome'
import { HomeResponse } from '@/services/home/getHome.interface'
import React from 'react'
import { useLocale } from 'next-intl'
import dayjs from 'dayjs'

interface HomeContainerProps {
  initialData: HomeResponse
}

const Home = ({ initialData }: HomeContainerProps) => {
  const currentLocale = useLocale()
  const { data } = useHome(initialData)
  dayjs.locale(currentLocale)

  return <HomeContainer data={data} />
}

export default Home
