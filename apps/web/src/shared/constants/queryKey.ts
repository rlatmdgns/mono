export const QUERY_KEY = {
  HOME: 'home',
  /*auth*/
  USER: 'user',
  /*enterprise*/
  ENTERPRISE_MEMBER: 'enterpriseMember',
  ENTERPRISE_INFORMATION: 'enterpriseInformation',
  WAITING_ENTERPRISE_MEMBER: 'waitingEnterpriseMember',

  /*sidebar*/
  SIDE_BAR: 'sideBar',
  ALARM: 'alarm',

  /* Posting */
  POSTING: 'posting',
  POSTINGS: 'postings',
  INVITED_POSTINGS: 'invitedPostings',
  POSTING_MEMBER: 'postingMember',
  POSTING_REQUIREMENT: 'postingRequirement',
  POSTING_APPLICATION_FORM: 'postingApplicationForm',

  /* PostingLocker */
  POSTING_LOCKER: 'postingLocker',
  APPLICANT_POOL: 'applicantPool',

  /*applicants*/
  APPLICANTS: 'applicants',
  SEARCH_APPLICANTS: 'searchApplicants',
  APPLICANT_MODAL: 'applicantModal',
  APPLICANT_VOTE: 'applicantVote',
  APPLICANT: 'applicant',

  APPLICANT_TAG: 'applicantTag',

  /* Folder */
  FOLDER: 'folder',

  /*file*/
  APPLICANT_FILE: 'applicantFile',
  APPLICANT_FILES: 'applicantFiles',
  FILE_REQUEST: 'fileRequest',

  /*mail*/
  MAIL_BOX: 'mailBox',
  MAILS: 'mails',
  MAIL_DETAIL: 'mailDetail',
  MAIL_COMPONENT: 'mailComponent',

  /* Tag */
  TAG_LIST: 'tagList',

  /* Interview */
  INTERVIEW: 'interview',

  /* Interview Place */
  ADDRESS: 'address',
  INTERVIEW_PLACE: 'interviewPlace',

  /*Template */
  MAIL_TEMPLATES: 'mailTemplates',
  POSTING_TEMPLATES: 'postingTemplates',
  SETTING_TEMPLATE: 'settingTemplate',
  TEMPLATE_CONTENT: 'templateContent',

  /*Schedule*/
  SCHEDULE: 'schedule',
  SCHEDULE_ONCOMING: 'scheduleOnComing',
  SCHEDULE_DETAIL: 'scheduleDetail',
  SCHEDULE_REQUIREMENT: 'scheduleRequirement',
  SCHEDULE_SEARCH: 'scheduleSearch',

  /* Evaluation */
  EVALUATION: 'evaluation',
  EVALUATION_TABLE: 'evaluationTable',
  EVALUATION_TABLE_APPLICANT_STATUS_STATUS: 'evaluationTableApplicantStatus',

  /* Applicant Evaluation */
  APPLICANT_EVALUATION: 'applicantEvaluation',
  APPLICANT_EVALUATION_TABLES: 'applicantEvaluationTables',
  EVALUATION_MEMBERS_RESULT: 'evaluationMembersResult',
  EVALUATION_MEMBER_RESULT: 'evaluationMemberResult',
  EVALUATION_MY_RESULT: 'evaluationMyResult',

  /* Memo */
  APPLICANT_MEMO: 'applicantMemo',
  MY_EVALUATION: 'myEvaluation',

  /* Payment */
  PAYMENT: 'payment',
  PAYMENTS: 'payments',

  /* Plan */
  PLAN: 'plan',

  /*build-application*/
  POSTING_APPLICANT_FORM: 'postingApplicantForm',

  /*APPLICATION*/
  APPLICATION: 'application',

  /* Google */
  CONNECT_GOOGLE: 'googleConnect',
  GOOGLE_CALENDAR: 'googleCalendar',
  GOOGLE_SCHEDULES: 'googleSchedules',

  /* Slack */
  CONNECT_SLACK: 'slackConnect',

  /* OMS */
  TEMPLATE_SCENARIOS: 'templateScenarios',
  SCENARIOS: 'scenarios',
  SCENARIO: 'scenario',
  FRESHMEN: 'freshmen',
  FRESHMAN: 'freshman',
  OMS_POSTING: 'omsPosting',
  FINAL_STAGE_APPLICANT: 'finalStageApplicant',
  TEMPLATE_SCENARIO_DETAIL: 'templateScenarioDetail',
  OMS_MEMBER: 'omsMember',
}

