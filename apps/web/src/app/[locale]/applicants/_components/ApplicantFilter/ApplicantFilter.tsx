'use client'

import FilterDimmed from '@/app/[locale]/applicants/_components/ApplicantFilter/FilterDimmed'
import FilterField from '@/app/[locale]/applicants/_components/ApplicantFilter/FilterField'
import FilterPosting from '@/app/[locale]/applicants/_components/ApplicantFilter/FilterPosting'
import FilterRoute from '@/app/[locale]/applicants/_components/ApplicantFilter/FilterRoute'
import FilterStep from '@/app/[locale]/applicants/_components/ApplicantFilter/FilterStep'
import FilterTag from '@/app/[locale]/applicants/_components/ApplicantFilter/FilterTag'
import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { ApplicantPoolFilter } from '@/interface/applicantPool'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

type applicantFilterKey =
  | 'posting_title'
  | 'posting_step'
  | 'posting_field'
  | 'tag'
  | 'applicant_re_url'

interface ApplicantFilterProps {
  initialApplicantPoolFilter: ApplicantPoolFilter
}

const ApplicantFilter = ({ initialApplicantPoolFilter }: ApplicantFilterProps) => {
  const [selectMenu, setSelectMenu] = useState('')
  const [filter, setFilter] = useRecoilState(applicantFilterAtom)
  const $t = useTranslations()

  const postings = initialApplicantPoolFilter?.posting_list
  const folders = postings.folder_list
  const noneFolders = postings.none_folder
  const steps = initialApplicantPoolFilter?.step_list
  const fields = initialApplicantPoolFilter?.posting_field
  const tags = initialApplicantPoolFilter?.tag_list
  const routes = initialApplicantPoolFilter?.route_list

  const handleSelect = (value: string) => setSelectMenu(value)
  const handleFilterOff = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    handleSelect('')
  }

  const handleFilterSelect = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    key: string,
    value: string,
  ) => {
    event.stopPropagation()
    setFilter({
      ...filter,
      [key]: value,
    })
    setSelectMenu('')
  }

  const menus = [
    {
      title: $t('common.announcement_name'),
      name: 'posting_title',
      component: (
        <FilterDimmed onClick={handleFilterOff} selectMenu={selectMenu}>
          <FilterPosting
            selectMenu={selectMenu}
            folders={folders}
            noneFolders={noneFolders}
            onClick={handleFilterSelect}
          />
        </FilterDimmed>
      ),
    },
    {
      title: $t('common.recruitment_step'),
      name: 'posting_step',
      component: (
        <FilterDimmed onClick={handleFilterOff}>
          <FilterStep selectMenu={selectMenu} steps={steps} onClick={handleFilterSelect} />
        </FilterDimmed>
      ),
    },
    {
      title: $t('common.recruitment_position'),
      name: 'posting_field',
      component: (
        <FilterDimmed onClick={handleFilterOff}>
          <FilterField selectMenu={selectMenu} fields={fields} onClick={handleFilterSelect} />
        </FilterDimmed>
      ),
    },
    {
      title: $t('common.tag'),
      name: 'tag',
      component: (
        <FilterDimmed onClick={handleFilterOff}>
          <FilterTag selectMenu={selectMenu} tags={tags} onClick={handleFilterSelect} />
        </FilterDimmed>
      ),
    },
    {
      title: $t('common.applicant_channel'),
      name: 'applicant_re_url',
      component: (
        <FilterDimmed onClick={handleFilterOff}>
          <FilterRoute selectMenu={selectMenu} routes={routes} onClick={handleFilterSelect} />
        </FilterDimmed>
      ),
    },
  ]

  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Item>{$t('common.name')}</Styles.Item>
        {menus.map((menu) => {
          const filterKey = menu.name as applicantFilterKey
          const isActive = filter[filterKey] !== ''

          return (
            <Styles.Item key={menu.title} onClick={() => handleSelect(menu.title)}>
              <Styles.ItemInner>
                <Styles.FilterTitle $isSelected={isActive || menu.title === selectMenu}>
                  {menu.title}
                </Styles.FilterTitle>
                <Icon
                  icon={
                    isActive
                      ? 'icon/arrow-solid'
                      : menu.title === selectMenu
                        ? 'icon/up-solid'
                        : 'icon/down-solid'
                  }
                  color={
                    isActive ? 'blue500' : menu.title === selectMenu ? 'blue500' : 'neutralGray300'
                  }
                />
              </Styles.ItemInner>
              {menu.component}
            </Styles.Item>
          )
        })}
        <Styles.Item>{$t('common.applicant_date')}</Styles.Item>
      </Styles.Header>
    </Styles.Wrapper>
  )
}

export default ApplicantFilter
