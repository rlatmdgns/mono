import styled from 'styled-components'

export const ScheduleBody = styled.div`
  height: 464px;
  overflow-y: auto;
  padding: 48px 106px;
  margin-top: 38px;
  background: ${(props) => props.theme.colors.neutralGray50};

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    margin-top: 14px;
    padding: 12px 25px;
  }

  ${(props) => `${props.theme.breakpoints.landscapeMobile} and (max-width: 1200px)`} {
    margin-top: 20px;
    padding: 24px 53px;
  }
`

export const InterviewWrap = styled.div``

export const InterviewInfoWrap = styled(ScheduleBody)`
  height: auto;
  padding: 32px 0;
  margin-bottom: 58px;
`
