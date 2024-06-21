export const isNotBeforeDeployed = (situation?: string) => {
  return !situation || situation === '배포완료'
}

export const progressStatus = (status: '미진행' | '진행중' | '진행완료') => {
  if (status === '미진행') {
    return 'default'
  }
  if (status === '진행중') {
    return 'info'
  }
  return 'success'
}
