import React from 'react'
import EditPostingHeader from '@/app/[locale]/(posting)/_components/EditPostingHeader'

export default function EditPostingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EditPostingHeader />
      {children}
    </>
  )
}
