import React from 'react'
import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FilterStepProps {
  selectMenu: string
  steps: string[]
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string, value: string) => void
}

const FilterStep = ({ selectMenu, steps, onClick }: FilterStepProps) => {
  const filter = useRecoilValue(applicantFilterAtom)
  const $t = useTranslations()
  const isSelected = selectMenu === $t('common.recruitment_step')

  if (!isSelected) {
    return null
  }
  return (
    <Styles.FilterMenu>
      <Styles.FilterItem
        $isSelected={filter.posting_step === ''}
        onClick={(event) => onClick(event, 'posting_step', '')}
      >
        {$t('common.whole')}
      </Styles.FilterItem>
      {steps?.map((step) => (
        <Styles.FilterItem
          key={step}
          $isSelected={filter.posting_step === step}
          onClick={(event) => onClick(event, 'posting_step', step)}
        >
          <Tooltip text={step} isOverflow={true}>
            {step}
          </Tooltip>
        </Styles.FilterItem>
      ))}
    </Styles.FilterMenu>
  )
}

export default FilterStep
