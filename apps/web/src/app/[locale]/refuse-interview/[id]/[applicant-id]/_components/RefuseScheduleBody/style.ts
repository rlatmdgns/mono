import styled from 'styled-components'

export const ScheduleBody = styled.div`
  display: flex;
  width: 509px;
  padding: 48px 89px;
  margin-top: 38px;
  flex-wrap: wrap;
  gap: 10px;
  background: ${(props) => props.theme.colors.neutralGray50};
  > div,
  input {
    flex: 1 1 100%;
    text-align: left;
  }
  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    width: 100%;
    padding: 25px;
  }

  ${(props) => `${props.theme.breakpoints.landscapeMobile}  and (max-width: 1200px)`} {
    width: 100%;
    padding: 24px 50px;
  }
`
