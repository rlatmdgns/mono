import MultiSelectMenu from '@/app/[locale]/postings/_components/MultiSelectToolbar/components/MultiSelectMenu'
import { IconButton } from '@/shared/ui'
import { Applicant } from '@/interface/applicants'
import React, { useEffect, useState } from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MultiSelectToolbarProps {
  postingId: string
  applicants: Applicant[]
  selectReset: () => void
}

const MultiSelectToolbar = ({ postingId, applicants, selectReset }: MultiSelectToolbarProps) => {
  const [visible, setVisible] = useState(false)

  const $t = useTranslations('common')
  const isNotExistApplicant = applicants?.length < 1

  const render = () => {
    if (isNotExistApplicant) return setVisible(false)
    setVisible(true)
  }

  useEffect(() => {
    render()
  }, [applicants])

  if (isNotExistApplicant) return null
  return (
    <Styles.Wrapper>
      <Styles.Toolbar $visible={visible}>
        <Styles.CountBox>
          <Styles.Count>{applicants.length}</Styles.Count>
          {$t('selected')}
        </Styles.CountBox>
        <MultiSelectMenu applicants={applicants} postingId={postingId} selectReset={selectReset} />
        <IconButton icon="icon/cancle-line1" onClick={selectReset} size="md" />
      </Styles.Toolbar>
    </Styles.Wrapper>
  )
}

export default MultiSelectToolbar
