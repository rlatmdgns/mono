import React from 'react'
import * as Styles from './styles'
import { Applicant } from '@/interface/applicants'
import ApplicantList from '@/app/[locale]/postings/_components/ApplicantList'
import ListViewFilter from '@/app/[locale]/postings/_components/ListViewFilter'

interface ListViewProps {
  applicants: Applicant[]
}

const ListView = ({ applicants }: ListViewProps) => {
  return (
    <Styles.Wrapper>
      <ListViewFilter />
      <ApplicantList applicants={applicants} />
    </Styles.Wrapper>
  )
}

export default ListView
