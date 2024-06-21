'use client'

import JobPostingContainer from '@/features/Sidebar/components/JobPostingContainer'
import SidebarFNB from '@/features/Sidebar/components/SidebarFNB'
import SidebarGNB from '@/features/Sidebar/components/SidebarGNB'
import SidebarGuide from '@/features/Sidebar/components/SidebarGuide'
import SidebarHeader from '@/features/Sidebar/components/SidebarHeader'
import useSidebar from '@/features/Sidebar/hooks/useSidebar'
import useUserWithEnterprise from '@/entities/user/hooks/useUserWithEnterprise'
import { foldersAtom, noneFoldersAtom, sidebarWidthAtom } from '@/features/Sidebar/recoil'
import { mouseDownDrag } from '@/features/Sidebar/Sidebar.function'
import { EnterpriseInformationResponse } from '@/interface/enterpriseInformation'
import { SidebarResponse } from '@/interface/sidebar'
import { User } from '@/interface/user'
import { usePathname } from 'next/navigation'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import Cookies from 'js-cookie'
import {
  filterAccessFolder,
  filterAccessPosting,
} from '@/features/Sidebar/components/JobPostingContainer/JobPostingContainer.factory'
import CreatePostingButton from '@/features/Sidebar/components/CreatePostingButton'
import { useDebounce } from '@/shared/hooks'

interface SidebarProps {
  initialSidebar: SidebarResponse
  initialUser: User
  initialEnterpriseInformation: EnterpriseInformationResponse
  sidebarWidth?: string
}

const Sidebar = ({
  initialSidebar,
  initialUser,
  initialEnterpriseInformation,
  sidebarWidth,
}: SidebarProps) => {
  const [isMounted, setIsMounted] = React.useState(false)
  const boundaryRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useRecoilState(sidebarWidthAtom)

  const setFolders = useSetRecoilState(foldersAtom)
  const setNoneFolders = useSetRecoilState(noneFoldersAtom)

  const pathname = usePathname() as string
  const { user, enterpriseInformation } = useUserWithEnterprise(
    initialUser,
    initialEnterpriseInformation,
  )
  const { data: sidebarData } = useSidebar(initialSidebar)

  const isEvaluationMember = user.user_authority === 'evaluationMember'

  const initSidebar = () => {
    if (!sidebarData) return
    const filterFolders = filterAccessFolder(isEvaluationMember, sidebarData?.folder_list)
    const filterNoneFolders = filterAccessPosting(isEvaluationMember, sidebarData?.none_folder)
    setFolders(filterFolders)
    setNoneFolders({
      folder_id: 'null',
      postings: filterNoneFolders,
    })
  }

  useEffect(() => {
    initSidebar()
  }, [sidebarData])

  useLayoutEffect(() => {
    const boundary = boundaryRef.current?.getBoundingClientRect()

    if (!boundary) return
    setWidth(sidebarWidth)
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [boundaryRef])

  useDebounce(() => Cookies.set('sidebarWidth', width), 1000, [width])

  return (
    <Styles.Wrapper ref={boundaryRef} $width={isMounted ? width : sidebarWidth}>
      <SidebarHeader
        user={user}
        enterpriseInformation={enterpriseInformation}
        count={sidebarData?.notification_count}
      />
      <Styles.Content>
        <CreatePostingButton />
        <SidebarGNB pathname={pathname} />
        <JobPostingContainer />
        <SidebarFNB pathname={pathname} isEvaluationMember={isEvaluationMember} />
        <SidebarGuide />
      </Styles.Content>
      <Styles.ResizeBar
        {...mouseDownDrag((deltaX) => {
          setWidth(deltaX)
        })}
      />
    </Styles.Wrapper>
  )
}

export default Sidebar
