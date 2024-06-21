import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  min-height: 856px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 14px;
  overflow-x: auto;
  overflow-y: hidden;
  background: ${(props) => props.theme.colors.white};
`

export const InterviewSchedulesWrapper = styled.div`
  flex: 2;
  width: 100%;
  min-width: 838px;
  max-width: calc(100% - 256px);

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    max-width: 100%;
  }
`
