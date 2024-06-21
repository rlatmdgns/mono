import styled from 'styled-components'

export const InterviewDateWrap = styled.div`
  max-width: 450px;
  width: 100%;

  &:nth-child(n + 2) {
    margin-top: 24px;
  }

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    width: 100%;
  }
`
export const InterviewDate = styled.h3`
  text-align: left;
  margin-bottom: 12px;

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    font-size: 16px;
  }
`

export const ScheduleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  ${(props) => `${props.theme.breakpoints.landscapeMobile}  and (max-width: 1200px)`} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    display: block;
  }
`
