import dynamic from 'next/dynamic'
import { JSXElementConstructor } from 'react'

const HomeSettingModal = dynamic(() => import('@/widgets/HomeSettingModal/HomeSettingModal'), {
  ssr: false,
})
const ApplicantModal = dynamic(() => import('@/modals/ApplicantModal'), {
  ssr: false,
})
const ConfirmModal = dynamic(() => import('@/modals/ConfirmModal'), {
  ssr: false,
})
const ConfirmRadioModal = dynamic(() => import('@/modals/ConfirmRadioModal'), {
  ssr: false,
})

const NewConfirmModal = dynamic(() => import('@/modals/newConfirmModal'), {
  ssr: false,
})

const InputModal = dynamic(() => import('@/modals/InputModal'), {
  ssr: false,
})
const AddApplicantModal = dynamic(() => import('@/modals/AddApplicantModal'), {
  ssr: false,
})
const DuplicateApplicantControlModal = dynamic(
  () => import('@/modals/DuplicateApplicantControlModal'),
  {
    ssr: false,
  },
)

const CreateApplicantFile = dynamic(() => import('@/modals/applicantFile/CreateApplicantFile'), {
  ssr: false,
})

const UpdateApplicantFileName = dynamic(
  () => import('@/modals/applicantFile/UpdateApplicantFileName'),
  {
    ssr: false,
  },
)

const FolderNameEditor = dynamic(
  () => import('@/features/Sidebar/components/JobPostingFolderItem/components/FolderNameEditor'),
  {
    ssr: false,
  },
)
const RequestInterviewModal = dynamic(
  () => import('@/modals/ReqeustInterviewModal/RequestInterviewModal'),
  {
    ssr: false,
  },
)
const RequestInterviewConfirmModal = dynamic(
  () => import('@/modals/RequestInterviewConfirmModal/RequestInterviewConfirmModal'),
  {
    ssr: false,
  },
)

const AddressModal = dynamic(() => import('@/modals/AddressModal'), {
  ssr: false,
})
const EvaluationSettingModal = dynamic(() => import('@/modals/evaluation/EvaluationSettingModal'), {
  ssr: false,
})
const UpdateEvaluationMemberModal = dynamic(
  () => import('@/modals/evaluation/UpdateEvaluationMemberModal'),
  {
    ssr: false,
  },
)
const CreateEvaluationTableModal = dynamic(
  () => import('@/modals/evaluation/CreateEvaluationTableModal'),
  {
    ssr: false,
  },
)
const PreviewEvaluationTableModal = dynamic(
  () => import('@/modals/evaluation/PreviewEvaluationTableModal'),
  {
    ssr: false,
  },
)
const EvaluationTemplateModal = dynamic(
  () => import('@/modals/evaluation/EvaluationTemplateModal'),
  {
    ssr: false,
  },
)
const WriteMailModal = dynamic(() => import('@/modals/WriteMailModal'), {
  ssr: false,
})
const RequestDocumentModal = dynamic(() => import('@/modals/RequestDocumentModal'), {
  ssr: false,
})
const SelectTemplateModal = dynamic(() => import('@/modals/SelectTemplateModal'), {
  ssr: false,
})
const alarmModal = dynamic(() => import('@/modals/AlarmModal'), {
  ssr: false,
})

const scheduleDetailModal = dynamic(() => import('@/widgets/ScheduleDetailModal'), {
  ssr: false,
})

const createScheduleModal = dynamic(() => import('@/widgets/CreateScheduleModal'), {
  ssr: false,
})

const modifyScheduleModal = dynamic(() => import('@/modals/ModifyScheduleModal'), {
  ssr: false,
})
const modifyScheduleSendMailModal = dynamic(() => import('@/modals/ModifyScheduleSendMailModal'), {
  ssr: false,
})

const EvaluationTableClosingStatusModal = dynamic(
  () => import('@/modals/evaluation/EvaluationTableClosingStatusModal'),
  {
    ssr: false,
  },
)
const UpdateEvaluationTableModal = dynamic(
  () => import('@/modals/evaluation/UpdateEvaluationTableModal'),
  {
    ssr: false,
  },
)

