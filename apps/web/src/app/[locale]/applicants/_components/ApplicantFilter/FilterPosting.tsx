import { applicantFilterAtom } from '@/app/[locale]/applicants/_recoil/atom'
import { JobPosting } from '@/interface/jobPosting'
import { Folder } from '@/interface/sidebar'
import React from 'react'
import { useRecoilValue } from 'recoil'
import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface FilterPostingProps {
  selectMenu: string
  folders: Folder[]
  noneFolders: JobPosting[]
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string, value: string) => void
}

const FilterPosting = ({ selectMenu, folders, noneFolders, onClick }: FilterPostingProps) => {
  const filter = useRecoilValue(applicantFilterAtom)
  const $t = useTranslations()
  const isSelected = selectMenu === $t('common.announcement_name')

  if (!isSelected) {
    return null
  }
  return (
    <Styles.FilterMenu>
      <Styles.Folder>
        <Styles.AllFolder
          $isSelected={filter.posting_title === ''}
          onClick={(event) => onClick(event, 'posting_title', '')}
        >
          {$t('common.whole')}
        </Styles.AllFolder>
      </Styles.Folder>
      {folders?.map((folder) => {
        if (folder?.postings && folder?.postings.length < 1) return
        return (
          <Styles.Folder key={folder.folder_name}>
            <Styles.FolderTitle>{folder.folder_name}</Styles.FolderTitle>
            {folder?.postings?.map((posting) => {
              return (
                <Styles.Posting
                  $isSelected={filter?.posting_title === posting?.posting_title}
                  key={posting?.posting_id}
                  onClick={(event) => onClick(event, 'posting_title', posting?.posting_title)}
                >
                  <Tooltip text={posting?.posting_title} isOverflow={true}>
                    {posting?.posting_title}
                  </Tooltip>
                </Styles.Posting>
              )
            })}
          </Styles.Folder>
        )
      })}
      <Styles.Folder>
        <Styles.FolderTitle>{$t('folder.folder_none')}</Styles.FolderTitle>
        {noneFolders?.map((posting) => (
          <Styles.Posting
            key={posting.posting_id}
            $isSelected={filter.posting_title === posting.posting_title}
            onClick={(event) => onClick(event, 'posting_title', posting.posting_title)}
          >
            <Tooltip text={posting?.posting_title} isOverflow={true}>
              {posting?.posting_title}
            </Tooltip>
          </Styles.Posting>
        ))}
      </Styles.Folder>
    </Styles.FilterMenu>
  )
}

export default FilterPosting
