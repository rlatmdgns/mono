import dynamic from 'next/dynamic'
import { JSXElementConstructor } from 'react'

export const ADD_APPLICANT_COMPONENTS: Record<string, JSXElementConstructor<any>> = {
  gender: dynamic(() => import('@/widgets/Application/ui/GenderForm')),
  birthday: dynamic(() => import('@/widgets/Application/ui/BirthdayForm')),
  profile: dynamic(() => import('@/widgets/Application/ui/ProfileForm')),
  nationality: dynamic(() => import('@/widgets/Application/ui/NationalityForm')),
  address: dynamic(() => import('@/widgets/Application/ui/LocationForm')),
  disabled: dynamic(() => import('@/widgets/Application/ui/DisabledForm')),
  veteran_benefit: dynamic(() => import('@/widgets/Application/ui/BenefitForm')),
  educations: dynamic(() => import('@/widgets/Application/ui/EducationForm')),
  careers: dynamic(() => import('@/widgets/Application/ui/CareerForm')),
  activities: dynamic(() => import('@/widgets/Application/ui/ActivityForm')),
  military: dynamic(() => import('@/widgets/Application/ui/MilitaryForm')),
  languages: dynamic(() => import('@/widgets/Application/ui/LanguageForm')),
  licenses: dynamic(() => import('@/widgets/Application/ui/LicenseForm')),
  awards: dynamic(() => import('@/widgets/Application/ui/AwardForm')),
  resume: dynamic(() => import('@/widgets/Application/ui/ResumeForm')),
  documents: dynamic(() => import('@/widgets/Application/ui/DocumentFormList')),
  pre_questions: dynamic(() => import('@/widgets/Application/ui/PreQuestionFormList')),
}