const AddPlanModal = dynamic(() => import('@/modals/AddPlanModal'), {
  ssr: false,
})

const PenaltyPlanModal = dynamic(() => import('@/modals/PenaltyPlanModal'), {
  ssr: false,
})

const UpgradePlanModal = dynamic(() => import('@/modals/UpgradePlanModal/UpgradePlanModal'), {
  ssr: false,
})

const AddCardModal = dynamic(() => import('@/modals/AddCardModal'), {
  ssr: false,
})

const PlanInformationModal = dynamic(() => import('@/modals/PlanInformationModal'), {
  ssr: false,
})

const MemberBatchRequestModal = dynamic(() => import('@/modals/MemberBatchRequestModal'), {
  ssr: false,
})
const MemberRequestModal = dynamic(() => import('@/modals/MemberRequestModal'), {
  ssr: false,
})

const WaitingRequestMemberModal = dynamic(() => import('@/modals/WaitingRequestMemberModal'), {
  ssr: false,
})

const ShowMoreSchedulesModal = dynamic(() => import('@/modals/ShowMoreSchedulesModal'), {
  ssr: false,
})

const MemberSettingModal = dynamic(() => import('@/modals/MemberSettingModal'), {
  ssr: false,
})

const UpdatePostingTemplateModal = dynamic(() => import('@/modals/UpdatePostingTemplateModal'), {
  ssr: false,
})

const MailTemplateModal = dynamic(() => import('@/modals/MailTemplateModal'), {
  ssr: false,
})

const ApplicationPrivacyPolicyModal = dynamic(
  () => import('@/modals/ApplicationPrivacyPolicyModal'),
  {
    ssr: false,
  },
)

const ApplicationSteadPolicyModal = dynamic(() => import('@/modals/ApplicationSteadPolicyModal'), {
  ssr: false,
})
const IntegrationSlackModal = dynamic(
  () => import('@/widgets/apps/ui/IntegrationModal/SlackModal'),
  {
    ssr: false,
  },
)

const IntegrationGoogleCalendarModal = dynamic(
  () => import('@/widgets/apps/ui/IntegrationModal/GoogleCalendarModal'),
  {
    ssr: false,
  },
)

const OnboardingSurveyModal = dynamic(
  () => import('@/widgets/onboarding/ui/OnboardingSurveyModal/OnboardingSurveyModal'),
  {
    ssr: false,
  },
)
const CreateAtsFreshManModal = dynamic(
  () => import('@/features/onboarding/ui/CreateAtsFreshManModal'),
  {
    ssr: false,
  },
)

const AddSequenceModal = dynamic(
  () => import('@/features/onboarding/ui/AddSequenceModal/AddSequenceModal'),
  {
    ssr: false,
  },
)

const ModifySequenceModal = dynamic(
  () => import('@/features/onboarding/ui/ModifySequenceModal/ModifySequenceModal'),
  {
    ssr: false,
  },
)

const SaveScenarioModal = dynamic(() => import('@/features/onboarding/ui/SaveScenarioModal'), {
  ssr: false,
})

const AddAlarmModal = dynamic(() => import('@/widgets/onboarding/ui/AddAlarmModal/AddAlarmModal'), {
  ssr: false,
})

const AddContentModal = dynamic(
  () => import('@/widgets/onboarding/ui/AddContentModal/AddContentModal'),
  {
    ssr: false,
  },
)

const AddEvaluationModal = dynamic(() => import('@/widgets/onboarding/ui/AddEvaluationModal'), {
  ssr: false,
})

const EditScenarioTitleModal = dynamic(
  () => import('@/features/onboarding/ui/EditScenarioTitleModal/EditScenarioTitleModal'),
  {
    ssr: false,
  },
)
const AddScenarioModal = dynamic(() => import('@/widgets/onboarding/ui/AddScenarioModal'), {
  ssr: false,
})

