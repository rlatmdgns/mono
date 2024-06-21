import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`
export const SkeletonHeader = styled.div`
  padding: 11px 16px;
`
export const SkeletonBody = styled.div`
  display: flex;
  height: calc(100% - 63px);
  padding: 0 16px;
  gap: 8px;
`
export const SkeletonBodyToolbar = styled.div`
  margin: 12px;
`
export const SkeletonCalendarWrap = styled.div`
  position: relative;
  width: 85%;
  height: calc(100vh - 224px);
`

export const SkeletonSchedules = styled.div`
  width: 15%;
  height: calc(100vh - 224px);
`
