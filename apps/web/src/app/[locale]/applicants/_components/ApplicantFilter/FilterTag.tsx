import React from 'react'
import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FilterTagProps {
  selectMenu: string
  tags: string[]
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string, value: string) => void
}

const FilterTag = ({ selectMenu, tags, onClick }: FilterTagProps) => {
  const filter = useRecoilValue(applicantFilterAtom)
  const $t = useTranslations()
  const isSelected = selectMenu === $t('common.tag')

  if (!isSelected) {
    return null
  }
  return (
    <Styles.FilterMenu>
      <Styles.FilterItem
        $isSelected={filter.tag === ''}
        onClick={(event) => onClick(event, 'tag', '')}
      >
        {$t('common.whole')}
      </Styles.FilterItem>
      {tags?.map((tag) => (
        <Styles.FilterItem
          key={tag}
          $isSelected={filter.tag === tag}
          onClick={(event) => onClick(event, 'tag', tag)}
        >
          <Tooltip text={tag} isOverflow>
            {tag}
          </Tooltip>
        </Styles.FilterItem>
      ))}
    </Styles.FilterMenu>
  )
}

export default FilterTag
