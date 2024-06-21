import styled from 'styled-components'

export const RequestInterViewModal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.colors.white};
  box-shadow: rgb(0 0 0 / 20%) 0 0 8px;

  @media only screen and (max-height: 700px) {
    width: 100vw;
    height: 100vh;
  }
`
export const InterviewBody = styled.div<{ $currentStep: number }>`
  height: ${(props) => (props.$currentStep === 1 ? 'calc(100% - 238px)' : 'calc(100% -  150px)')};
  margin: ${(props) => props.$currentStep === 1 && '44px 0'};
  overflow-y: auto;

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    padding: 0 30px;
  }
`