export const MUTATION_KEY = {
  /* User */
  UPDATE_USER: 'updateUser',
  UPDATE_USER_ALARM: 'updateUserAlarm',

  /* Member */
  UPDATE_MEMBER_AUTHORITY: 'updateMemberAuthority',
  DELETE_MEMBER: 'deleteMember',
  DELETE_POSTING_MEMBER: 'deletePostingMember',

  /* Enterprise */
  UPDATE_ENTERPRISE: 'updateEnterprise',
  UPDATE_ENTERPRISE_MEMBER: 'updateEnterpriseMember',
  INVITE_ENTERPRISE_MEMBER: 'inviteEnterpriseMember',

  /*sidebar*/
  UPDATE_FOLDER_SORT: 'updateFolderSort',
  UPDATE_POSTING_SORT: 'updatePostingSort',
  CREATE_FOLDER: 'createFolder',
  DELETE_FOLDER: 'deleteFolder',
  EDIT_FOLDER_NAME: 'editFolderName',

  /* Posting */
  UPDATE_POSTING_MEMBER: 'updatePostingMember',
  UPDATE_POSTING_BLOCKING: 'updatePostingBlocking',

  /* PostingLocker */
  RESTORE_POSTING_LOCKER: 'restorePostingLocker',
  STORE_POSTING_LOCKER: 'storePostingLocker',

  /*posting*/
  UPDATE_APPLICANT_LOCATION: 'updateApplicantLocation',
  SEARCH_APPLICANTS: 'searchApplicants',
  ADD_STEP: 'addStep',
  DELETE_STEP: 'deleteStep',
  CLOSE_POSTING: 'closePosting',
  POSTING_ACTIVITY: 'postingActivity',
  CREATE_POSTING_APPLICANT: 'createPostingApplicant',
  UPDATE_POSTING_APPLICANT: 'updatePostingApplicant',

  /*Applicant*/
  APPLICANT_PUBLIC: 'applicantPublic',
  APPLICANT_VOTE: 'applicantVote',
  ADD_APPLICANT: 'addApplicant',
  CREATE_APPLICANT: 'createApplicant',
  UPDATE_APPLICANT: 'updateApplicant',
  DELETE_APPLICANT: 'deleteApplicant',

  /*Applicant Tag*/
  DELETE_APPLICANT_TAG: 'deleteApplicantTag',
  UPDATE_APPLICANT_TAG: 'updateApplicantTag',
  APPLICANT_TAG: 'applicantTag',

  /*Applicant file*/
  CREATE_APPLICANT_FILE: 'createApplicantFile',
  UPDATE_APPLICANT_FILES_ORDER: 'updateApplicantFilesOrder',
  UPDATE_APPLICANT_FILE_NAME: 'updateApplicantFileName',
  UPDATE_APPLICANT_FILE_PUBLIC: 'updateApplicantFilePublic',
  UPDATE_APPLICANT_FILE_MASKING: 'updateApplicantFileMasking',
  DELETE_APPLICANT_FILE: 'deleteApplicantFile',
  APPLICANT_FILE_STREAMDOC: 'applicantFileStreamDoc',

  /* Applicant Memo */
  CREATE_APPLICANT_MEMO: 'createApplicantMemo',

  /*Interview*/
  DELETE_INTERVIEW: 'deleteInterview',
  UPDATE_SELECT_INTERVIEW: 'updateSelectInterview',
  CANCEL_INTERVIEW: 'cancelInterview',

  /* Interview Place */
  ADD_INTERVIEW_PLACE: 'addInterviewPlace',
  MODIFY_INTERVIEW_PLACE: 'modifyInterviewPlace',
  DELETE_INTERVIEW_PLACE: 'deleteInterviewPlace',

  /* Schedule*/
  CREATE_SCHEDULE: 'createSchedule',
  MODIFY_SCHEDULE: 'modifySchedule',

  /*Mail*/
  DELETE_MAILS: 'deleteMails',
  RESTORE_MAILS: 'restoreMails',
  HARD_DELETE_MAILS: 'hardDeleteMails',

  /*Evaluation*/
  CREATE_EVALUATION_TABLE: 'createEvaluationTable',
  DELETE_EVALUATION_TABLE: 'deleteEvaluationTable',
  CLOSE_EVALUATION_TABLES: 'closeEvaluationTables',
  UPDATE_EVALUATION_TABLE: 'updateEvaluationTable',
  UPDATE_EVALUATION_MEMBER: 'updateEvaluationMember',
  CLOSE_EVALUATION: 'closeEvaluation',

  /*Applicant Evaluation*/
  SUBMIT_EVALUATION: 'submitEvaluation',
  DELETE_MY_EVALUATION: 'deleteMyEvaluation',
  UPDATE_MY_EVALUATION: 'updateMyEvaluation',

  /* Payment Card */
  ADD_PAYMENT_CARD: 'addPaymentCard',
  UPDATE_PAYMENT_CARD: 'updatePaymentCard',
  ADD_PAYMENT: 'addPayment',
  UPGRADE_PAYMENT: 'upgradePayment',
  DELETE_PAYMENT: 'deletePayment',
  UPDATE_BILLING_EMAIL: 'updateBillingEmail',

  /* Template */
  DELETE_TEMPLATE: 'deleteTemplate',
  CREATE_TEMPLATE: 'createTemplate',
  UPDATE_TEMPLATE: 'updateTemplate',
  CREATE_EVALUATION_TEMPLATE: 'createEvaluationTemplate',
  CREATE_POSTING_TEMPLATE: 'createPostingTemplate',
  CREATE_MAIL_TEMPLATE: 'createMailTemplate',

  UPDATE_EVALUATION_TEMPLATE: 'updateEvaluationTemplate',
  UPDATE_POSTING_TEMPLATE: 'updatePostingTemplate',
  UPDATE_MAIL_TEMPLATE: 'updateMailTemplate',
  COPY_TEMPLATE: 'copyTemplate',

  /* Google */
  CONNECT_GOOGLE: 'googleConnect',
  UN_CONNECT_GOOGLE: 'googleUnConnect',
  UPDATE_GOOGLE_CALENDER: 'updateGoogleCalender',

  /* Slack */
  CONNECT_SLACK: 'slackConnect',
  UN_CONNECT_SLACK: 'slackUnConnect',
  UPDATE_SLACK_NOTIFICATION: 'updateSlackNotification',

  /* OMS */
  POST_SCENARIO: 'postScenario',
  UPDATE_SCENARIO_TITLE: 'updateScenarioTitle',
  DELETE_SCENARIO: 'deleteScenario',
  CREATE_FRESHMAN: 'createFreshman',
  CREATE_ATS_FRESHMAN: 'createAtsFreshMan',
  UPDATE_FRESHMAN: 'updateFreshMan',
  DELETE_FRESHMAN: 'deleteFreshMan',
}
