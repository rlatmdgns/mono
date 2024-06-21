export const getSceneIcons = (type: string) => {
  if (!type) return

  switch (type) {
    case 'alarm':
      return `icon/notification-line`
    case 'content':
      return 'icon/document-line'
    case 'evaluation':
      return 'icon/assessment-line'
    default:
      return 'icon/Q&A-line'
  }
}
