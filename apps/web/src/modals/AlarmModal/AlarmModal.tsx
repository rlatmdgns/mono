import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import useGetAlarm from '@/features/Sidebar/components/SidebarHeader/useGetAlarm'
import { Tabs } from '@/shared/ui'
import AlarmList from '@/modals/AlarmModal/components/AlarmList'
import { useEffect, useState } from 'react'
import { AlarmTabList } from '@/interface/notification'
import { useQueryClient } from '@tanstack/react-query'
import { AUTHORITY, QUERY_KEY } from '@/shared/constants'
import { useRecoilValue } from 'recoil'
import { sidebarWidthAtom } from '@/features/Sidebar/recoil'
import React from 'react'
import { useLocale } from 'next-intl'
import { useAlarmModalConstants } from '@/modals/AlarmModal/hooks/useAlarmModalConstants'
import { useAuthority } from '@/shared/hooks'

interface AlarmModalProps {
  onClose: () => void
}

const AlarmModal = ({ onClose }: AlarmModalProps) => {
  const queryClient = useQueryClient()
  const currentLocale = useLocale()
  const wrapperWidth = currentLocale === 'ko' ? '354px' : '400px'

  const { authority } = useAuthority()
  const isAccess = authority !== AUTHORITY.EVALUATOR

  const { data } = useGetAlarm()
  const { ALARM_TAB_LIST } = useAlarmModalConstants(isAccess)
  const [panelContents, setPanelContents] = useState<React.ReactNode[]>([])

  const width = useRecoilValue(sidebarWidthAtom)

  const getPanelContents = () => {
    const panelContents: (React.ReactNode | undefined)[] = []

    ALARM_TAB_LIST.forEach((item: AlarmTabList) => {
      if (!data) {
        return false
      }

      panelContents.push(
        // @ts-ignore
        <AlarmList list={data[item.objectKey]} isAccess={isAccess} />,
      )
    })

    if (panelContents && panelContents.length > 0) {
      setPanelContents([...panelContents])
    }
  }

  useEffect(() => {
    if (!data) return
    getPanelContents()
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIDE_BAR] })
  }, [data])

  return (
    <ModalLayout onClick={onClose}>
      <Styles.Wrapper $width={width} $wrapperWidth={wrapperWidth}>
        <Tabs.TriggerList state="border" tabContents={ALARM_TAB_LIST} />
        <Tabs.PanelList tabContents={panelContents} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}
export default AlarmModal
