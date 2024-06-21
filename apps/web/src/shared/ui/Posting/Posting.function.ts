import theme from '@/styles/theme'

export const getIsActive = (isActive?: boolean, isCurrentPage?: boolean, isClose?: boolean) => {
  if (isClose) {
    return theme.colors.neutralGray300
  }

  return theme.colors.neutralGray800
}

export const getIsActiveIcon = (isActive?: boolean, isClose?: boolean) => {
  if (!isActive || isClose) {
    return theme.colors.neutralGray200
  }

  return theme.colors.blue500
}

export const getIsActiveShadow = (isActive?: boolean, isClose?: boolean) => {
  if (!isClose && isActive) {
    return '0 0 4px 0 rgba(70, 142, 255, 0.5)'
  }

  return 'none'
}
