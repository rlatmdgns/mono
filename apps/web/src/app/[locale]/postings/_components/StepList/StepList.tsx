'use client'

import React from 'react'
import * as Styles from './styles'

import { Applicant, PostingStep } from '@/interface/applicants'
import Step from '@/app/[locale]/postings/_components/Step'

interface StepListProps {
  steps: PostingStep[]
  applicants: Applicant[]
  postingId: string
}

const StepList = ({ postingId, steps, applicants }: StepListProps) => {
  return (
    <Styles.Wrapper>
      {steps.map((step, index) => (
        <Step
          postingId={postingId}
          total={steps.length}
          key={step.step_id}
          step={step}
          applicants={applicants}
          index={index}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default StepList