const MoveSceneModal = dynamic(() => import('@/widgets/onboarding/ui/MoveSceneModal'), {
  ssr: false,
})

const ApplyScenarioModal = dynamic(
  () => import('@/features/onboarding/ui/ApplyScenarioModal/ApplyScenarioModal'),
  {
    ssr: false,
  },
)

const ApplyScenarioForFreshmanModal = dynamic(
  () => import('@/widgets/onboarding/ui/ApplyScenarioForFreshmanModal'),
  {
    ssr: false,
  },
)

export const MODAL_COMPONENTS: Record<string, JSXElementConstructor<any>> = {
  homeSettingModal: HomeSettingModal,
  applicantModal: ApplicantModal,
  confirmModal: ConfirmModal,
  newConfirmModal: NewConfirmModal,
  confirmRadioModal: ConfirmRadioModal,
  inputModal: InputModal,
  createApplicantFile: CreateApplicantFile,
  updateApplicantFileName: UpdateApplicantFileName,
  addApplicantModal: AddApplicantModal,
  folderNameEditor: FolderNameEditor,
  duplicateApplicantControlModal: DuplicateApplicantControlModal,
  requestInterviewModal: RequestInterviewModal,
  requestInterviewConfirmModal: RequestInterviewConfirmModal,
  addressModal: AddressModal,
  evaluationSettingModal: EvaluationSettingModal,
  writeMailModal: WriteMailModal,

  /* Member */
  waitingRequestMemberModal: WaitingRequestMemberModal,
  memberRequestModal: MemberRequestModal,
  memberBatchRequestModal: MemberBatchRequestModal,
  memberSettingModal: MemberSettingModal,

  /* Evaluation */
  updateEvaluationMemberModal: UpdateEvaluationMemberModal,
  createEvaluationTableModal: CreateEvaluationTableModal,
  updateEvaluationTableModal: UpdateEvaluationTableModal,
  previewEvaluationTableModal: PreviewEvaluationTableModal,
  evaluationTableClosingStatusModal: EvaluationTableClosingStatusModal,

  requestDocumentModal: RequestDocumentModal,
  alarmModal: alarmModal,
  scheduleDetailModal: scheduleDetailModal,
  createScheduleModal: createScheduleModal,
  modifyScheduleModal: modifyScheduleModal,
  modifyScheduleSendMailModal: modifyScheduleSendMailModal,
  showMoreSchedulesModal: ShowMoreSchedulesModal,

  updatePostingTemplateModal: UpdatePostingTemplateModal,
  selectTemplateModal: SelectTemplateModal,
  evaluationTemplateModal: EvaluationTemplateModal,
  mailTemplateModal: MailTemplateModal,
  addPlanModal: AddPlanModal,
  penaltyPlanModal: PenaltyPlanModal,
  upgradePlanModal: UpgradePlanModal,
  addCardModal: AddCardModal,
  planInformationModal: PlanInformationModal,

  /* Application */
  applicationPrivacyPolicyModal: ApplicationPrivacyPolicyModal,
  applicationSteadPolicyModal: ApplicationSteadPolicyModal,

  /* Integration */
  integrationSlackModal: IntegrationSlackModal,
  integrationGoogleCalendarModal: IntegrationGoogleCalendarModal,

  /* OMS */
  onboardingSurveyModal: OnboardingSurveyModal,
  addSequenceModal: AddSequenceModal,
  modifySequenceModal: ModifySequenceModal,
  saveScenarioModal: SaveScenarioModal,
  addAlarmModal: AddAlarmModal,
  addContentModal: AddContentModal,
  createAtsFreshmanModal: CreateAtsFreshManModal,
  addEvaluationModal: AddEvaluationModal,
  editScenarioTitleModal: EditScenarioTitleModal,
  applyScenarioModal: ApplyScenarioModal,
  addScenarioModal: AddScenarioModal,
  moveSceneModal: MoveSceneModal,
  applyScenarioForFreshmanModal: ApplyScenarioForFreshmanModal,
}
