export interface NotificationLink {
  applicant_id: string
  calendar_id?: string
  posting_id: string | number
}

export interface Notification {
  notification_title: string
  notification_contents: string
  notification_type: number
  notification_date: string
  notification_link: NotificationLink
  success: boolean
}

export interface AlarmTabList {
  [key: string]: string | number
  title: string
  type: number
  objectKey: string
}
