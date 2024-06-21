export const getNotificationIconType = (type: number) => {
  switch (type) {
    case 0:
      return 'icon/notification-solid'

    case 1:
      return 'icon/mention-solid'

    case 2:
      return 'icon/notification-solid'

    case 3:
      return 'icon/person-solid'

    case 4:
      return 'icon/mail-solid'

    case 5:
      return 'icon/notification-solid'

    default:
      return 'icon/notification-solid'
  }
}
