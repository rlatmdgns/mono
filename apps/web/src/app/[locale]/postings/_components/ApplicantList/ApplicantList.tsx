import React from 'react'
import * as Styles from './styles'
import { Applicant } from '@/interface/applicants'
import ApplicantItem from '@/app/[locale]/postings/_components/ApplicantItem'

interface ApplicantListProps {
  applicants: Applicant[]
}

const ApplicantList = ({ applicants }: ApplicantListProps) => {
  return (
    <Styles.List>
      {applicants.map((applicant) => {
        return <ApplicantItem key={applicant.applicant_id} applicant={applicant} />
      })}
    </Styles.List>
  )
}

export default ApplicantList
