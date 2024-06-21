import { Suspense } from 'react'
import EditApplicationTemplate from '@/pageModules/build-application/ui/EditApplicationTemplate'
import EditApplicationTemplateLoading from '@/app/[locale]/edit-application-template/[id]/loading'
import { getSeverTemplate } from '@/entities/settings/api/getSeverTemplate'

interface EditApplicationTemplatePageProps {
  params: {
    id: string
  }
}

export default async function EditApplicationTemplatePage({
  params,
}: EditApplicationTemplatePageProps) {
  const initialCustomApplicantItems = await getSeverTemplate(params.id)
  const initData = initialCustomApplicantItems.template_contents?.posting_applicant_form
    ? initialCustomApplicantItems.template_contents?.posting_applicant_form
    : initialCustomApplicantItems.template_contents
  const initialApplicantItems = initData.filter(
    (applicantItem: any) => applicantItem.key !== 'enterprise_required_personal_terms',
  )
  const initialAgreeItem = initData.find(
    (applicantItem: any) => applicantItem.key === 'enterprise_required_personal_terms',
  )

  return (
    <Suspense fallback={<EditApplicationTemplateLoading />}>
      <EditApplicationTemplate
        id={params.id}
        initialCustomApplicantItems={initialCustomApplicantItems}
        initialApplicantItems={initialApplicantItems}
        initialAgreeItem={initialAgreeItem}
        templateTitle={initialCustomApplicantItems.template_title}
      />
    </Suspense>
  )
}
