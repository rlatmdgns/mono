import { RecruitPageRequest } from '@/interface/recruitPage'

export const API_URL = {
  /* home */
  HOME: '/home-dashboard',

  /* enterprise */
  ENTERPRISE_INFORMATION: '/enterprise-information',
  ENTERPRISE_MEMBER: (searchParams?: string) =>
    `/enterprise-member${searchParams ? `${searchParams}` : ''}`,
  DELETE_ENTERPRISE_MEMBER: (identification: string) => `/enterprise-member/${identification}`,
  ENTERPRISE_INVITED_MEMBER: '/enterprise-invited-member',
  ENTERPRISE_MEMBER_CHECK: (emails: string) => `/enterprise-member-check?invite_emails=${emails}`,

  /* sidebar */
  SIDE_BAR: '/sidebar',
  FOLDER_SORT: '/folder-sort',
  POSTING_SORT: '/posting-sort',
  FOLDER: '/folder',
  DELETE_FOLDER: (folderId: string) => `/folder/${folderId}`,
  FOLDER_NAME: '/folder-name',
  ALARM: '/alarm',

  /* auth */
  LOGIN: '/login',
  USER: '/user',
  USER_ALARM: '/user-alarm',
  USER_PASSWORD: '/user-password',
  PASSWORD_RESET_MAIL: '/password-reset',
  PASSWORD_RESET: (authCode: string) => `/password-reset/${authCode}`,

  /* sign-up */
  EMAIL_AUTHENTICATION: '/email-authentication',
  GET_EMAIL_AUTHENTICATION: (code: string) => `/email-authentication/${code}`,
  SIGN_UP: '/sign-up',
  INVITED_SIGN_UP: '/invited-sign-up',
  ENTERPRISE_EMAIL: '/enterprise-email',

  /* posting */
  POSTINGS: '/postings',
  CREATE_POSTING: '/posting',
  POSTING: (id: number | string) => `/posting/${id}`,
  POSTING_APPLICANT_FORM: (id: string | number) => `/posting-applicant-form/${id}`,
  POSTING_CLOSE: (id: number | string) => `/posting-close/${id}`,
  POSTING_ACTIVITY: (id: string) => `/posting-activity/${id}`,
  RECRUIT_PAGE: (id: string, params: RecruitPageRequest) =>
    `/posting-page/${id}?enterprise_recruit_url=${params.enterprise_recruit_url}&history_url=${params.history_url}`,
  RECRUIT_URLS: `/recruit_urls`,
  POSTING_MEMBER: (id: string | number, search?: string) =>
    `/posting-member/${id}${search ? `?search=${search}` : ''}`,
  DELETE_POSTING_MEMBER: (id: number, identification: string) =>
    `/posting-member/${id}/${identification}`,
  POSTING_BLOCKING: (id: number) => `/posting-blocking/${id}`,
  POSTING_REQUIREMENT: '/posting-requirement',
  INVITED_POSTINGS: '/invited-postings',

  POSTING_APPLICATION_FORM_PAGE: (id: string, enterprise_recruit_url: string) =>
    `/posting-applicant-form/${id}/applicant?enterprise_recruit_url=${enterprise_recruit_url}`,

  /* PostingLocker */
  POSTING_LOCKER: (page: number) => `/posting-locker?page=${page}`,
  POSTING_LOCKER_RESTORE: '/posting-locker-restore',
  POSTING_LOCKER_STORE: '/posting-locker',

  /* postingStep */
  ADD_POSTING_STEP: (id: number | string) => `/posting-step/${id}`,
  EDIT_POSTING_STEP: (postingId: string, stepId: string) => `/posting-step/${postingId}/${stepId}`,
  DELETE_POSTING_STEP: (postingId: string, stepId: string) =>
    `/posting-step/${postingId}/${stepId}`,

  /* applicant */
  APPLICANTS: (id: number | string) => `/applicants/${id}`,
  UPDATE_APPLICANT_LOCATION: (posting_id: number | string) =>
    `/applicant-location-v2/${posting_id}`,
  GET_APPLICANT_MODAL: (applicant_id: string) => `/applicant-modal/${applicant_id}`,
  UPDATE_APPLICANT_MODAL_LOCATION: (posting_id: number | string) =>
    `/applicant-location/${posting_id}`,
  APPLICANT: (posting_id: number | string) => `/applicant/${posting_id}`,
  GET_APPLICANT: (applicant_id: string) => `/applicant/${applicant_id}`,
  APPLICANT_PASS: (posting_id: number | string) => `/applicant-pass/${posting_id}`,
  APPLICANT_FAIL: (posting_id: number | string) => `/applicant-fail/${posting_id}`,
  APPLICANT_PUBLIC: (applicant_id: string) => `/applicant-public/${applicant_id}`,
  APPLICANT_VOTE: (applicant_id: string) => `/applicant-vote/${applicant_id}`,
  APPLICANT_TAG: (applicant_id: string) => `/applicant-tag/${applicant_id}`,
  UPDATE_APPLICANT: (applicant_id: string) => `/applicant/${applicant_id}`,
  UPDATE_APPLICANT_TAG: (applicant_id: string) => `/applicant-tag/${applicant_id}`,
  CREATE_APPLICATION: '/application',
  DELETE_APPLICANT: (applicant_id: string) => `/applicant/${applicant_id}`,

  /* applicantMemo */
  GET_APPLICANT_MEMOS: (applicant_id: string) => `/applicant/${applicant_id}/memos`,
  POST_APPLICANT_MEMO: (applicant_id: string) => `/applicant/${applicant_id}/memo`,
  MODIFY_APPLICANT_MEMO: (applicant_id: string, memo_id: string) =>
    `/applicant/${applicant_id}/memo/${memo_id}`,

  /* applicantPool */
  APPLICANT_POOL: '/applicant-pool',
  APPLICANT_POOL_FILTER: '/applicant-pool-filter',
  APPLICANT_EXCEL: '/applicants-excel',

  /* file */
  APPLICANT_FILE: (fileId: number) => `/applicant-file/${fileId}`,
  UPDATE_APPLICANT_FILE: (fileId: number) => `/applicant-file/${fileId}/masking_state`,
  APPLICANT_FILE_STREAMDOC: (fileId: number) => `/applicant-file/streamdoc/${fileId}`,
  APPLICANT_FILES: (applicantId: string) => `/applicant-files/${applicantId}`,
  CREATE_APPLICANT_FILE: (applicantId: string) => `/applicant-file/${applicantId}`,
  UPDATE_APPLICANT_FILES_ORDER: (file_id: string) => `/applicant-files/${file_id}`,
  UPDATE_APPLICANT_FILE_NAME: (file_id: string) => `/applicant-file-name/${file_id}`,
  UPDATE_APPLICANT_FILE_PUBLIC: (file_id: string) => `/applicant-file-public/${file_id}`,
  DELETE_APPLICANT_FILE: (file_id: string) => `/applicant-file/${file_id}`,
  REQUEST_FILE: (request_file_id: string, applicantId: string) =>
    `/submit-file/${request_file_id}/${applicantId}`,

  /*mail*/
  MAILS: `/mails`,
  MAIL: `/mail`,
  MAIL_DETAIL: (id?: string) => `/mail/${id}`,
  MAIL_BOX: `/mail-box`,
  MAIL_COMPONENT: (id?: string) => `/mail-component/${id}`,
  SEND_MAIL: (id: string) => `/mail/${id}`,

  /*tag*/
  TAG_LIST: `/tag-list`,

  /* schedule */
  SCHEDULE: '/schedule',
  SCHEDULE_MODIFY: (schedule_id: string) => `/schedule/${schedule_id}`,
  SCHEDULE_ONCOMING: '/schedule-oncoming',
  SCHEDULE_DETAIL: (schedule_id: string) => `/schedule-detail/${schedule_id}`,
  SCHEDULE_REQUIREMENT: (posting_id?: string) => `/schedule-requirement/${posting_id}`,
  SCHEDULE_CANCEL: (schedule_id: string) => `/schedule-cancel/${schedule_id}`,
  SCHEDULE_SEARCH: `/schedule-search`,
  GOOGLE_SCHEDULE: `/google/calendar/schedule`,

  /* interview-place */
  INTERVIEW: '/interview',
  INTERVIEW_REQUEST: '/interview-request',
  INTERVIEW_PLACE: '/interview-place',
  MODIFY_INTERVIEW_PLACE: (interview_type: string) => `/interview-place/${interview_type}`,
  INTERVIEW_REFUSE: '/interview-refuse',

  /* template*/
  TEMPLATES: (template_type: string, searchParams?: string) =>
    `/enterprise-templates/${template_type}/list${searchParams ? `${searchParams}` : ''}`,
  TEMPLATE: (id: string) => `/enterprise-templates/${id}`,
  DELETE_TEMPLATE: (id: number) => `/enterprise-templates/${id}`,
  UPDATE_TEMPLATE: (id: string) => `/enterprise-templates/${id}`,
  CREATE_TEMPLATE: `/enterprise-templates`,
  TEMPORARY_FILE: `/storage/temporary`,

  CREATE_EVALUATION_TEMPLATE: `/template/evaluation`,
  CREATE_MAIL_TEMPLATE: `/template/mail`,
  CREATE_POSTING_TEMPLATE: `/template/posting`,

  UPDATE_POSTING_TEMPLATE: (id: number) => `/template/posting/${id}`,
  UPDATE_MAIL_TEMPLATE: (id: number) => `/template/mail/${id}`,
  UPDATE_EVALUATION_TEMPLATE: (id: string) => `/template/evaluation/${id}`,
  COPY_TEMPLATE: (id: number) => `/enterprise-templates/${id}/copy`,

  /* evaluation */
  GET_EVALUATION: (posting_id: string, step_id: string) =>
    `/evaluation-v2/${posting_id}/${step_id}/evaluation`,
  GET_EVALUATION_TABLE: (evaluation_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/tables/${table_id}`,
  CREATE_EVALUATION_TABLE: (evaluation_id: string) => `/evaluation-v2/${evaluation_id}/tables`,
  DELETE_EVALUATION_TABLE: (evaluation_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/tables/${table_id}`,
  GET_EVALUATION_TABLE_APPLICANT_STATUS: (evaluation_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/tables/${table_id}/applicants`,
  CLOSE_EVALUATION_TABLES: (evaluation_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/${table_id}/applicants/close`,
  UPDATE_EVALUATION_TABLE: (evaluation_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/tables/${table_id}`,
  UPDATE_EVALUATION_MEMBER: (evaluation_id: string) => `/evaluation-v2/${evaluation_id}/members`,
  CLOSE_EVALUATION: (evaluation_id: string) => `/evaluation-v2/${evaluation_id}/applicants/close`,

  /* applicant evaluation*/
  GET_APPLICANT_EVALUATION: (posting_id: string, applicant_id: string) =>
    `/evaluation-v2/${posting_id}/applicants/${applicant_id}`,
  GET_APPLICANT_EVALUATION_TABLES: (evaluation_id: string, applicant_id: string) =>
    `/evaluation-v2/${evaluation_id}/applicants/${applicant_id}/tables`,
  SUBMIT_EVALUATION: (evaluation_id: string, table_id: string, applicant_id: string) =>
    `/evaluation-v2/${evaluation_id}/${table_id}/${applicant_id}/evaluations`,
  GET_EVALUATION_MEMBERS_RESULT: (evaluation_id: string, applicant_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/applicants/${applicant_id}/tables/${table_id}/members`,
  GET_EVALUATION_MEMBER_RESULT: (
    evaluation_id: string,
    applicant_id: string,
    table_id: string,
    identification: string,
  ) =>
    `/evaluation-v2/${evaluation_id}/applicants/${applicant_id}/tables/${table_id}/member/${identification}`,
  GET_MY_EVALUATION: (evaluation_id: string, applicant_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/applicants/${applicant_id}/tables/${table_id}/my`,
  DELETE_MY_EVALUATION: (evaluation_id: string, applicant_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/applicants/${applicant_id}/tables/${table_id}/my`,
  UPDATE_MY_EVALUATION: (evaluation_id: string, applicant_id: string, table_id: string) =>
    `/evaluation-v2/${evaluation_id}/applicants/${applicant_id}/tables/${table_id}/my`,

  /* Payment */
  PAYMENT: '/payment',
  PAYMENTS: '/payments',
  DELETE_PAYMENT: (email: string) => `/payment?billing_email=${email}`,
  PAYMENT_CARD: `/payment-card`,

  /* Plan */
  PLAN: '/plan',

  /* University */
  HIGHSCHOOL: (high_school_name: string) =>
    `/school/highschool?high_school_name=${high_school_name}`,
  UNIVERSITY: (university_name: string, university_duration?: number) =>
    `/school/university?university_name=${university_name}&duration=${university_duration}`,
  GRADUATE_UNIVERSITY: (university_name: string, type: string) =>
    `/school/graduate_university?university_name=${university_name}&type=${type}`,
  UNIVERSITY_MAJOR: (univ_type: string, university_name: string, department_name: string) =>
    `/school/university/major?univ_type=${univ_type}&university_name=${university_name}&department_name=${department_name}`,

  /*Application*/
  APPLICATION: (applicant_id: string) => `/applicant/${applicant_id}`,

  /* Google Calendar */
  GOOGLE_CALENDAR: '/google/calendar',

  CONNECT_GOOGLE: '/google/connect',

  /* Slack */
  CONNECT_SLACK: '/slack/connect',
  SET_SLACK_NOTIFICATION: '/slack/notification',

  /* OMS */
  SCENARIOS: '/oms/scenarios',
  TEMPLATE_SCENARIOS: (id?: string | number) => `/oms/template-scenarios${id ? `/${id}` : ''}`,
  SCENARIOS_ID: (id: number) => `/oms/scenarios/${id}`,
  CREATE_FRESHMAN: '/oms/freshman/oms',
  CREATE_ATS_FRESHMAN: '/oms/freshman/ats',
  FRESHMAN: (id?: number) => `/oms/freshman/${id ? `/${id}` : ''}`,
  FRESHMEN: (page: number, limit: number) => `/oms/freshman?page=${page}&limit=${limit}`,
  OMS_MANAGER_CHECK: `/oms/manager/check-email`,

  /** ATS > OMS  */
  OMS_MEMBER: '/enterprise-member/oms',
  OMS_POSTING: '/posting',
  FINAL_STAGE_APPLICANT: (page: number, limit: number, posting_id?: number) =>
    `/applicant/pass?page=${page}&limit=${limit}&posting_id=${posting_id}`,
}
