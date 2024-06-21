export const getTabIconSource = (isApplication: boolean, isPublic: boolean) => {
  if (isApplication) return 'icon/activity-line'
  if (isPublic) return 'icon/document-line'
  return 'icon/lock-solid'
}
