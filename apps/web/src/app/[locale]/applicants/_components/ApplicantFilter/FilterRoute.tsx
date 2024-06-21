import React from 'react'
import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FilterRouteProps {
  selectMenu: string
  routes: string[]
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string, value: string) => void
}

const FilterRoute = ({ selectMenu, routes, onClick }: FilterRouteProps) => {
  const filter = useRecoilValue(applicantFilterAtom)
  const $t = useTranslations()
  const isSelected = selectMenu === $t('common.applicant_channel')

  if (!isSelected) {
    return null
  }
  return (
    <Styles.FilterMenu>
      <Styles.FilterItem
        $isSelected={filter.applicant_re_url === ''}
        onClick={(event) => onClick(event, 'applicant_re_url', '')}
      >
        {$t('common.whole')}
      </Styles.FilterItem>
      {routes?.map((route) => (
        <Styles.FilterItem
          key={route}
          $isSelected={filter.applicant_re_url === route}
          onClick={(event) => onClick(event, 'applicant_re_url', route)}
        >
          <Tooltip text={route} isOverflow>
            {route}
          </Tooltip>
        </Styles.FilterItem>
      ))}
    </Styles.FilterMenu>
  )
}

export default FilterRoute
