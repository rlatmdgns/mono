import SidebarLayout from '@/widgets/SidebarLayout'
import getServerHome from '@/services/home/getServerHome'
import { Metadata } from 'next'
import React from 'react'
import Home from '@/features/Home'

export const metadata: Metadata = {
  title: '스테드',
  description: '채용을 더 쉽고 간편하게! 채용협업툴(ATS) 스테드',
}

export default async function HomePage() {
  const initialData = await getServerHome()
  return (
    <SidebarLayout>
      <Home initialData={initialData} />
    </SidebarLayout>
  )
}
