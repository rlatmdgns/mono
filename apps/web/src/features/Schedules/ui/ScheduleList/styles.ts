import styled from 'styled-components'

export const ScheduleListWrap = styled.div`
  &:nth-child(n + 2) {
    margin-top: 22px;
  }
`
export const ScheduleDate = styled.h3`
  margin-bottom: 12px;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray800};
`
export const ScheduleList = styled.ul``
