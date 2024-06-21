import { Suspense } from 'react'
import CreateApplicationTemplate from '@/pageModules/build-application/ui/CreateApplicationTemplate'
import CrateApplicationTemplateLoading from '@/app/[locale]/create-application-template/loading'

export default function CreateApplicationTemplatePage() {
  const initialApplicantItems = [
    {
      ko: '이력서',
      en: 'Documents',
      icon: 'icon/document-line',
      key: 'resume',
      is_required: true,
      is_canview: true,
      is_note: false,
    },
  ]
  const initialAgreeItem = {
    description: '',
    is_required: true,
    key: 'enterprise_required_personal_terms',
  }
  const initialCustomApplicantItems = {
    enterprise_name: '',
    datas: initialApplicantItems,
    terms: initialAgreeItem,
  }

  return (
    <Suspense fallback={<CrateApplicationTemplateLoading />}>
      <CreateApplicationTemplate
        initialCustomApplicantItems={initialCustomApplicantItems}
        initialApplicantItems={initialApplicantItems}
        initialAgreeItem={initialAgreeItem}
      />
    </Suspense>
  )
}
