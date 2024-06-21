import styled from 'styled-components'

export const ScheduleHeader = styled.div`
  svg {
    ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
      width: 32px;
      height: 32px;
    }
    ${(props) => `${props.theme.breakpoints.landscapeMobile} and (max-width: 1200px)`} {
      width: 32px;
      height: 32px;
    }
  }
`
export const Title = styled.h1`
  margin-top: 16px;
  letter-spacing: -0.24px;
  line-height: 40px;
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  word-break: keep-all;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    margin-top: 0;
    font-size: 20px;
  }
  ${(props) => `${props.theme.breakpoints.landscapeMobile} and (max-width: 1200px)`} {
    margin-top: 0;
    font-size: 16px;
  }
`
