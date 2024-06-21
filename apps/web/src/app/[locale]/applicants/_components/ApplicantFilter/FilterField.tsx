import React from 'react'
import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FilterFieldProps {
  selectMenu: string
  fields: string[]
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string, value: string) => void
}

const FilterField = ({ selectMenu, fields, onClick }: FilterFieldProps) => {
  const filter = useRecoilValue(applicantFilterAtom)
  const $t = useTranslations()
  const isSelected = selectMenu === $t('common.recruitment_position')

  if (!isSelected) {
    return null
  }
  return (
    <Styles.FilterMenu>
      <Styles.FilterItem
        $isSelected={filter.posting_field === ''}
        onClick={(event) => onClick(event, 'posting_field', '')}
      >
        {$t('common.whole')}
      </Styles.FilterItem>
      {fields?.map((field) => (
        <Styles.FilterItem
          key={field}
          $isSelected={filter.posting_field === field}
          onClick={(event) => onClick(event, 'posting_field', field)}
        >
          <Tooltip text={field} isOverflow>
            {field}
          </Tooltip>
        </Styles.FilterItem>
      ))}
    </Styles.FilterMenu>
  )
}

export default FilterField
